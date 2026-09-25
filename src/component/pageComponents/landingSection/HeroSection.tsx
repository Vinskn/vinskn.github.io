'use client';

import dynamic from 'next/dynamic';
import { motion } from 'motion/react';
import { IconBrandReactjs, IconBrandTypescript, IconBrandNextjs } from '@intentui/icons';
import { containerVariants } from '@/component/animation/containerVariants';
import { fadeRight, fadeUp } from '@/component/animation';

const Typewriter = dynamic(() => import('typewriter-effect'), { ssr: false });

export const HeroSection = () => {
  return (
    <section className="relative lg:px-20 sm:px-10 xs:px-5 xs:pt-8 sm:pt-10 lg:pt-0 flex lg:flex-row xs:flex-col-reverse lg:justify-between lg:items-center lg:h-[90vh] overflow-hidden">
      {/* Animated background blob */}
      <motion.div
        className="absolute -top-32 -right-32 w-125 h-125 rounded-full opacity-[0.08] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #e53935 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.15, 1],
          x: [0, 20, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Left Section */}
      <motion.div
        className="lg:max-w-[55%] xs:w-full z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Greeting badge */}
        <motion.div variants={fadeRight}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-mainAccent/10 text-mainAccent text-sm font-medium tracking-wide mb-4">
            <span className="inline-block animate-[wave_1.8s_ease-in-out_infinite]">👋</span>
            Hello, I&apos;m
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={fadeUp}
          className="text-textMain font-bold lg:text-5xl sm:text-4xl xs:text-3xl leading-tight tracking-tight"
        >
          Sinamo Kevin{' '}
          <span className="text-mainAccent">Nathanael</span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          variants={fadeUp}
          className="mt-3 lg:text-xl sm:text-lg xs:text-base font-mono text-textSec flex gap-4"
        >
          <span>A</span>
          <Typewriter
            options={{
              strings: [
                'Web Developer',
                'Mobile Developer',
                'Desktop Developer',
                'AI/ML Engineer',
                'Network Engineer',
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 80,
              delay: 100,
            }}
          />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={fadeUp} className="flex gap-4 mt-8">
          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-3 bg-mainAccent text-white font-semibold rounded-xl shadow-lg shadow-mainAccent/25 hover:bg-hoverAccent transition-colors duration-200 cursor-pointer"
          >
            Contact Me
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-3 border-2 border-border text-textMain font-semibold rounded-xl hover:border-mainAccent hover:text-mainAccent transition-colors duration-200 cursor-pointer"
          >
            Download CV
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Right Section — Orbital Rings */}
      <div className="relative lg:w-100 lg:h-100 sm:w-75 sm:h-75 xs:w-70 xs:h-70 xs:mb-10 lg:mb-0 z-10 shrink-0">
        <motion.div
          className="absolute inset-0 rounded-full border border-dashed border-border/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        />

        <motion.div
          className="absolute rounded-full border border-dashed border-mainAccent/20"
          style={{
            top: '20%',
            left: '20%',
            right: '20%',
            bottom: '20%',
          }}
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />

        {/* Center dot */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-mainAccent/30" />

        {[
          { value: '2+', label: 'Years', angle: -90 },
          { value: '20+', label: 'Projects', angle: 30 },
          { value: '25+', label: 'Tech Stack', angle: 150 },
        ].map((stat, idx) => {
          const angleRad = (stat.angle * Math.PI) / 180;
          const radius = 50;
          const x = 50 + radius * Math.cos(angleRad);
          const y = 50 + radius * Math.sin(angleRad);

          return (
            <motion.div
              key={`stat-${idx}`}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
              style={{
                left: `${x}%`,
                top: `${y}%`,
              }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: idx * 0.7,
              }}
            >
              <div className="bg-white/80 backdrop-blur-sm border border-border/40 rounded-xl px-4 py-3 shadow-sm text-center min-w-20">
                <p className="text-xl font-bold text-mainAccent leading-none">{stat.value}</p>
                <p className="text-[11px] text-textSec mt-0.5 whitespace-nowrap">{stat.label}</p>
              </div>
            </motion.div>
          );
        })}

        {/* Inner ring — Tech icons */}
        {[
          { Icon: IconBrandReactjs, angle: -30, color: '#61DAFB' },
          { Icon: IconBrandTypescript, angle: 90, color: '#3178C6' },
          { Icon: IconBrandNextjs, angle: 210, color: '#171717' },
        ].map((tech, idx) => {
          const angleRad = (tech.angle * Math.PI) / 180;
          const radius = 30;
          const x = 50 + radius * Math.cos(angleRad);
          const y = 50 + radius * Math.sin(angleRad);

          return (
            <motion.div
              key={`tech-${idx}`}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
              style={{
                left: `${x}%`,
                top: `${y}%`,
              }}
              animate={{ scale: [1, 1.18, 1] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: idx * 0.5,
              }}
            >
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center shadow-md"
                style={{
                  backgroundColor: `${tech.color}18`,
                  border: `1.5px solid ${tech.color}40`,
                }}
              >
                <tech.Icon className="w-5 h-5" style={{ color: tech.color }} />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Wave animation keyframes — injected via style tag */}
      <style jsx>{`
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(20deg); }
          50% { transform: rotate(-10deg); }
          75% { transform: rotate(15deg); }
        }
      `}</style>
    </section>
  );
};