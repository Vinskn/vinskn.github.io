import { motion } from 'motion/react'
import SkillCarousel from '../SkillsCarousel';
import { TSkill } from '@/types/skillType';
import { useScreenSize } from '@/lib/hooks/screenSizeHook';


export const EducationSection = ({skillData}: {skillData: TSkill[]}) => {
  const {width} = useScreenSize();
  return (
    <section className="lg:snap-center lg:px-15 lg:h-screen mt-15 lg:mt-0 flex flex-col justify-center">
      <motion.h2
        initial={{ scale: 2 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="text-4xl text-center font-bold mb-5"
      >
        Skills & Stack
      </motion.h2>
      <div className="flex lg:flex-row flex-col lg:justify-between lg:gap-10 gap-5 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          className="lg:w-2/3 text-justify"
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="mb-1.5"
          >
            I specialize in frontend web development using core technologies
            like <strong>HTML, CSS, and JavaScript</strong>, which I’ve extended
            with libraries and frameworks such as <strong>React</strong> and{" "}
            <strong>Next.js</strong> to build fast, modern, and responsive user
            interfaces. For styling and motion, I often rely on{" "}
            <strong>Tailwind CSS</strong> and <strong>Framer Motion</strong> to
            bring life and clarity to my designs.
          </motion.p>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="mb-1.5"
          >
            Beyond the frontend, I’m also comfortable working with{" "}
            <strong>REST APIs</strong> and integrating them into various
            platforms — including mobile and desktop applications. I’ve built
            simple desktop apps using <strong>Java Swing</strong> and other
            supporting libraries, and I also create Android apps using{" "}
            <strong>Kotlin</strong>. While my focus in app development is on
            projects that aren’t overly complex, I always strive to make them
            feel complete and polished.
          </motion.p>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="mb-1.5"
          >
            Lately, I’ve been diving into{" "}
            <strong>Artificial Intelligence</strong> and{" "}
            <strong>Machine Learning</strong> with <strong>Python</strong>,
            exploring libraries like <strong>TensorFlow</strong> and{" "}
            <strong>Keras</strong> to build my understanding in this exciting
            field.
          </motion.p>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="mb-1.5"
          >
            While these are the tools I currently use, I see my tech stack as
            something constantly <strong>evolving</strong>. I enjoy discovering
            and <strong>adopting new technologies</strong> that can improve my
            workflow or push the boundaries of what I can build. If a better
            tool comes along,{" "}
            <strong>I’m always eager to learn and adapt</strong>.
          </motion.p>
        </motion.div>

        <div className="lg:w-1/3 w-full lg:h-80 flex lg:flex-row gap-6 overflow-hidden mt-2 lg:mt-0 relative mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] lg:mask-[linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] py-4">
          {/* in mobile */}
          {width < 768 ? (
            <>
              <SkillCarousel
                datas={skillData || []}
                duration={5000}
                orientation={"horizontal"}
              />
            </>
          ) : (
            <>
              <SkillCarousel
                datas={skillData || []}
                duration={4700}
                orientation={"vertical"}
              />
              <SkillCarousel
                datas={[...(skillData || [])].reverse() || []}
                duration={5000}
                orientation={"vertical"}
              />
              <SkillCarousel
                datas={
                  []
                  // [
                  //   ...(skillData || []).slice(7),
                  //   ...(skillData || []).slice(0, 7),
                  // ] || []
                }
                duration={4500}
                orientation={"vertical"}
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
};
