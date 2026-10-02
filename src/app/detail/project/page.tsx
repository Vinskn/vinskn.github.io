import { OpeningProjectSection } from "@/component/pageComponents/projectSection/OpeningProjectSection";
import { ProjectHighlight } from "@/component/pageComponents/projectSection/ProjectHighlight";
import { RecentProject } from "@/component/pageComponents/projectSection/RecentProject";
import Footer from "@/component/shared/Footer";
import { getAllProject } from "@/lib/helper/getAllProject";

export default async function Project({}) {

  const projectData = await getAllProject()

  return (
    <div className="overflow-x-hidden">
      <OpeningProjectSection />
      <ProjectHighlight projectList={projectData[0]} />
      <RecentProject  projectList={projectData} />
      <Footer />
    </div>
  );
}
