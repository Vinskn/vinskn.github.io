import { TProject } from "@/types/projectType";
import { client } from "../provider/SanityProvider";
import { cache } from "react";

export const getAProject = cache(async (id: string): Promise<TProject | null> => {
  const projectList: TProject = await client.fetch(
    `*[_type == "projectList" && _id == $id][0]`,
    {
      id,
    },
    {
      next: { tags: ["projects"] },
    }
  );
  return projectList;
}); 