
import { AboutMe } from "@/component/pageComponents/aboutSection/AboutSection";
import { Opening } from "@/component/pageComponents/aboutSection/OpeningSection";
import { Skill } from "@/component/pageComponents/aboutSection/SkillSection";
import { ExperienceSection } from "@/component/pageComponents/aboutSection/ExperienceSection";
import { getAllSkill } from "@/lib/helper/getAllSkills";
import { SkillCategory } from "@/types/skillType";
import { ContactSection } from "@/component/pageComponents/landingSection";

export default async function About() {
  const skillList = await getAllSkill();
  const sendSkill: SkillCategory[] = skillList.map((data) => {
    return { ...data.Skills };
  });

  return (
    <div className="px-10 overflow-x-hidden snap-y snap-proximity overflow-y-scroll h-screen">
      {/* opening */}
      <Opening />

      {/* about me */}
      <AboutMe />

      {/* skill */}
      <Skill skillData={sendSkill} />

      <ExperienceSection />
      

      {/* education - certification */}
     

      <ContactSection />
      
    </div>
  );
}
