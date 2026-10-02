'use client';

import { SkillCategory } from '@/types/skillType';
import { motion } from 'motion/react';
import { containerVariants } from '@/component/animation/containerVariants';
import { fadeRight, fadeUp } from '@/component/animation';
import Image from 'next/image';

export const Skill = ({ skillData }: { skillData: SkillCategory[] }) => {
  const iconUrls = skillData.flatMap((data) => data.iconUrl || []);
  const languages = [...new Set(skillData.flatMap((data) => data.languages || []))];
  const tools = [...new Set(skillData.flatMap((data) => data.tools || []))];

  return (
    <section className="relative lg:snap-center lg:px-20 sm:px-10 xs:px-5 lg:min-h-screen py-16 lg:py-0 flex flex-col justify-center overflow-hidden">
      {/* Background blob */}
      <motion.div
        className="absolute -top-20 -right-20 w-100 h-100 rounded-full opacity-[0.05] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #e53935 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.12, 1],
          x: [0, -10, 0],
          y: [0, 15, 0],
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
            Tech Stack
          </span>
        </motion.div>
        <motion.h2
          variants={fadeUp}
          className="text-textMain font-bold lg:text-5xl sm:text-4xl xs:text-3xl leading-tight tracking-tight"
        >
          Skills & <span className="text-mainAccent">Stack</span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="mt-3 lg:text-xl sm:text-lg xs:text-base text-textSec"
        >
          As a full-stack Software Engineer, I specialize in building scalable web applications using modern technologies such as Next.js, React, and Tailwind CSS. I&apos;m also expanding my expertise into Machine Learning and Internet of Things.
        </motion.p>
      </motion.div>

      {/* Icon badges grid */}
      <motion.div
        className="z-10 mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.04 } },
        }}
      >
        <div className="flex flex-wrap gap-4 justify-start">
          {iconUrls.map((url, idx) => (
            <motion.div
              key={`icon-${idx}`}
              variants={{
                hidden: { opacity: 0, scale: 0.7 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              whileHover={{ scale: 1.15, y: -4 }}
              className="w-14 h-14 rounded-xl bg-white/80 backdrop-blur-sm border border-border/40 shadow-sm flex items-center justify-center cursor-default hover:shadow-md hover:border-mainAccent/30 transition-all duration-200"
            >
              <Image
                src={url}
                alt="skill icon"
                width={32}
                height={32}
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Languages & Tools text badges */}
      <motion.div
        className="z-10 flex flex-col gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.06 } },
        }}
      >
        {/* Languages */}
        {languages.length > 0 && (
          <div>
            <p className="text-sm font-medium text-textSec mb-3 tracking-wide uppercase">
              Languages
            </p>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang, idx) => (
                <motion.span
                  key={`lang-${idx}`}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="px-4 py-1.5 rounded-full text-sm font-medium bg-mainAccent/8 text-textMain border border-mainAccent/15 hover:bg-mainAccent/15 hover:border-mainAccent/30 transition-colors duration-200 cursor-default"
                >
                  {lang}
                </motion.span>
              ))}
            </div>
          </div>
        )}

        {/* Tools / Frameworks */}
        {tools.length > 0 && (
          <div>
            <p className="text-sm font-medium text-textSec mb-3 tracking-wide uppercase">
              Tools & Frameworks
            </p>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool, idx) => (
                <motion.span
                  key={`tool-${idx}`}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="px-4 py-1.5 rounded-full text-sm font-medium bg-border/20 text-textMain border border-border/40 hover:bg-mainAccent/10 hover:border-mainAccent/25 transition-colors duration-200 cursor-default"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
};
