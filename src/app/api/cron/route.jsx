
import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function GET(request) {
    const today = new Date().toISOString()
    
    try{
        const { data, error } = await supabase  
            .from('keepAlive')
            .update({ updated: today })
            .eq('id', 1)
            .select()
        if (error) {
            console.error('Supabase PATCH error:', error);
            return NextResponse.json({ success: false, error: error.message }, { status: 500 });
        }

        return NextResponse.json({ data: data, status: 200})
    }
    catch (err) {
        console.error('Cron job failed:', err);
        return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
    }
}