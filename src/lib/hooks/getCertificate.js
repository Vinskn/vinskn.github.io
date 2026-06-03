import { createClient } from "@supabase/supabase-js";
import { useQuery } from "@tanstack/react-query";



export const useGetCertificate = () => {
    const supabase = createClient();
    return useQuery({
        queryKey: ["Certificate"],
        queryFn: async () => {
            const { data, error } = await supabase
                .from("Certificate")
                .select('*');
            if (error) {
                throw error;
            }
            return data;
        },
        staleTime: 1000 * 60 * 3
    });
}