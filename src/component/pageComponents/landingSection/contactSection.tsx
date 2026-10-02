'use client';

import { motion } from 'motion/react';
import { containerVariants } from '@/component/animation/containerVariants';
import { fadeRight, fadeUp } from '@/component/animation';
import Link from 'next/link';
import {
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconMail,
} from '@intentui/icons';

const socialLinks = [
  {
    href: "https://mail.google.com/mail/u/0/?to=vinskn1@gmail.com&su=Hello+Sinamo+I'd+like+to+get+in+touch&body=Hi,&tf=cm",
    Icon: IconMail,
    label: 'Email',
    color: '#e53935',
  },
  {
    href: 'https://github.com/vinskn',
    Icon: IconBrandGithub,
    label: 'GitHub',
    color: '#171717',
  },
  {
    href: 'https://id.linkedin.com/in/sinamo-kevin-nathanael-924646295',
    Icon: IconBrandLinkedin,
    label: 'LinkedIn',
    color: '#0A66C2',
  },
  {
    href: 'https://www.instagram.com/svin_25',
    Icon: IconBrandInstagram,
    label: 'Instagram',
    color: '#E4405F',
  },
  {
    href: 'https://discordapp.com/users/400567642789904384',
    Icon: IconBrandDiscord,
    label: 'Discord',
    color: '#5865F2',
  },
];

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative lg:px-20 sm:px-10 xs:px-5 flex lg:flex-row xs:flex-col lg:justify-between lg:items-center lg:h-[90vh] xs:py-16 lg:py-0 overflow-hidden"
    >
      {/* Animated background blob — mirrors HeroSection */}
      <motion.div
        className="absolute -bottom-32 -left-32 w-125 h-125 rounded-full opacity-[0.08] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #e53935 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.15, 1],
          x: [0, -20, 0],
          y: [0, 15, 0],
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
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Badge */}
        <motion.div variants={fadeRight}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-mainAccent/10 text-mainAccent text-sm font-medium tracking-wide mb-4">
            Contact
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          variants={fadeUp}
          className="text-textMain font-bold lg:text-5xl sm:text-4xl xs:text-3xl leading-tight tracking-tight"
        >
          Get in <span className="text-mainAccent">Touch</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          className="mt-3 lg:text-xl sm:text-lg xs:text-base text-textSec"
        >
          Want to work together, ask something, or just chat?
          <br />
          Don&apos;t hesitate to get in touch :)
        </motion.p>

        {/* Email link */}
        <motion.div variants={fadeUp} className="mt-9">
          <Link
            href="https://mail.google.com/mail/u/0/?to=vinskn1@gmail.com&su=Hello+Sinamo+I'd+like+to+get+in+touch&body=Hi,&tf=cm"
            target="_blank"
            className="text-textSec hover:text-mainAccent text-lg transition-colors duration-200 underline underline-offset-4 decoration-border hover:decoration-mainAccent"
          >
            vinskn1@gmail.com
          </Link>
        </motion.div>

        {/* Social icons */}
        <motion.div variants={fadeUp} className="flex gap-3 mt-8">
          {socialLinks.map((social) => (
            <Link key={social.label} href={social.href} target="_blank">
              <motion.div
                whileHover={{ scale: 1.12, y: -3 }}
                whileTap={{ scale: 0.93 }}
                className="lg:w-14 lg:h-14 sm:w-12 sm:h-12 xs:w-10 xs:h-10 rounded-xl flex items-center justify-center shadow-sm cursor-pointer transition-colors duration-200"
                style={{
                  backgroundColor: `${social.color}15`,
                  border: `1.5px solid ${social.color}35`,
                }}
              >
                <social.Icon
                  className="lg:w-6 lg:h-6 sm:w-5 sm:h-5 xs:w-4 xs:h-4"
                  style={{ color: social.color }}
                />
              </motion.div>
            </Link>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div variants={fadeUp} className="mt-8">
          <Link
            href="https://mail.google.com/mail/u/0/?to=vinskn1@gmail.com&su=Hello+Sinamo+I'd+like+to+get+in+touch&body=Hi,&tf=cm"
            target="_blank"
          >
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 bg-mainAccent text-white font-semibold rounded-xl shadow-lg shadow-mainAccent/25 hover:bg-hoverAccent transition-colors duration-200 cursor-pointer"
            >
              Send a Message
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Right Section — Contact Form */}
      <motion.div
        className="lg:w-[40%] xs:w-full z-10 xs:mt-12 lg:mt-0"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.form
          variants={fadeUp}
          className="flex flex-col gap-5 p-8 rounded-2xl border border-border/40 bg-white/60 backdrop-blur-md shadow-sm"
        >
          {/* Name */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-name" className="text-sm font-medium text-textMain">
              Name
            </label>
            <input
              id="contact-name"
              type="text"
              placeholder="Your name"
              className="px-4 py-3 rounded-xl border border-border/50 bg-white/80 text-textMain placeholder:text-textSec/50 outline-none focus:border-mainAccent focus:ring-2 focus:ring-mainAccent/15 transition-all duration-200"
            />
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-email" className="text-sm font-medium text-textMain">
              Contact
            </label>
            <input
              id="contact-email"
              type="text"
              placeholder="Email or phone number"
              className="px-4 py-3 rounded-xl border border-border/50 bg-white/80 text-textMain placeholder:text-textSec/50 outline-none focus:border-mainAccent focus:ring-2 focus:ring-mainAccent/15 transition-all duration-200"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-message" className="text-sm font-medium text-textMain">
              Message
            </label>
            <textarea
              id="contact-message"
              rows={4}
              placeholder="Write your message..."
              className="px-4 py-3 rounded-xl border border-border/50 bg-white/80 text-textMain placeholder:text-textSec/50 outline-none focus:border-mainAccent focus:ring-2 focus:ring-mainAccent/15 transition-all duration-200 resize-none"
            />
          </div>

          {/* Submit */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="w-full py-3 bg-mainAccent text-white font-semibold rounded-xl shadow-lg shadow-mainAccent/25 hover:bg-hoverAccent transition-colors duration-200 cursor-pointer mt-1"
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
};
