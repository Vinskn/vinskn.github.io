import { createClient } from "@supabase/supabase-js";
import { useQuery } from "@tanstack/react-query";


export const useGetProject = () => {
    const supabase = createClient();
    return useQuery({
        queryKey: ["Project"],
        queryFn: async () => {
            const { data, error } = await supabase
                .from("projectList")
                .select('*');
            if (error) {
                throw error;
            }
            return data;
        },
        staleTime: 1000 * 60 * 3
    });
}