'use client';

import { TProject } from '@/types/projectType';
import { motion } from 'motion/react';
import { containerVariants } from '@/component/animation/containerVariants';
import { fadeRight, fadeUp } from '@/component/animation';
import Image from 'next/image';
import Link from 'next/link';

export const ProjectHighlight = ({
  projectList,
}: {
  projectList: TProject;
}) => {
  const images = projectList?.image?.imageList ?? [];

  return (
    <section className="relative lg:px-20 sm:px-10 xs:px-5 lg:min-h-screen py-16 lg:py-0 flex flex-col justify-center overflow-hidden">
      {/* Background blob */}
      <motion.div
        className="absolute -top-32 -right-32 w-125 h-125 rounded-full opacity-[0.06] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #e53935 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.12, 1],
          x: [0, -15, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Header */}
      <motion.div
        className="z-10 mb-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={fadeRight}>
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-mainAccent/10 text-mainAccent text-sm font-medium tracking-wide mb-4">
            Featured
          </span>
        </motion.div>
        <motion.h2
          variants={fadeUp}
          className="text-textMain font-bold lg:text-5xl sm:text-4xl xs:text-3xl leading-tight tracking-tight"
        >
          Project <span className="text-mainAccent">Highlight</span>
        </motion.h2>
      </motion.div>

      {/* Content */}
      <div className="flex lg:flex-row xs:flex-col lg:gap-12 gap-8 lg:items-center z-10">
        {/* Left — Image showcase */}
        <motion.div
          className="lg:w-1/2 xs:w-full"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {projectList && (
            <div className="relative">
              {/* Main image */}
              <motion.div
                className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={images[0]}
                  fill
                  alt={`${projectList.projectName} - main screenshot`}
                  className="object-cover"
                />
                <div className="absolute inset-0 rounded-2xl border border-white/10 pointer-events-none" />
              </motion.div>

              {/* Stacked secondary images */}
              {images.length > 1 && (
                <motion.div
                  className="absolute -bottom-6 -right-4 w-[45%] aspect-video rounded-xl overflow-hidden shadow-lg border-4 border-white/90"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
                  whileHover={{ scale: 1.05, rotate: 1 }}
                >
                  <Image
                    src={images[1] ?? images[0]}
                    fill
                    alt={`${projectList.projectName} - secondary screenshot`}
                    className="object-cover"
                  />
                </motion.div>
              )}

              {images.length > 2 && (
                <motion.div
                  className="absolute -top-5 -left-4 w-[35%] aspect-video rounded-xl overflow-hidden shadow-lg border-4 border-white/90"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
                  whileHover={{ scale: 1.05, rotate: -1 }}
                >
                  <Image
                    src={images[2]}
                    fill
                    alt={`${projectList.projectName} - tertiary screenshot`}
                    className="object-cover"
                  />
                </motion.div>
              )}

              {/* Decorative ring */}
              <motion.div
                className="absolute -right-10 -bottom-10 w-24 h-24 rounded-full border border-dashed border-mainAccent/20 pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              />
            </div>
          )}
        </motion.div>

        {/* Right — Project details */}
        <motion.div
          className="lg:w-1/2 xs:w-full lg:mt-0 xs:mt-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Project type badge */}
          {projectList?.appType && (
            <motion.div variants={fadeUp} className="mb-2">
              <span className="inline-flex items-center px-3 py-1 rounded-lg bg-border/10 text-textSec text-xs font-medium tracking-wide uppercase">
                {projectList.appType}
              </span>
            </motion.div>
          )}

          {/* Project name */}
          <motion.h3
            variants={fadeUp}
            className="text-textMain font-bold lg:text-3xl sm:text-2xl xs:text-xl leading-tight tracking-tight"
          >
            {projectList?.projectName}
          </motion.h3>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="mt-4 text-textSec leading-relaxed lg:text-base xs:text-sm text-justify"
          >
            {projectList?.projectDesc}
          </motion.p>

          {/* Tech stack badges */}
          <motion.div variants={fadeUp} className="mt-6 flex gap-2 flex-wrap">
            {projectList?.utils?.map((lang, idx) => (
              <span
                key={`lang-${idx}`}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-mainAccent/8 text-textMain border border-mainAccent/15 hover:bg-mainAccent/15 hover:border-mainAccent/30 transition-colors duration-200 cursor-default"
              >
                {lang}
              </span>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div variants={fadeUp} className="flex gap-4 mt-8">
            <Link href={`/detail/project/${projectList?._id}`}>
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 bg-mainAccent text-white font-semibold rounded-xl shadow-lg shadow-mainAccent/25 hover:bg-hoverAccent transition-colors duration-200 cursor-pointer"
              >
                View Details
              </motion.button>
            </Link>
            {projectList?.websiteLink && (
              <Link href={projectList.websiteLink} target="_blank">
                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-6 py-3 border-2 border-border text-textMain font-semibold rounded-xl hover:border-mainAccent hover:text-mainAccent transition-colors duration-200 cursor-pointer"
                >
                  Live Site
                </motion.button>
              </Link>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
