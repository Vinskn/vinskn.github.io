'use client';
import { AnimatePresence, motion } from "motion/react";
import { IconDeviceDesktop2, IconDevicePhone, IconEyeClosed, IconGlobe2, IconProcessor, IconServerStack } from "@intentui/icons";
import { useMemo, useState } from "react";
import { containerVariants } from "../../animation/containerVariants";
import { itemVariants } from "../../animation/itemVariants";
import { TSkill } from "@/types/skillType";
// import SkillCarousel from "../SkillsCarousel";

export const StackSection = ({dataTechLang}: {dataTechLang: TSkill[]}) => {  
  const [skillActive, setSkillActive] = useState(0);
  const techLangDataState = useMemo(() => {
    const dataMap = [
      dataTechLang?.filter((item) => item.skillType === "Web Application"),
      dataTechLang?.filter((item) => item.skillType === "Protocol Transfer"),
      dataTechLang?.filter((item) => item.skillType === "Mobile Application"),
      dataTechLang?.filter((item) => item.skillType === "AI/ML"),
      dataTechLang?.filter((item) => item.skillType === "Desktop Application"),
    ];

    const selected = dataMap[skillActive]; 

    return {
      lang: selected?.[0]?.Skills.languages?.join(" | ") ?? "",
      tools: selected?.[0]?.Skills.tools?.join(" | ") ?? "",
    };
  }, [skillActive, dataTechLang]);
  return (
    <section className="lg:h-[80vh] flex flex-col lg:justify-center">
      <motion.h2
        initial={{ x: -500 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="lg:text-3xl xs:text-2xl font-bold text-textMain text-center"
      >
        Tools & Technologies
      </motion.h2>
      <motion.p
        initial={{ x: 500 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="text-center lg:text-lg xs:text-base lg:mb-8 sm:mb-6 xs:mb-5"
      >
        These are the skills that power my projects.
      </motion.p>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        exit="exit"
        className="flex justify-center lg:gap-20 sm:gap-10 xs:gap-5 sm:flex-nowrap xs:flex-wrap lg:mb-0 xs:mb-5"
      >
        <motion.div
          onClick={() => setSkillActive(0)}
          variants={itemVariants}
          className="flex flex-col items-center justify-center cursor-pointer"
        >
          <IconGlobe2 className="lg:w-10 xs:w-7 lg:h-10 xs:h-7 mb-2" />
          <p
            className={`font-semibold lg:text-base xs:text-sm ${skillActive == 0 ? "text-textMain" : "text-textSec"}`}
          >
            Web Development
          </p>
        </motion.div>
        <motion.div
          onClick={() => setSkillActive(1)}
          variants={itemVariants}
          className="flex flex-col items-center justify-center cursor-pointer"
        >
          <IconServerStack className="lg:w-10 xs:w-7 lg:h-10 xs:h-7 mb-2" />
          <p
            className={`font-semibold lg:text-base xs:text-sm ${skillActive == 1 ? "text-textMain" : "text-textSec"}`}
          >
            Network
          </p>
        </motion.div>
        <motion.div
          onClick={() => setSkillActive(2)}
          variants={itemVariants}
          className="flex flex-col items-center justify-center cursor-pointer"
        >
          <IconDevicePhone className="lg:w-10 xs:w-7 lg:h-10 xs:h-7 mb-2" />
          <p
            className={`font-semibold lg:text-base xs:text-sm ${skillActive == 2 ? "text-textMain" : "text-textSec"}`}
          >
            Mobile Development
          </p>
        </motion.div>
        <motion.div
          onClick={() => setSkillActive(3)}
          variants={itemVariants}
          className="flex flex-col items-center justify-center cursor-pointer"
        >
          <IconProcessor className="lg:w-10 xs:w-7 lg:h-10 xs:h-7 mb-2" />
          <p
            className={`font-semibold lg:text-base xs:text-sm ${skillActive == 3 ? "text-textMain" : "text-textSec"}`}
          >
            Machine Learning
          </p>
        </motion.div>
        <motion.div
          onClick={() => setSkillActive(4)}
          variants={itemVariants}
          className="flex flex-col items-center justify-center cursor-pointer"
        >
          <IconDeviceDesktop2 className="lg:w-10 xs:w-7 lg:h-10 xs:h-7 mb-2" />
          <p
            className={`font-semibold lg:text-base xs:text-sm ${skillActive == 4 ? "text-textMain" : "text-textSec"}`}
          >
            Desktop Application
          </p>
        </motion.div>
      </motion.div>

      <div className="flex justify-around lg:flex-row xs:flex-col items-top lg:mt-15 lg:gap-10 xs:gap-5 sm:px-10 xs:px-5 text-textMain">
        <div className="lg:w-1/2 xs:w-full">
          <h3 className="text-center font-bold text-xl mb-2">
            Language & Framework
          </h3>
          <AnimatePresence mode="wait">
            <motion.div
              key={skillActive}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-center">{techLangDataState.lang}</p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="lg:w-1/2 xs:w-full">
          <h3 className="text-center font-bold text-xl mb-2">Tools</h3>
          <AnimatePresence mode="wait">
            <motion.div
              key={skillActive}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-center">{techLangDataState.tools}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      
      {/* For skill carousel - implement later */}
      {/* <div
        className={`mt-8 w-[90%] bg-gray-100/70 ${width < 768 ? "py-1" : "py-5"} shadow-xs rounded-xl mx-auto overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] lg:[mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]`}
      >
        <SkillCarousel
          datas={dataTechLang || []}
          direction={"horizontal"}
          duration={5000}
          width={width < 768 ? 35 : 50}
          height={width < 768 ? 35 : 50}
        />
      </div> */}
    </section>
  );
};
