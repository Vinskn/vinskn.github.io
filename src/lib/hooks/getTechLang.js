import { useQuery } from "@tanstack/react-query";

export const useGetTechLang = () => {
    return useQuery({
        queryKey: ["TechLang"],
        queryFn: async () => {
            const res = await fetch("/api/techlang");
            const data = await res.json();
            if (res.ok) {
                return data;
            } else {
                throw new Error(data.error);
            }
        },
        staleTime: 1000 * 60 * 3
    });
}