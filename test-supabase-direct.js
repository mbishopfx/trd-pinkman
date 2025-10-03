#!/usr/bin/env node

// Direct Supabase test
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://whybuzitxsjhegujlegr.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndoeWJ1eml0eHNqaGVndWpsZWdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg3NDIzNzUsImV4cCI6MjA3NDMxODM3NX0.LD7Dz8d_YzL01M1hoeDewi46_2vhkVBgx1oXvtroDSE';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testSupabase() {
  console.log('🔍 Testing Supabase connection...');
  
  try {
    // Test 1: Check if we can connect
    console.log('1. Testing basic connection...');
    const { data: tables, error: tablesError } = await supabase
      .from('jackson')
      .select('*')
      .limit(1);
    
    if (tablesError) {
      console.log('❌ Table access error:', tablesError.message);
      console.log('   Details:', tablesError);
      
      // Check if it's a table not found error
      if (tablesError.message.includes('relation "public.jackson" does not exist')) {
        console.log('📋 The "jackson" table does not exist yet.');
        console.log('   You need to create it in your Supabase dashboard.');
        console.log('   Here\'s the SQL to create the table:');
        console.log(`
CREATE TABLE jackson (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  project_type TEXT,
  location TEXT,
  timeline TEXT,
  budget TEXT,
  services TEXT[],
  description TEXT NOT NULL,
  referral TEXT,
  source_page TEXT,
  form_type TEXT
);

-- Enable Row Level Security (optional but recommended)
ALTER TABLE jackson ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow inserts (adjust as needed for your security requirements)
CREATE POLICY "Allow inserts" ON jackson FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow selects" ON jackson FOR SELECT USING (true);
        `);
      }
      return;
    }
    
    console.log('✅ Successfully connected to Supabase');
    console.log('✅ "jackson" table exists');
    console.log('📊 Current records in table:', tables?.length || 0);
    
    // Test 2: Try to insert a test record
    console.log('2. Testing insert operation...');
    const testLead = {
      first_name: 'Test',
      last_name: 'User',
      email: 'test@example.com',
      phone: '(555) 123-4567',
      description: 'Test submission from direct Supabase test',
      project_type: 'test',
      source_page: '/test',
      form_type: 'test'
    };
    
    const { data: insertData, error: insertError } = await supabase
      .from('jackson')
      .insert([testLead])
      .select();
    
    if (insertError) {
      console.log('❌ Insert error:', insertError.message);
      console.log('   Details:', insertError);
      return;
    }
    
    console.log('✅ Successfully inserted test record');
    console.log('📝 Inserted data:', insertData);
    
    // Test 3: Try to read the record back
    console.log('3. Testing select operation...');
    const { data: selectData, error: selectError } = await supabase
      .from('jackson')
      .select('*')
      .eq('email', 'test@example.com')
      .limit(5);
    
    if (selectError) {
      console.log('❌ Select error:', selectError.message);
      return;
    }
    
    console.log('✅ Successfully retrieved records');
    console.log('📊 Found records:', selectData?.length || 0);
    
    // Clean up test record
    if (insertData && insertData[0]) {
      console.log('4. Cleaning up test record...');
      const { error: deleteError } = await supabase
        .from('jackson')
        .delete()
        .eq('id', insertData[0].id);
      
      if (deleteError) {
        console.log('⚠️  Could not delete test record:', deleteError.message);
      } else {
        console.log('✅ Test record cleaned up');
      }
    }
    
    console.log('\n🎉 All Supabase tests passed! Your connection is working.');
    
  } catch (error) {
    console.error('❌ Unexpected error:', error);
  }
}

testSupabase();
