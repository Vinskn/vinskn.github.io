import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, useInView } from 'motion/react'
import ArrowComponent from "../pageAssets/LandingArrow";
import SectionDivider from "../pageAssets/SectionDivider";
import Link from "next/link";
import { IconBrandDiscord, IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconDevicePhone, IconEyeClosed, IconGlobe2, IconMail, IconProcessor } from "@intentui/icons";
import { motion } from 'motion/react'

export default function LandingPage({ openerSection }) {
    
    const sectionView = useRef(null);
    const sectioninView = useInView(sectionView, {amount: 0.2});
    useEffect(() => {
        openerSection(!sectioninView);
    }, [sectioninView]);

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
            staggerChildren: 0.2,
            },
        },
        exit: {
            transition: {
            staggerChildren: 0.2,
            staggerDirection: -1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
    };

    const [ skillActive, setSkillActive ] = useState(0);
    const dataSkills = {
        web: {
            lang: "HTML | CSS | Javascript | React | NextJS | TailwindCSS | Bootsrap5 | SupabaseDB | ExpressJS | MySQL | SupabaseDB | MongoDB  PHP | Python",
            tools: "Visual Studio Code | Figma | Github | Git | Canva | Corel Draw"
        },
        api: {
            lang: "NEXT JS | Node JS | PHP | MongoDB | SupabaseDB",
            tools: "Postman | EchoAPI"
        },
        mobile: {
            lang: "Kotlin | JAVA",
            tools: "Android Studio"
        },
        ml : {
            lang: "Python | Scikit | KERAS | TensorFlow",
            tools: "Google Colab | Visual Studio Code | Jupyter Notebook"
        }
    }

    const [ projectList, setProjectList ] = useState([]);
    const [ fetchError, setFetchError ] = useState("");
    const [ moreProject, setMoreProject ] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/api/project');
            const result = await res.json();
            if (res.ok) {
                setProjectList(result);
                console.log(res);
                
            } else (
                setFetchError(res.statusText)
            )
        }
        fetchData();
    },[])
    
    return (
        <div ref={sectionView}>
            <section className="lg:p-20 sm:p-10 xs:p-5 xs:pt-8 sm:pt-10 flex lg:flex-row xs:flex-col-reverse lg:justify-around lg:items-center lg:h-[90vh]">
                <div className="lg:w-1/2 xs:w-full">
                    <motion.p 
                        initial={{ x: 100 }}
                        whileInView={{ x: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut"}}
                        className="text-center lg:text-lg xs:text-base lg:mt-4 sm:mt-2 mx-auto text-textSec "
                    >
                        <span className="font-bold text-textMain lg:text-2xl xs:text-xl">I'm Sinamo Kevin Nathanael</span> a Software Engineering graduate with a strong focus on <span className="font-bold">frontend web development</span>. While I specialize in web interfaces, I also build simple <span className="font-bold">mobile and desktop apps</span>. Currently exploring the exciting world of <span className="font-bold">AI and machine learning</span>.
                    </motion.p>
                </div>
                <div className="aspect-video lg:w-1/3 xs:w-full lg:mb-0 xs:mb-5 z-20 relative">
                    <Image 
                            src={'/myPict.jpg'}
                            fill
                            alt="Sinamo Kevin Nathanael Picture"
                            className="brightness-90 drop-shadow-xl rounded-b-xl lg:grayscale hover:grayscale-0 object-cover object-right"
                        />
                </div>
            </section>

            <section className="lg:h-[80vh] flex flex-col lg:justify-center">
                <motion.h2 
                    initial={{ x: -500 }}
                    whileInView={{ x: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut"}}
                    className="lg:text-3xl xs:text-2xl font-bold text-textMain text-center"
                >
                    Tools & Technologies
                </motion.h2>
                <motion.p 
                    initial={{ x: 500 }}
                    whileInView={{ x: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut"}}
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
                    <motion.div onClick={() => setSkillActive(0)} variants={itemVariants} className="flex flex-col items-center justify-center cursor-pointer">
                        <IconGlobe2 className="lg:w-10 xs:w-7 lg:h-10 xs:h-7 mb-2"/>
                        <p className={`font-semibold lg:text-base xs:text-sm ${skillActive == 0 ? "text-textMain" : 'text-textSec'}`}>Web Development</p>
                    </motion.div>
                    <motion.div onClick={() => setSkillActive(1)} variants={itemVariants} className="flex flex-col items-center justify-center cursor-pointer">
                        <IconEyeClosed className="lg:w-10 xs:w-7 lg:h-10 xs:h-7 mb-2"/>
                        <p className={`font-semibold lg:text-base xs:text-sm ${skillActive == 1 ? "text-textMain" : 'text-textSec'}`}>Rest API</p>
                    </motion.div>
                    <motion.div onClick={() => setSkillActive(2)} variants={itemVariants} className="flex flex-col items-center justify-center cursor-pointer">
                        <IconDevicePhone className="lg:w-10 xs:w-7 lg:h-10 xs:h-7 mb-2"/>
                        <p className={`font-semibold lg:text-base xs:text-sm ${skillActive == 2 ? "text-textMain" : 'text-textSec'}`}>Mobile Development</p>
                    </motion.div>
                    <motion.div onClick={() => setSkillActive(3)} variants={itemVariants} className="flex flex-col items-center justify-center cursor-pointer">
                        <IconProcessor className="lg:w-10 xs:w-7 lg:h-10 xs:h-7 mb-2"/>
                        <p className={`font-semibold lg:text-base xs:text-sm ${skillActive == 3 ? "text-textMain" : 'text-textSec'}`}>Machine Learning</p>
                    </motion.div>
                </motion.div>

                <div className="flex justify-around lg:flex-row xs:flex-col items-top lg:mt-15 lg:gap-10 xs:gap-5 sm:px-10 xs:px-5 text-textMain">
                    <div className="lg:w-1/2 xs:w-full">
                        <h3 className="text-center font-bold text-xl mb-2">Language & Framework</h3>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={skillActive}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.5}}
                            >
                                {skillActive == 0 && <p className="text-center">{dataSkills.web.lang}</p>}
                                {skillActive == 1 && <p className="text-center">{dataSkills.api.lang}</p>}
                                {skillActive == 2 && <p className="text-center">{dataSkills.mobile.lang}</p>}
                                {skillActive == 3 && <p className="text-center">{dataSkills.ml.lang}</p>}
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
                                transition={{ duration: 0.5}}
                            >
                                {skillActive == 0 && <p className="text-center">{dataSkills.web.tools}</p>}
                                {skillActive == 1 && <p className="text-center">{dataSkills.api.tools}</p>}
                                {skillActive == 2 && <p className="text-center">{dataSkills.mobile.tools}</p>}
                                {skillActive == 3 && <p className="text-center">{dataSkills.ml.tools}</p>}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            <section className="lg:px-15 sm:px-8 xs:px-5 my-15">
                <motion.div
                    initial={{ y: 100 }}
                    whileInView={{ y: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut"}}
                >
                    <h2 className="lg:text-3xl xs:text-2xl font-bold">
                        Profesional Experience
                    </h2>
                    <SectionDivider />
                </motion.div>
                <div className="lg:mx-25 lg:mt-10 py-5 border-l-4 border-secAccent">
                    {
                        projectList.slice(0, moreProject ? projectList.length : 3).map((data, idx) => (
                            <Link key={idx} href={`/detail/project/${data.id}`}>
                                <motion.div 
                                    initial={{ x: 100 }}
                                    whileInView={{ x: 0 }}
                                    transition={{ duration: 0.5, ease: "easeInOut"}}
                                    className="relative pl-10 bg-gray-200 rounded-xl p-3 my-4 select-none cursor-pointer"
                                >
                                    <span className="w-10 h-10 bg-mainAccent rounded-full border-4 border-background absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2" />
                                    <div>
                                        <span className="text-xs bg-secAccent py-0.5 px-3 pr-5 lg:pr-8 rounded-r-lg text-white">{data.date}</span>
                                        <h3 className="mt-2 text-xl font-bold">{data.projectName}</h3>
                                        <span className="text-sm text-textSec">{data.workType} - {data.location}</span>
                                        <p className="line-clamp-2 pr-3">{data.projectDesc}</p>
                                        <ul className="flex gap-2 text-sm text-gray-800 mt-3 w-3/4 cursor-default select-none">
                                            {
                                                data.utils.map((i, idx) => (
                                                    <li key={idx} className="bg-bgSoft lg:py-0.5 lg:px-2 xs:px-1 lg:text-base xs:text-xs rounded-lg border border-gray-400">{i}</li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </motion.div>
                            </Link>
                        ))
                    }
                </div>
                <button onClick={() => setMoreProject(!moreProject)} className="block mx-auto mt-5 bg-mainAccent hover:bg-hoverAccent px-10 py-1.5 rounded-lg text-white font-bold">{moreProject ? "See Less" : "Load More"}</button>
            </section>

            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut"}} 
                id="contact" className="lg:h-screen xs:h-[50vh] flex lg:flex-row xs:flex-col justify-around items-center lg:px-30 xs:px-10 relative xs:mb-20 lg:mb-0"
            >
                <div className="lg:w-2/3 xs:w-full">
                    <h2 className="lg:text-7xl xs:text-4xl font-bold">Get in Touch</h2>
                    <SectionDivider />
                    <p className="mt-2 text-xl text-textSec">
                        Want to work together, ask something, or just chat? <br />Don’t hesitate to get in touch :)
                    </p>
                    <div className="text-textSec hover:text-textMain hover:underline underline-offset-2 lg:mt-10 xs:mt-3 xs:mb-10 text-xl">
                        <Link href='https://mail.google.com/mail/u/0/?to=vinskn1@gmail.com&su=Hello+Sinamo+I’d+like+to+get+in+touch&body=Hi,&tf=cm' target="_blank">
                            vinskn1@gmail.com
                        </Link>
                    </div>
                    <div className="flex gap-2 lg:justify-start xs:justify-center mt-5">
                        <Link href='https://mail.google.com/mail/u/0/?to=vinskn1@gmail.com&su=Hello+Sinamo+I’d+like+to+get+in+touch&body=Hi,&tf=cm'> <IconMail  className="bg-secAccent lg:w-16 sm:w-13 xs:w-10 lg:h-16 sm:h-13 xs:h-10 text-white p-2 rounded-full"/> </Link>
                        <Link href='https://github.com/vinskn'> <IconBrandGithub className="bg-secAccent lg:w-16 sm:w-13 xs:w-10 lg:h-16 sm:h-13 xs:h-10 text-white p-2 rounded-full"/> </Link>
                        <Link href='https://id.linkedin.com/in/sinamo-kevin-nathanael-924646295'> <IconBrandLinkedin className="bg-secAccent lg:w-16 sm:w-13 xs:w-10 lg:h-16 sm:h-13 xs:h-10 text-white p-2 rounded-full"/> </Link>
                        <Link href='https://www.instagram.com/svin_25'> <IconBrandInstagram className="bg-secAccent lg:w-16 sm:w-13 xs:w-10 lg:h-16 sm:h-13 xs:h-10 text-white p-2 rounded-full"/> </Link>
                        <Link href='https://discordapp.com/users/400567642789904384'> <IconBrandDiscord className="bg-secAccent lg:w-16 sm:w-13 xs:w-10 lg:h-16 sm:h-13 xs:h-10 text-white p-2 rounded-full"/> </Link>
                    </div>
                </div>
                <div className="w-1/3 h-2/3 relative xs:hidden lg:block">
                    <Image 
                        src='/codePhoto.jpg'
                        fill
                        alt="Code Image"
                        className="object-cover"
                    />
                </div>
            </motion.section>
        </div>
    )
}
