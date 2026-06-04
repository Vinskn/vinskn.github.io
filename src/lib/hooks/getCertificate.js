import { useQuery } from "@tanstack/react-query";



export const useGetCertificate = () => {
    return useQuery({
        queryKey: ["certificate"],
        queryFn: async () => {
            const res = await fetch("/api/certificate");
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