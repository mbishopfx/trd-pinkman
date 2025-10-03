#!/usr/bin/env node

// Direct table creation using Supabase REST API
import fetch from 'node-fetch';

const SUPABASE_URL = 'https://whybuzitxsjhegujlegr.supabase.co';
const SERVICE_ROLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndoeWJ1eml0eHNqaGVndWpsZWdyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1ODc0MjM3NSwiZXhwIjoyMDc0MzE4Mzc1fQ.sgI3VDhZ66SKon_wZJDovD4l8sicSCWRZQkaOUV1kdk';

async function createTable() {
  try {
    console.log('🔧 Creating Supabase table using REST API...');
    
    const sql = `
      CREATE TABLE IF NOT EXISTS jackson (
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
      
      ALTER TABLE jackson ENABLE ROW LEVEL SECURITY;
      
      DROP POLICY IF EXISTS "Allow inserts" ON jackson;
      DROP POLICY IF EXISTS "Allow selects" ON jackson;
      DROP POLICY IF EXISTS "Allow deletes" ON jackson;
      
      CREATE POLICY "Allow inserts" ON jackson FOR INSERT WITH CHECK (true);
      CREATE POLICY "Allow selects" ON jackson FOR SELECT USING (true);
      CREATE POLICY "Allow deletes" ON jackson FOR DELETE USING (true);
    `;

    // Use Supabase's SQL execution endpoint
    const response = await fetch(`${SUPABASE_URL}/rest/v1/rpc/exec_sql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${SERVICE_ROLE_KEY}`,
        'apikey': SERVICE_ROLE_KEY
      },
      body: JSON.stringify({ sql })
    });

    if (!response.ok) {
      console.log('❌ RPC method not available, trying direct SQL execution...');
      
      // Alternative: Try using PostgREST directly
      const sqlResponse = await fetch(`${SUPABASE_URL}/rest/v1/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/sql',
          'Authorization': `Bearer ${SERVICE_ROLE_KEY}`,
          'apikey': SERVICE_ROLE_KEY
        },
        body: sql
      });

      if (!sqlResponse.ok) {
        console.log('❌ Direct SQL execution failed. Manual creation required.');
        console.log('\n📋 Please run this SQL in your Supabase SQL Editor:');
        console.log(sql);
        return;
      }
    }

    console.log('✅ Table creation request sent successfully!');
    
    // Test the table by inserting a test record
    console.log('🧪 Testing table with sample data...');
    
    const testData = {
      first_name: 'Test',
      last_name: 'User',
      email: 'test@example.com',
      phone: '(555) 123-4567',
      description: 'Test record to verify table creation',
      project_type: 'test',
      source_page: '/test',
      form_type: 'test'
    };

    const insertResponse = await fetch(`${SUPABASE_URL}/rest/v1/jackson`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${SERVICE_ROLE_KEY}`,
        'apikey': SERVICE_ROLE_KEY,
        'Prefer': 'return=representation'
      },
      body: JSON.stringify(testData)
    });

    if (insertResponse.ok) {
      const insertedData = await insertResponse.json();
      console.log('✅ Test record inserted successfully:', insertedData[0]?.id);
      
      // Clean up test record
      const deleteResponse = await fetch(`${SUPABASE_URL}/rest/v1/jackson?id=eq.${insertedData[0]?.id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${SERVICE_ROLE_KEY}`,
          'apikey': SERVICE_ROLE_KEY
        }
      });
      
      if (deleteResponse.ok) {
        console.log('✅ Test record cleaned up');
      }
      
      console.log('\n🎉 Supabase table is ready! Forms will now save properly.');
    } else {
      const error = await insertResponse.text();
      console.log('❌ Table test failed:', error);
      console.log('\n📋 Please manually create the table using this SQL:');
      console.log(sql);
    }

  } catch (error) {
    console.error('❌ Error:', error.message);
    console.log('\n📋 Please manually create the table in Supabase SQL Editor with this SQL:');
    console.log(`
CREATE TABLE IF NOT EXISTS jackson (
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

ALTER TABLE jackson ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow inserts" ON jackson FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow selects" ON jackson FOR SELECT USING (true);
CREATE POLICY "Allow deletes" ON jackson FOR DELETE USING (true);
    `);
  }
}

createTable();
