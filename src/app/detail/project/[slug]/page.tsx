import Footer from "@/component/shared/Footer";
import { getAProject } from "@/lib/helper/getAProject";
import { IconArrowLeft, IconBrandGithub, IconChainLink } from "@intentui/icons";
import Image from "next/image";
import Link from "next/link";

export default async function DetailProject({ params }) {
  const { slug: id } = await params;
  const projectData = await getAProject(id);

  return (
    <>
      {/* Hero section */}
      <section className="relative lg:px-20 sm:px-10 xs:px-5 min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Back button */}
        <Link
          href="/detail/project"
          className="inline-flex items-center gap-2 text-textSec hover:text-mainAccent transition-colors duration-200 mb-8 group absolute top-8"
        >
          <IconArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
          <span className="text-sm font-medium">Back to Projects</span>
        </Link>

        <div className="flex lg:flex-row flex-col lg:gap-16 gap-10 lg:items-center">
          {/* Left — Project info */}
          <div className="lg:w-1/2 flex flex-col gap-8">
            {/* Badge + Title */}
            <div>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-mainAccent/10 text-mainAccent text-sm font-medium tracking-wide mb-4">
                {projectData.appType}
              </span>
              <h1 className="text-textMain font-bold lg:text-5xl sm:text-4xl xs:text-3xl leading-tight tracking-tight">
                {projectData.projectName}
              </h1>
            </div>

            {/* Tech stack */}
            <div>
              <span className="text-xs font-medium text-textSec uppercase tracking-widest mb-3 block">
                Technology
              </span>
              <div className="flex flex-wrap gap-2">
                {projectData.utils?.map((util, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-mainAccent/8 text-textMain border border-mainAccent/15"
                  >
                    {util}
                  </span>
                ))}
              </div>
            </div>

            {/* Project info */}
            <div>
              <span className="text-xs font-medium text-textSec uppercase tracking-widest mb-3 block">
                Project Info
              </span>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-textMain">
                  <span className="w-1.5 h-1.5 rounded-full bg-mainAccent/50" />
                  <span>Completed in: <strong>{projectData.date?.split('-')[0]}</strong></span>
                </div>
                <div className="flex items-center gap-2 text-textMain">
                  <span className="w-1.5 h-1.5 rounded-full bg-mainAccent/50" />
                  <span>Built in: <strong>{projectData.compleateTime}</strong></span>
                </div>
                <div className="flex items-center gap-2 text-textMain">
                  <span className="w-1.5 h-1.5 rounded-full bg-mainAccent/50" />
                  <span>Location: <strong>{projectData.location}</strong></span>
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-3">
              {projectData.githubLink != null && (
                <Link href={projectData.githubLink} target="_blank">
                  <div className="w-11 h-11 rounded-xl bg-white/80 border border-border/40 shadow-sm flex items-center justify-center hover:border-mainAccent/30 hover:shadow-md transition-all duration-200">
                    <IconBrandGithub className="w-5 h-5 text-textMain" />
                  </div>
                </Link>
              )}
              {projectData.websiteLink != null && (
                <Link href={projectData.websiteLink} target="_blank">
                  <div className="w-11 h-11 rounded-xl bg-white/80 border border-border/40 shadow-sm flex items-center justify-center hover:border-mainAccent/30 hover:shadow-md transition-all duration-200">
                    <IconChainLink className="w-5 h-5 text-mainAccent" />
                  </div>
                </Link>
              )}
              {projectData.websiteLink != null && (
                <Link href={projectData.websiteLink} target="_blank">
                  <div className="h-11 px-5 rounded-xl bg-mainAccent text-white font-semibold text-sm flex items-center justify-center shadow-lg shadow-mainAccent/25 hover:bg-hoverAccent transition-colors duration-200">
                    Visit Live Site
                  </div>
                </Link>
              )}
            </div>
          </div>

          {/* Right — Description */}
          <div className="lg:w-1/2 flex flex-col gap-5">
            <div>
              <span className="text-xs font-medium text-textSec uppercase tracking-widest mb-3 block">
                Description
              </span>
              <p className="text-textMain leading-relaxed text-justify">
                {projectData.projectDesc}
              </p>
            </div>

            {/* Category badges */}
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-mainAccent/10 text-mainAccent border border-mainAccent/20">
                {projectData.workType}
              </span>
              <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-border/15 text-textMain border border-border/25">
                {projectData.type}
              </span>
              <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-border/15 text-textMain border border-border/25">
                {projectData.appType}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Image gallery */}
      <section className="lg:px-20 sm:px-10 xs:px-5 py-16">
        <span className="text-xs font-medium text-textSec uppercase tracking-widest mb-6 block text-center">
          Project Screenshots
        </span>
        <div className="flex flex-col items-center gap-6">
          {projectData.image?.imageList?.map((imgSrc, idx) => (
            <div
              key={idx}
              className="relative lg:w-2/3 w-full aspect-video rounded-2xl overflow-hidden shadow-lg border border-border/20"
            >
              <Image
                src={imgSrc}
                fill
                alt={`${projectData.projectName} — screenshot ${idx + 1}`}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}