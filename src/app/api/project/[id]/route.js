import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";


export async function GET(req, { params }) {
    const { id } = await params;
    
    let query = supabase.from('ProjectList').select('*').eq('id', id).order('date', { ascending: false })

    const { data, error } = await query
    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
    return NextResponse.json(data)
}