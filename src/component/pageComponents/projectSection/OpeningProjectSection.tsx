'use client';

import { motion, AnimatePresence } from 'motion/react';
import { containerVariants } from '@/component/animation/containerVariants';
import { fadeRight, fadeUp } from '@/component/animation';
import SectionDivider from '@/component/pageAssets/SectionDivider';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const sampleImage = [
  '/prj1.png',
  '/prj2.png',
  '/prj3.png',
];

export const OpeningProjectSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sampleImage.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative lg:snap-center flex lg:justify-between justify-center items-center h-screen w-full overflow-hidden lg:px-20 sm:px-10 xs:px-5">
      {/* Animated background blob */}
      <motion.div
        className="absolute -top-32 -left-32 w-125 h-125 rounded-full opacity-[0.07] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #e53935 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.15, 1],
          x: [0, 25, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Second blob — bottom right */}
      <motion.div
        className="absolute -bottom-40 -right-40 w-100 h-100 rounded-full opacity-[0.05] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #e53935 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          x: [0, -15, 0],
          y: [0, 10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Left — Text content */}
      <motion.div
        className="lg:max-w-[50%] xs:w-full z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Badge */}
        <motion.div variants={fadeRight}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-mainAccent/10 text-mainAccent text-sm font-medium tracking-wide mb-4">
            Projects
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={fadeUp}
          className="text-textMain font-bold lg:text-6xl sm:text-5xl xs:text-4xl leading-tight tracking-tight"
        >
          <span className="text-mainAccent">My</span> Projects
        </motion.h1>

        {/* Divider */}
        <motion.div variants={fadeUp}>
          <SectionDivider />
        </motion.div>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          className="mt-3 lg:text-xl sm:text-lg xs:text-base text-textSec"
        >
          Here are some of the projects I&apos;ve worked on
        </motion.p>
      </motion.div>

      {/* Right — Image carousel (hidden on mobile) */}
      <motion.div
        className="relative lg:w-[40%] lg:h-[70%] xs:hidden lg:block z-10"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        {/* Carousel container */}
        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl bg-[#f7f6f6]">
          {/* Animated background lines — visible in empty space behind image */}
          <div className="absolute inset-0 z-0 overflow-hidden opacity-[0.12]">
            {/* Horizontal scanning lines */}
            <motion.div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(0deg, transparent, transparent 30px, rgba(229,57,53,0.5) 30px, rgba(229,57,53,0.3) 31px)',
              }}
              animate={{ y: [0, 31] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
            {/* Vertical grid lines */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(229,57,53,0.15) 60px, rgba(229,57,53,0.15) 61px)',
              }}
            />
            {/* Diagonal sweep */}
            <motion.div
              className="absolute -inset-full w-[300%] h-full"
              style={{
                background:
                  'linear-gradient(115deg, transparent 40%, rgba(229,57,53,0.08) 50%, transparent 60%)',
              }}
              animate={{ x: ['-100%', '100%'] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          </div>

          {/* Image carousel */}
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentIndex}
              className="absolute inset-0 z-10"
              initial={{ y: '100%', scale: 1.05 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                y: { duration: 1.5, ease: [0.22, 1, 0.36, 1] },
                scale: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                opacity: { duration: 0.4, ease: 'easeOut' },
              }}
            >
              <Image
                src={sampleImage[currentIndex]}
                fill
                alt={`Project ${currentIndex + 1}`}
                className="object-contain object-center"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};
