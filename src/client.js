
import { createClient } from '@supabase/supabase-js'

const URL = 'https://oivpafczkwaltpknrnaw.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9pdnBhZmN6a3dhbHRwa25ybmF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwMTUxMTUsImV4cCI6MjA2OTU5MTExNX0.29RA98dPyG6o8UJg_GMu-nia81C3TG81s24xhOAs1gI'

export const supabase = createClient(URL, API_KEY)

