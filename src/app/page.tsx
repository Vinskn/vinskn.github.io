import { ContactSection, ExperienceSection, IntroSection, StackSection } from "@/component/pageComponents/landingSection";
import { HeroSection } from "@/component/pageComponents/landingSection/HeroSection";
import { client } from "@/lib/provider/SanityProvider";
import { TProject } from "@/types/projectType";

export default async function App() {

  const projectList: TProject[] = await client.fetch(`*[_type == "projectList"] | order(date desc)`);
  const skillsList = await client.fetch(`*[_type == "Skills"]`);

  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <IntroSection />
      <StackSection dataTechLang={skillsList} />
      <ExperienceSection projectList={projectList} />
      <ContactSection />
    </div>
  );
}
