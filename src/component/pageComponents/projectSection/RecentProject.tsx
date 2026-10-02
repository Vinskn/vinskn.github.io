"use client";

import SectionDivider from "@/component/pageAssets/SectionDivider";
import { TProject } from "@/types/projectType";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export const RecentProject = ({ projectList }: { projectList: TProject[] }) => {
  return (
    <section className="lg:px-15 px-3">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <h2 className="text-4xl font-bold lg:text-start text-center">
          Recent Project
        </h2>
        <SectionDivider style={"block lg:mx-0 xs:mx-auto"} />
      </motion.div>
      <div className="flex lg:gap-5 gap-2 flex-wrap justify-center">
        {projectList?.slice(0, 6).map((data, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative lg:w-4/10 w-full h-75 m-5 bg-bgSoft rounded-lg"
          >
            <Link href={`/detail/project/${data._id}`}>
              <div className="relative w-full h-75 aspect-video">
                <Image
                  src={data.image.coverUrl}
                  fill
                  alt={data.projectName}
                  className="object-contain object-top rounded-lg"
                />
              </div>
              <div className="absolute z-10 top-0 p-6 bg-white/40 h-full w-full rounded-lg text-textMain backdrop-blur-lg flex flex-col justify-center transition delay-150 ease-linear hover:opacity-0 select-none cursor-pointer">
                <span className="absolute left-0 top-0 lg:mt-5 pl-3 pr-5 py-1 lg:rounded-tl-none xs:rounded-tl-lg rounded-r-xl text-white text-xs font-semibold bg-mainAccent tracking-wide">
                  {data.location} · {data.workType}
                </span>

                <h3 className="font-bold text-xl text-center text-textMain leading-snug">
                  {data.projectName}
                </h3>
                <span className="text-center text-textMain text-sm mt-1">
                  {data.appType} · {data.date.split('-')[0]}
                </span>

                <p className="mt-3 text-sm text-shadow-textMain leading-relaxed line-clamp-3 text-center">
                  {data.projectDesc}
                </p>

                <div className="flex gap-2 flex-wrap justify-center mt-4">
                  {data.utils.slice(0,4).map((util, utilIdx) => (
                    <span
                      key={utilIdx}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-mainAccent/8 text-textMain border border-mainAccent/15"
                    >
                      {utilIdx === 3 && data.utils.length > 4 ? "..." : util}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="flex flex-col items-center mt-10">
        <Link href="/detail/project/archive">
          <button className="bg-hoverAccent hover:bg-secAccent text-white font-semibold py-2 px-13 rounded-xl">
            See Archive
          </button>
        </Link>
      </div>
    </section>
  );
};
