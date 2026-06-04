import { supabase } from "@/lib/supabase/supabase";
import { NextResponse } from "next/server";

export async function GET(request) {
    const [
        {data: apiLang, error: apiLangError},
        {data: mobileLang, error: mobileLangError},
        {data: mlLang, error: mlLangError},
        {data: webLang, error: webLangError},
        {data: apiTools, error: apiToolsError},
        {data: mobileTools, error: mobileToolsError},
        {data: mlTools, error: mlToolsError},
        {data: webTools, error: webToolsError}
    ] = await Promise.all([
        supabase.from("api_lang").select("*"),
        supabase.from("mobiledev_lang").select("*"),
        supabase.from("ml_lang").select("*"),
        supabase.from("webdev_lang").select("*"),
        supabase.from("api_tools").select("*"),
        supabase.from("mobiledev_tools").select("*"),
        supabase.from("ml_tools").select("*"),
        supabase.from("webdev_tools").select("*")
    ])
    if (apiLangError || mobileLangError || mlLangError || webLangError || apiToolsError || mobileToolsError || mlToolsError || webToolsError) {
        return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
    }
    return NextResponse.json({ 
        web: {
            lang: webLang.map(item => item.lang),
            tools: webTools.map(item => item.tools)
        },
        api: {
            lang: apiLang.map(item => item.lang),
            tools: apiTools.map(item => item.tools)
        },
        mobile: {
            lang: mobileLang.map(item => item.lang),
            tools: mobileTools.map(item => item.tools)
        },
        ml: {
            lang: mlLang.map(item => item.lang),
            tools: mlTools.map(item => item.tools)
        }
     });
}
