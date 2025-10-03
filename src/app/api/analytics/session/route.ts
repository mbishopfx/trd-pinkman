import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const { sessionId, duration, endTime } = await request.json()
    
    // Store session data in Supabase
    const { error } = await supabase
      .from('analytics_sessions')
      .insert([{
        session_id: sessionId,
        duration_ms: duration,
        end_time: new Date(endTime).toISOString()
      }])

    if (error) {
      console.error('Error storing session data:', error)
      // Don't fail the request - analytics should be non-blocking
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Session tracking error:', error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
