import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Esto evita que el build de GitHub Pages falle si las variables 
// se tardan un poco en cargar
if (!supabaseUrl || !supabaseAnonKey) {
    console.warn("Supabase variables are missing. Check your environment settings.")
}

export const supabase = createClient(
    supabaseUrl || 'https://placeholder.supabase.co', 
    supabaseAnonKey || 'placeholder'
)