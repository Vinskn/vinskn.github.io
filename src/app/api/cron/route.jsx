
import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function GET(request) {
    // const isFromCron = request.headers.get("x-vercel-cron") === "1";

    // if (!isFromCron) {
    //     return new Response('Unauthorized', { status: 401 });
    // }

    try{
        const { data, error } = await supabase  
            .from('keepAlive')
            .update({ updated: new Date().toISOString() })
            .eq('id', 1)
            .select()

        if (error) {
            console.error('Supabase PATCH error:', error);
            return NextResponse.json({ success: false, error: error.message }, { status: 500 });
        }

        return NextResponse.json({ success: "True", status: 500})
    }
    catch (err) {
        console.error('Cron job failed:', err);
        return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
    }
}