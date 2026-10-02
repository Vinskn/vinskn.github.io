
import { TSkill } from "@/types/skillType";
import { client } from "../provider/SanityProvider";
import { cache } from "react";

export const getAllSkill = cache(async (): Promise<TSkill[]> => {
  const skillList: TSkill[] = await client.fetch(
    `*[_type == "Skills"]`,
    {},
    {
      next: { tags: ["skills"] },
    }
  );
  return skillList;
});