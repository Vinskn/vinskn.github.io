import { motion } from 'motion/react';
import Link from 'next/link';


export const ContactSection = () => {
  return (
    <section className="flex flex-col justify-center">
      <div className="text-center justify-self-start h-screen flex flex-col justify-center snap-center">
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="font-bold sm:text-4xl text-xl"
        >
          "Aut viam inveniam aut faciam"
        </motion.p>
        <motion.p
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
          className="mt-2 text-lg text-textSec"
        >
          "I shall either find a way or make one"
        </motion.p>
      </div>
      <div className="mt-[10vh] mb-[40vh] flex flex-col justify-center text-center snap-center">
        <motion.span
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="block text-2xl text-textSec tracking-widest mb-4"
        >
          Let's know better
        </motion.span>
        <Link href={"/#contact"}>
          <motion.span
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="block font-bold text-5xl hover:underline cursor-default select-none underline lg:no-underline"
          >
            Get in Touch
          </motion.span>
        </Link>
      </div>
    </section>
  );
};
