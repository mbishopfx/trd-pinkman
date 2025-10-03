import { NextRequest, NextResponse } from 'next/server'
import { saveLead, Lead } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const lead: Lead = await request.json()
    
    console.log('🧪 Testing Supabase connection with lead:', lead)
    
    // Test saving to Supabase
    const result = await saveLead(lead)
    
    console.log('✅ Supabase save successful:', result)
    
    return NextResponse.json({
      success: true,
      message: 'Supabase connection working',
      data: result
    })
  } catch (error) {
    console.error('❌ Supabase test failed:', error)
    return NextResponse.json(
      { 
        success: false,
        error: 'Supabase connection failed',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
