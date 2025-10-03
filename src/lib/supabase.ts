import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://whybuzitxsjhegujlegr.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndoeWJ1eml0eHNqaGVndWpsZWdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg3NDIzNzUsImV4cCI6MjA3NDMxODM3NX0.LD7Dz8d_YzL01M1hoeDewi46_2vhkVBgx1oXvtroDSE'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Lead interface for TypeScript
export interface Lead {
  id?: string
  created_at?: string
  first_name: string
  last_name: string
  email: string
  phone: string
  project_type?: string
  location?: string
  timeline?: string
  budget?: string
  services?: string[]
  description: string
  referral?: string
  source_page?: string
  form_type?: string
}

// Function to save lead to Supabase
export async function saveLead(lead: Lead) {
  try {
    const { data, error } = await supabase
      .from('jackson')
      .insert([{
        ...lead,
        created_at: new Date().toISOString()
      }])
      .select()

    if (error) {
      console.error('Error saving lead:', error)
      throw error
    }

    return data
  } catch (error) {
    console.error('Error in saveLead:', error)
    throw error
  }
}

// Function to get all leads
export async function getLeads() {
  try {
    const { data, error } = await supabase
      .from('jackson')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching leads:', error)
      throw error
    }

    return data
  } catch (error) {
    console.error('Error in getLeads:', error)
    throw error
  }
}

// Function to delete a lead
export async function deleteLead(id: string) {
  try {
    const { error } = await supabase
      .from('jackson')
      .delete()
      .eq('id', id)

    if (error) {
      console.error('Error deleting lead:', error)
      throw error
    }

    return true
  } catch (error) {
    console.error('Error in deleteLead:', error)
    throw error
  }
}
