"use client";
import { motion } from "motion/react";
import SectionDivider from "../../pageAssets/SectionDivider";
import Link from "next/link";
import {
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconMail,
} from "@intentui/icons";
import Image from "next/image";

export const ContactSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      id="contact"
      className="lg:h-screen xs:h-[50vh] flex lg:flex-row xs:flex-col justify-around items-center lg:px-30 xs:px-10 relative xs:mb-20 lg:mb-0"
    >
      <div className="lg:w-2/3 xs:w-full">
        <h2 className="lg:text-7xl xs:text-4xl font-bold">Get in Touch</h2>
        <SectionDivider />
        <p className="mt-2 text-xl text-textSec">
          Want to work together, ask something, or just chat? <br />
          Don’t hesitate to get in touch :)
        </p>
        <div className="text-textSec hover:text-textMain hover:underline underline-offset-2 lg:mt-10 xs:mt-3 xs:mb-10 text-xl">
          <Link
            href="https://mail.google.com/mail/u/0/?to=vinskn1@gmail.com&su=Hello+Sinamo+I’d+like+to+get+in+touch&body=Hi,&tf=cm"
            target="_blank"
          >
            vinskn1@gmail.com
          </Link>
        </div>
        <div className="flex gap-2 lg:justify-start xs:justify-center mt-5">
          <Link href="https://mail.google.com/mail/u/0/?to=vinskn1@gmail.com&su=Hello+Sinamo+I’d+like+to+get+in+touch&body=Hi,&tf=cm">
            {" "}
            <IconMail className="bg-secAccent lg:w-16 sm:w-13 xs:w-10 lg:h-16 sm:h-13 xs:h-10 text-white p-2 rounded-full" />{" "}
          </Link>
          <Link href="https://github.com/vinskn">
            {" "}
            <IconBrandGithub className="bg-secAccent lg:w-16 sm:w-13 xs:w-10 lg:h-16 sm:h-13 xs:h-10 text-white p-2 rounded-full" />{" "}
          </Link>
          <Link href="https://id.linkedin.com/in/sinamo-kevin-nathanael-924646295">
            {" "}
            <IconBrandLinkedin className="bg-secAccent lg:w-16 sm:w-13 xs:w-10 lg:h-16 sm:h-13 xs:h-10 text-white p-2 rounded-full" />{" "}
          </Link>
          <Link href="https://www.instagram.com/svin_25">
            {" "}
            <IconBrandInstagram className="bg-secAccent lg:w-16 sm:w-13 xs:w-10 lg:h-16 sm:h-13 xs:h-10 text-white p-2 rounded-full" />{" "}
          </Link>
          <Link href="https://discordapp.com/users/400567642789904384">
            {" "}
            <IconBrandDiscord className="bg-secAccent lg:w-16 sm:w-13 xs:w-10 lg:h-16 sm:h-13 xs:h-10 text-white p-2 rounded-full" />{" "}
          </Link>
        </div>
      </div>
      <div className="w-1/3 h-2/3 relative xs:hidden lg:block">
        <Image
          src="/codePhoto.jpg"
          fill
          alt="Code Image"
          className="object-cover"
        />
      </div>
    </motion.section>
  );
};
