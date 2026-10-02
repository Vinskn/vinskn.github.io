import { ContactSection, ExperienceSection, IntroSection, StackSection } from "@/component/pageComponents/landingSection";
import { HeroSection } from "@/component/pageComponents/landingSection/HeroSection";
import NavPages from "@/component/shared/NavPages";
import { getAllProject } from "@/lib/helper/getAllProject";
import { getAllSkill } from "@/lib/helper/getAllSkills";
import { client } from "@/lib/provider/SanityProvider";
import { TProject } from "@/types/projectType";

export default async function App() {

  // const projectList: TProject[] = await client.fetch(`*[_type == "projectList"] | order(date desc)`);
  const projectList = await getAllProject()
  const skillsList = await getAllSkill();

  return (
    <div className="overflow-x-hidden">
      <NavPages addStyle={""} />
      <HeroSection />
      <IntroSection />
      <StackSection dataTechLang={skillsList} />
      <ExperienceSection projectList={projectList} />
      <ContactSection />
    </div>
  );
}
