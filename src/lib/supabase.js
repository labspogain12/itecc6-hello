import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://hehntchgrnetfhactisv.supabase.co'
const supabaseKey = 'sb_publishable_97MHO6MZ9MtlWv1r6dziwA_jdGNfgvQ'
export const supabase = createClient(supabaseUrl, supabaseKey)