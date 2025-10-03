import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const { page, timestamp, userAgent, referrer, sessionId } = await request.json()
    
    // Store page view in Supabase
    const { error } = await supabase
      .from('analytics_pageviews')
      .insert([{
        page,
        timestamp: new Date(timestamp).toISOString(),
        user_agent: userAgent,
        referrer,
        session_id: sessionId,
        ip_address: request.ip || 'unknown'
      }])

    if (error) {
      console.error('Error storing page view:', error)
      // Don't fail the request - analytics should be non-blocking
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Analytics tracking error:', error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
