// Simple test script to verify integrations
const testLead = {
  first_name: "Test",
  last_name: "User", 
  email: "test@example.com",
  phone: "(555) 123-4567",
  description: "This is a test submission to verify the system is working correctly.",
  project_type: "general-inquiry",
  source_page: "/test",
  form_type: "test-form"
}

async function testFormSubmission() {
  try {
    console.log('🧪 Testing form submission...')
    
    // Test Supabase lead storage
    const supabaseResponse = await fetch('http://localhost:3000/api/test-supabase', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(testLead)
    })
    
    if (supabaseResponse.ok) {
      console.log('✅ Supabase connection working')
    } else {
      console.log('❌ Supabase connection failed')
    }
    
    // Test email sending
    const emailResponse = await fetch('http://localhost:3000/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(testLead)
    })
    
    if (emailResponse.ok) {
      console.log('✅ Email sending working')
    } else {
      console.log('❌ Email sending failed')
    }
    
    console.log('🎉 Integration test complete!')
    
  } catch (error) {
    console.error('❌ Test failed:', error)
  }
}

// Run test if this file is executed directly
if (require.main === module) {
  testFormSubmission()
}

module.exports = { testFormSubmission, testLead }
