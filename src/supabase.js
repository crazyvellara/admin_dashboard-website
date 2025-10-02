import { createClient } from '@supabase/supabase-js'

// Replace with your project details
const supabaseUrl = "https://oqpbsmwdytmwvadmvbhw.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xcGJzbXdkeXRtd3ZhZG12Ymh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg5MTc3ODksImV4cCI6MjA3NDQ5Mzc4OX0.jJWJcIlkBSt9lftk6JSyw9UWzskY2KFHP6Ja2ePu46k"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)