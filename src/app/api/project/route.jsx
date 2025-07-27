import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";


export async function GET(request) {
    const id = request.nextUrl.searchParams.get("id");
    let query = supabase.from('ProjectList').select('*').order('date', { ascending: false })

    if (id) {
        query = query.eq('id', id);
    }

    const { data, error } = await query
    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
    return NextResponse.json(data)
}