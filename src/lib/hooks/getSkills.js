import { useQuery } from "@tanstack/react-query";

export const useGetSkills = () => {
    return useQuery({
        queryKey: ["skills"],
        queryFn: async () => {
            const res = await fetch("/api/skills");
            const data = await res.json();
            const result = data.map(item => item.iconPath);
            if (res.ok) {
                return result;
            } else {
                throw new Error(data.error);
            }
        },
        staleTime: 1000 * 60 * 3
    });
}