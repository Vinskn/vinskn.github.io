"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { containerVariants } from "@/component/animation/containerVariants";
import { fadeUp, fadeRight, scaleIn } from "@/component/animation";

export const IntroSection = () => {
  return (
    <section className="relative lg:p-20 sm:p-10 xs:p-5 xs:pt-8 sm:pt-10 flex lg:flex-row xs:flex-col-reverse lg:justify-around lg:items-center lg:h-[90vh] overflow-hidden">
      {/* Subtle background blob */}
      <motion.div
        className="absolute -bottom-40 -left-40 w-125 h-125 rounded-full opacity-[0.06] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, #e53935 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.12, 1],
          x: [0, 15, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Photo with decorative borders */}
      <motion.div
        className="h-full lg:w-1/3 xs:w-full lg:mb-0 xs:mb-5 z-20 relative rounded-xl"
        variants={scaleIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="absolute -inset-2 rounded-2xl border-2 border-mainAccent/30 rotate-[-16deg]"
          animate={{ rotate: [-16, -14, -16] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -inset-2 rounded-2xl border-2 border-mainAccent/60 rotate-[-8deg]"
          animate={{ rotate: [-8, -6, -8] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        />
        <motion.div
          className="absolute -inset-2 rounded-2xl border-2 border-mainAccent rotate-[-4deg]"
          animate={{ rotate: [-4, -2, -4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        />
        <Image
          src={"/myPict2.jpg"}
          fill
          alt="Sinamo Kevin Nathanael Picture"
          className="object-cover object-[0%_20%] rounded-xl"
        />
      </motion.div>

      {/* Text content */}
      <motion.div
        className="lg:w-1/2 xs:w-full z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Section badge */}
        <motion.div variants={fadeRight}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-mainAccent/10 text-mainAccent text-sm font-medium tracking-wide mb-4">
            <span className="inline-block w-2 h-2 rounded-full bg-mainAccent animate-pulse" />
            About Me
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          className="text-textMain font-bold lg:text-4xl sm:text-3xl xs:text-2xl leading-tight tracking-tight"
        >
          A Little About{" "}
          <span className="text-mainAccent">Me</span>
        </motion.h1>

        {/* Paragraph — styled like HeroSection's text blocks */}
        <motion.p
          variants={fadeUp}
          className="lg:text-lg xs:text-base lg:mt-5 sm:mt-3 xs:mt-2 text-textSec leading-relaxed"
        >
          I&apos;m a <span className="text-textMain font-medium">Software Developer</span> with
          expertise in <span className="text-mainAccent font-medium">web &amp; mobile app development</span> as
          well as <span className="text-mainAccent font-medium">machine learning</span>. I focus on
          building smart, scalable applications that deliver great user
          experiences.
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="lg:text-lg xs:text-base mt-3 text-textSec leading-relaxed"
        >
          Currently, I am expanding my technical scope
          into <span className="text-mainAccent font-medium">networking</span> to deepen my full-stack
          capabilities.
        </motion.p>
      </motion.div>
    </section>
  );
};
