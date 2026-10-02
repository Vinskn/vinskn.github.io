'use client';

import { motion } from 'motion/react';
import { containerVariants } from '@/component/animation/containerVariants';
import { fadeRight, fadeUp } from '@/component/animation';
import SectionDivider from '@/component/pageAssets/SectionDivider';
import Image from 'next/image';

export const Opening = () => {
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
            About
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={fadeUp}
          className="text-textMain font-bold lg:text-6xl sm:text-5xl xs:text-4xl leading-tight tracking-tight"
        >
          About <span className="text-mainAccent">Me</span>
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
          Here&apos;s a bit more about who I am
        </motion.p>
      </motion.div>

      {/* Right — Photo collage (hidden on mobile) */}
      <motion.div
        className="relative lg:w-[40%] lg:h-[70%] xs:hidden lg:block z-10"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        {/* Main photo */}
        <motion.div
          className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src="/myPict.jpg"
            fill
            alt="Me"
            className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
        </motion.div>

        {/* Floating photo — top left */}
        <motion.div
          className="absolute -left-12 -top-8 w-40 h-52 rounded-xl overflow-hidden shadow-lg border-4 border-white/80"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          whileHover={{ scale: 1.05, rotate: -2 }}
        >
          <Image
            src="/myPict2.jpg"
            fill
            alt="Me2"
            className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
        </motion.div>

        {/* Floating photo — bottom right */}
        <motion.div
          className="absolute -right-10 -bottom-8 w-44 h-36 rounded-xl overflow-hidden shadow-lg border-4 border-white/80"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
          whileHover={{ scale: 1.05, rotate: 2 }}
        >
          <Image
            src="/myPict3.jpg"
            fill
            alt="Me3"
            className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
          />
        </motion.div>

        {/* Decorative accent ring */}
        <motion.div
          className="absolute -right-16 -top-16 w-32 h-32 rounded-full border border-dashed border-mainAccent/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />
      </motion.div>
    </section>
  );
};
