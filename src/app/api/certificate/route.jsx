import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";


export async function GET(request) {
    const { data, error } = await supabase.from('Certificate').select('*').order('receiveAt', { ascending: false })
    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
    return NextResponse.json(data)
}