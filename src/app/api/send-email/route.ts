import { NextRequest, NextResponse } from 'next/server'
import { sendContactEmail } from '@/lib/email'
import { Lead } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const lead: Lead = await request.json()
    
    // Validate required fields
    if (!lead.first_name || !lead.last_name || !lead.email || !lead.description) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Send email
    const result = await sendContactEmail(lead)
    
    return NextResponse.json({
      success: true,
      message: 'Email sent successfully',
      messageId: result.messageId
    })
  } catch (error) {
    console.error('Error in send-email API:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
