"use client"
import NavPages from "@/component/NavPages";
import NavSection from "@/component/NavSection";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import SplashScreen from "@/component/SplashScreen";
import LandingPage from "@/component/pageComponents/Landing";
import Typewriter from 'typewriter-effect';
import UseAnimationFrame from "@/component/pageAssets/Cube3d";

export default function App() {
    const [ runSplash, setRunSplash ] = useState(false); // ganti ke true jan lupa
    const [ inLanding, setInLanding ] = useState(true);

    const welcomeSectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: welcomeSectionRef,
        offset: ["start ", "end start"], 
    });
    const reversedProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);
    

    return (
        <div className="overflow-x-hidden">
            { runSplash && <SplashScreen  onFinish={() => setRunSplash(false)}/> }

            { !runSplash && (
                <>
                    <NavPages addStyle={inLanding ? "hidden" : ""}/>
                    {/* <NavSection /> */}
                    <motion.main
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 0.5}}
                    >
                        <motion.section 
                            initial= {{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="w-full h-screen bg-black text-gray-200 flex flex-col justify-center items-center"
                        >
                            <motion.h1 
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1}}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: false }}
                                className="lg:text-5xl sm:text-3xl xs:text-xl font-bold text-white"
                            >
                                Hi, I'm a Software Developer
                            </motion.h1>

                            <div className="xs:text-sm sm:text-lg lg:text-xl">
                                <Typewriter 
                                    options={{
                                        strings: ['Mainly as Frontend Web Developer', "Desktop & Mobile Developer", "Fullstack Web" ,"Rest API", "Machine Learning & Artificial Inteligence"],
                                        autoStart: true,
                                        loop: true,
                                        cursor: '|',
                                        delay: 100
                                    }}
                                />
                            </div>
                        </motion.section>

                        <section ref={welcomeSectionRef} className="w-full h-[90vh] bg-black flex flex-col justify-center items-center relative">
                            <motion.h2
                                className="lg:text-3xl sm:text-2xl xs:text-lg font-bold text-start text-white z-20"
                            >
                                Welcome to My Portofolio Website
                            </motion.h2>
                            <motion.div
                                style={{
                                    scaleX: reversedProgress,
                                    originX: 1,
                                }}
                                className="absolute w-1/2 h-full bg-background bottom-0 left-0"
                            />
                            <motion.div
                                style={{
                                    scaleX: reversedProgress,
                                    originX: 0,
                                }}
                                className="absolute w-1/2 h-full bg-background bottom-0 right-0"
                            />
                        </section>

                        <LandingPage openerSection={setInLanding}/>
                    </motion.main>
                </>
            )}
        </div>
    )
}
