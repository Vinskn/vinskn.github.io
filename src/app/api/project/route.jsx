import { supabase } from "@/lib/supabase/supabase";
import { NextResponse } from "next/server";

export async function GET(req) {
    let query = supabase.from("ProjectList").select("*").order("date", { ascending: false });

    const { data, error } = await query;
    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json(data);
}
