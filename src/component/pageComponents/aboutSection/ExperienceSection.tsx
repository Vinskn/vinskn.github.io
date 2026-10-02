'use client';

import { motion, useMotionValue } from 'motion/react';
import { containerVariants } from '@/component/animation/containerVariants';
import { fadeRight, fadeUp } from '@/component/animation';
import { useRef } from 'react';

export interface TimelineItem {
  id: string | number;
  year: string;
  title: string;
  description: string;
  position: 'top' | 'bottom';
  isCompleted?: boolean;
}

interface HorizontalTimelineProps {
  items?: TimelineItem[];
}

const defaultItems: TimelineItem[] = [
  {
    id: 1,
    year: '2023',
    title: 'College Student: Indonesia University of Education',
    description: 'Software Engineer Department',
    position: 'bottom',
    isCompleted: true,
  },
  {
    id: 2,
    year: '2026',
    title: 'Makers Institute',
    description: 'Internship',
    position: 'top',
    isCompleted: true,
  },
  {
    id: 3,
    year: '2001',
    title: 'iPod',
    description:
      'The iPod is a discontinued series of portable media players and multi-purpose mobile devices.',
    position: 'bottom',
    isCompleted: true,
  },
  {
    id: 4,
    year: '2007',
    title: 'iPhone',
    description:
      "iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile operating system.",
    position: 'top',
    isCompleted: true,
  },
  {
    id: 5,
    year: '2015',
    title: 'Apple Watch',
    description:
      'The Apple Watch is a line of smartwatches produced by Apple Inc.',
    position: 'bottom',
    isCompleted: true,
  },
];

export const ExperienceSection: React.FC<HorizontalTimelineProps> = ({
  items = defaultItems,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const dragX = useMotionValue(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    startX.current = e.clientX;
    scrollLeft.current = scrollRef.current?.scrollLeft ?? 0;
    scrollRef.current?.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    const dx = e.clientX - startX.current;
    scrollRef.current.scrollLeft = scrollLeft.current - dx;
    dragX.set(dx);
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  return (
    <section className="relative lg:snap-center lg:px-20 sm:px-10 mt-20 xs:px-5 lg:min-h-screen py-16 lg:py-0 flex flex-col justify-center overflow-hidden">
      {/* Background blob */}
      <motion.div
        className="absolute -bottom-24 -left-24 w-100 h-100 rounded-full opacity-[0.05] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #e53935 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 15, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 10,
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
            Timeline
          </span>
        </motion.div>
        <motion.h2
          variants={fadeUp}
          className="text-mainAccent font-bold lg:text-5xl sm:text-4xl xs:text-3xl leading-tight tracking-tight"
        >
          Ex<span className="text-textMain">perience</span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="mt-3 lg:text-xl sm:text-lg xs:text-base text-textSec"
        >
          My Journey &apos;till now
        </motion.p>
      </motion.div>

      {/* Draggable timeline container */}
      <div className="relative z-10">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-linear-to-r from-white to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-linear-to-l from-white to-transparent z-20 pointer-events-none" />

        {/* Drag hint */}
        <p
          className="text-xs text-textSec/60 mb-3 flex items-center justify-center gap-1.5 select-none"
        >
          <span>←</span> Drag to scroll <span>→</span>
        </p>

        <div
          ref={scrollRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          className="overflow-x-auto cursor-grab active:cursor-grabbing select-none scrollbar-none"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          <ul className="timeline timeline-snap-icon timeline-horizontal min-w-max py-4 px-8">
            {items.map((item, index) => {
              const isFirst = index === 0;
              const isLast = index === items.length - 1;

              return (
                <li key={item.id}>
                  {!isFirst && (
                    <hr
                      className={
                        item.isCompleted
                          ? 'bg-mainAccent'
                          : 'bg-border/30'
                      }
                    />
                  )}

                  {/* Center icon */}
                  <div className="timeline-middle">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        item.isCompleted
                          ? 'bg-mainAccent/15 text-mainAccent'
                          : 'bg-border/20 text-textSec/40'
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Card content */}
                  <div
                    className={`max-w-xs ${
                      item.position === 'bottom'
                        ? 'timeline-start mb-10 md:text-end'
                        : 'timeline-end md:mb-10'
                    }`}
                  >
                    <span className="inline-block px-2.5 py-0.5 rounded-md bg-mainAccent/10 text-mainAccent text-xs font-semibold font-mono tracking-wide mb-1">
                      {item.year}
                    </span>
                    <div className="text-base font-bold text-textMain leading-snug">
                      {item.title}
                    </div>
                    <p className="text-sm text-textSec mt-0.5">
                      {item.description}
                    </p>
                  </div>

                  {!isLast && (
                    <hr
                      className={
                        item.isCompleted
                          ? 'bg-mainAccent'
                          : 'bg-border/30'
                      }
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};