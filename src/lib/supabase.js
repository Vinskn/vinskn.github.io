import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URI
const publicKey = process.env.SUPABASE_ANNON_KEY

export const supabase = createClient(supabaseUrl, publicKey);