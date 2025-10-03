import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(request: NextRequest) {
  try {
    // Try to fetch real analytics data from our tracking tables
    const now = new Date()
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)

    let isRealData = false
    let analyticsData

    try {
      // Fetch today's visitors
      const { data: todayVisitors, error: todayError } = await supabase
        .from('analytics_pageviews')
        .select('session_id')
        .gte('timestamp', todayStart.toISOString())

      // Fetch total unique visitors (last 30 days)
      const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)
      const { data: totalVisitors, error: totalError } = await supabase
        .from('analytics_pageviews')
        .select('session_id')
        .gte('timestamp', thirtyDaysAgo.toISOString())

      // Fetch weekly data
      const { data: weeklyData, error: weeklyError } = await supabase
        .from('analytics_pageviews')
        .select('timestamp, session_id')
        .gte('timestamp', weekAgo.toISOString())

      // Fetch top pages
      const { data: topPagesData, error: pagesError } = await supabase
        .from('analytics_pageviews')
        .select('page')
        .gte('timestamp', weekAgo.toISOString())

      // Fetch session durations
      const { data: sessionsData, error: sessionsError } = await supabase
        .from('analytics_sessions')
        .select('duration_ms')
        .gte('end_time', weekAgo.toISOString())

      if (!todayError && !totalError && !weeklyError && todayVisitors && totalVisitors && weeklyData) {
        isRealData = true

        // Process real data
        const uniqueTodayVisitors = new Set(todayVisitors.map(v => v.session_id)).size
        const uniqueTotalVisitors = new Set(totalVisitors.map(v => v.session_id)).size

        // Process weekly data
        const weeklyVisitorsByDay = Array.from({ length: 7 }, (_, i) => {
          const date = new Date(now.getTime() - (6 - i) * 24 * 60 * 60 * 1000)
          const dayStart = new Date(date.getFullYear(), date.getMonth(), date.getDate())
          const dayEnd = new Date(dayStart.getTime() + 24 * 60 * 60 * 1000)
          
          const dayVisitors = weeklyData.filter(v => {
            const timestamp = new Date(v.timestamp)
            return timestamp >= dayStart && timestamp < dayEnd
          })
          
          const uniqueDayVisitors = new Set(dayVisitors.map(v => v.session_id)).size

          return {
            day: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][date.getDay()],
            visitors: uniqueDayVisitors,
            date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
          }
        })

        // Process top pages
        const pageViews: Record<string, number> = {}
        topPagesData?.forEach((p: any) => {
          pageViews[p.page] = (pageViews[p.page] || 0) + 1
        })
        
        const sortedPages = Object.entries(pageViews)
          .sort(([,a], [,b]) => b - a)
          .slice(0, 5)
          .map(([path, views], index) => ({
            path,
            views,
            percentage: Math.max(50 - (index * 10), 5)
          }))

        // Calculate average session duration
        const avgSessionDuration = sessionsData && sessionsData.length > 0
          ? Math.floor(sessionsData.reduce((sum: number, s: any) => sum + s.duration_ms, 0) / sessionsData.length / 1000)
          : 180

        // Calculate bounce rate (sessions with only 1 page view)
        const singlePageSessions = weeklyData.reduce((acc: Record<string, number>, curr: any) => {
          acc[curr.session_id] = (acc[curr.session_id] || 0) + 1
          return acc
        }, {})
        
        const totalSessions = Object.keys(singlePageSessions).length
        const bouncedSessions = Object.values(singlePageSessions).filter(count => count === 1).length
        const bounceRate = totalSessions > 0 ? ((bouncedSessions / totalSessions) * 100).toFixed(1) + '%' : '0%'

        analyticsData = {
          totalVisitors: uniqueTotalVisitors,
          todayVisitors: uniqueTodayVisitors,
          weeklyData: weeklyVisitorsByDay,
          bounceRate,
          avgSessionDuration,
          topPages: sortedPages,
          lastUpdated: new Date().toISOString(),
          isRealData: true,
          note: "Real visitor data from your website tracking"
        }
      }
    } catch (dbError) {
      console.log('Database analytics not available, using enhanced mock data:', dbError)
    }

    // Fallback to enhanced mock data if real data isn't available
    if (!isRealData) {
      const baseVisitors = 12000
      const dailyVariation = Math.floor(Math.random() * 400) + 200

      analyticsData = {
        totalVisitors: baseVisitors + Math.floor(Math.random() * 3000),
        todayVisitors: dailyVariation,
        weeklyData: Array.from({ length: 7 }, (_, i) => {
          const date = new Date()
          date.setDate(date.getDate() - (6 - i))
          
          let baseDaily = 180
          const dayOfWeek = date.getDay()
          if (dayOfWeek === 0 || dayOfWeek === 6) {
            baseDaily = 120
          } else if (dayOfWeek >= 1 && dayOfWeek <= 5) {
            baseDaily = 220
          }
          
          return {
            day: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][dayOfWeek],
            visitors: baseDaily + Math.floor(Math.random() * 100) - 50,
            date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
          }
        }),
        bounceRate: (25 + Math.random() * 15).toFixed(1) + '%',
        avgSessionDuration: Math.floor(120 + Math.random() * 180),
        topPages: [
          { path: '/', views: Math.floor(Math.random() * 500) + 800, percentage: 45 },
          { path: '/services', views: Math.floor(Math.random() * 200) + 300, percentage: 25 },
          { path: '/gallery', views: Math.floor(Math.random() * 150) + 200, percentage: 15 },
          { path: '/contact', views: Math.floor(Math.random() * 100) + 150, percentage: 10 },
          { path: '/about', views: Math.floor(Math.random() * 80) + 100, percentage: 5 }
        ],
        lastUpdated: new Date().toISOString(),
        isRealData: false,
        note: "Enhanced mock data - Create analytics tables in Supabase to see real visitor data"
      }
    }

    return NextResponse.json(analyticsData)
  } catch (error) {
    console.error('Error fetching analytics:', error)
    return NextResponse.json(
      { error: 'Failed to fetch analytics data' },
      { status: 500 }
    )
  }
}