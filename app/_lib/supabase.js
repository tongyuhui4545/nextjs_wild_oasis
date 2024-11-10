
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://mtqprzbcfvnxkulgdehh.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10cXByemJjZnZueGt1bGdkZWhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzEyMDgwNzgsImV4cCI6MjA0Njc4NDA3OH0.cM-aKUfHU8B2owVVpKMMo-aalSK9AOmzMQFYN41dpR4'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase