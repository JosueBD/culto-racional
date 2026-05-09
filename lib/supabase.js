import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Solo mostrar el error si estamos en el cliente y faltan las llaves
if (typeof window !== 'undefined' && (!supabaseUrl || !supabaseAnonKey)) {
    console.error("Error: Faltan las variables de entorno de Supabase. Revisa tu archivo .env.local")
}

export const supabase = createClient(
    supabaseUrl || '', 
    supabaseAnonKey || ''
)