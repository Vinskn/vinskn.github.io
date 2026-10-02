import { TProject } from "@/types/projectType";
import { client } from "../provider/SanityProvider";
import { cache } from "react";

export const getAllProject = cache(async (): Promise<TProject[]> => {
  const projectList: TProject[] = await client.fetch(
    `*[_type == "projectList"] | order(date desc)`,
    {},
    {
      next: { tags: ["projects"] },
    }
  );
  return projectList;
});