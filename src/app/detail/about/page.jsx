"use client"
import Icon from "@/component/pageAssets/AddIcon";
import SectionDivider from "@/component/pageAssets/SectionDivider";
import { IconArrowDown, IconArrowTriangleRight, IconBrandBootstrap, IconBrandCss, IconBrandFigma, IconBrandFramer, IconBrandHtml5, IconBrandJavascript, IconBrandNextjs, IconBrandNode, IconBrandPhp, IconBrandPython, IconBrandReactjs } from "@intentui/icons";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { useEffect, useState } from "react";


export default function About({  }) {

    const Arrow1 = motion.create(IconArrowDown);
    const Arrow2 = motion.create(IconArrowDown);
    const Arrow3 = motion.create(IconArrowDown);

    const [ certifSeeMore, setCertifSeeMore ] = useState(false);
    const [ certifList, setCertifList ] = useState([]);
    const [ errorFetch, setErrorFetch ] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/api/certificate');
            const result = await res.json();
            if (res.ok) {
                setCertifList(result)
            } else {
                setErrorFetch("Error: ", res.statusText)
            }
        }
        fetchData();
    },[])

    return(
        <div className="px-10 overflow-x-hidden snap-y snap-proximity overflow-y-scroll h-screen">
            {/* opening */}
            <section className="lg:snap-center flex lg:justify-around xs:justify-center lg:gap-0 xs:gap-20 lg:flex-row xs:flex-col-reverse items-center h-screen w-full">
                <motion.div initial={{ y:-100 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, ease: "easeInOut"}}>
                    <h1 className="text-6xl font-bold lg:bg-none xs:bg-background/40 lg:p-0 xs:p-5 lg:z-0 xs:z-50 xs:backdrop-blur-lg relative">About Me</h1>
                    <SectionDivider />
                    <p className="text-center">Here's a bit more about who I am</p>
                    <div className="flex justify-center gap-5 mt-5">
                        <Arrow1 animate={{ y: [3, 0, 3]}} transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut"}} className="w-6 h-6"/>
                        <Arrow2 animate={{ y: [3, 0, 3]}} transition={{ duration: 2.5, repeat: Infinity, repeatType: "loop", ease: "easeInOut"}} className="w-6 h-6"/>
                        <Arrow3 animate={{ y: [3, 0, 3]}} transition={{ duration: 2.2, repeat: Infinity, repeatType: "loop", ease: "easeInOut"}} className="w-6 h-6"/>
                    </div>
                    
                </motion.div>

                <div className="relative lg:w-1/3 xs:w-9/10">
                    <motion.div initial={{ y: 100 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, ease: "easeInOut" }} className="lg:grayscale xs:grayscale-0 hover:grayscale-0 hover:z-10 relative aspect-video">
                        <Image 
                            src='/myPict.jpg'
                            fill
                            alt="Me"
                            className="object-cover"
                        />
                    </motion.div>
                    <motion.div initial={{ x: 100 }} whileInView={{ x: 0 }} transition={{ duration: 0.5, ease: "easeInOut" }} className="absolute lg:w-50 sm:w-1/3 xs:w-1/2 lg:-top-1/4 md:top-1/2 sm:top-0 xs:-top-5 -left-10 lg:h-60 md:h-80 xs:h-60 object-cover object-top lg:grayscale xs:grayscale-0 hover:grayscale-0">
                        <Image 
                            src='/myPict2.jpg'
                            fill
                            alt="Me2"
                            className="object-cover"
                        />
                    </motion.div>
                    <motion.div initial={{ x: -100 }} whileInView={{ x: 0 }} transition={{ duration: 0.5, ease: "easeInOut" }} className="absolute lg:w-50 xs:w-1/2 lg:-right-20 sm:right-5 xs:right-1/5 sm:-bottom-1/4 xs:-bottom-30 h-35 object-cover object-center lg:grayscale xs:grayscale-0 hover:grayscale-0">
                        <Image 
                            src='/myPict3.jpg'
                            fill
                            alt="Me2"
                            className="object-cover"
                        />
                    </motion.div>
                    
                </div>
            </section>

            {/* about me */}
            <section className="lg:snap-center lg:px-20 h-screen flex flex-col justify-center">
                <motion.div initial={{ x:-100 }} whileInView={{ x: 0 }} transition={{ duration: 0.5, ease: "easeInOut"}}>
                    <h2 className="text-4xl font-bold mb-5">Hi There...</h2>
                    <SectionDivider />
                </motion.div>
                <div className="flex lg:flex-row xs:flex-col lg:gap-10 items-center">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, ease: "easeInOut"}} className="lg:w-1/2 xs:w-9/10 aspect-video relative">
                        <Image 
                            src='/myPict.jpg'
                            fill
                            alt="Me"
                            className="lg:rounded-l-2xl xs:rounded-b-2xl object-cover"
                        />
                    </motion.div>
                    <motion.div initial="hidden" whileInView="visible" variants={{ visible: {transition: {staggerChildren: 0.2}}}} className="lg:w-1/2 xs:w-9/10 xs:mt-5 lg:mt-0">
                        <motion.p variants={{ hidden: { opacity: 0, y:10 }, visible: {opacity: 1, y: 0}}} transition={{ duration: 0.4, ease: "easeInOut"}} className="my-1 text-justify">
                            My name is <strong>Sinamo Kevin Nathanael</strong>. I’m a <strong>Software Engineering graduate</strong> with a passion for crafting user-friendly digital experiences. My main expertise lies in <strong>frontend web development</strong>, where I focus on building clean, responsive, and interactive interfaces.
                        </motion.p>
                        <motion.p variants={{ hidden: { opacity: 0, y:10 }, visible: {opacity: 1, y: 0}}} transition={{ duration: 0.4, ease: "easeInOut"}} className="my-1 text-justify">
                            Beyond the web, I’m also capable of building <strong>mobile and desktop applications</strong>, especially for projects that are not overly complex.
                        </motion.p>
                        <motion.p variants={{ hidden: { opacity: 0, y:10 }, visible: {opacity: 1, y: 0}}} transition={{ duration: 0.4, ease: "easeInOut"}} className="my-1 text-justify">
                            I have a growing interest in <strong>Artificial Intelligence and Machine Learning</strong>, and I’m currently deepening my skills in those areas. I enjoy exploring new technologies and constantly challenging myself to stay up to date in the ever-evolving tech landscape.
                        </motion.p>
                        <motion.p variants={{ hidden: { opacity: 0, y:10 }, visible: {opacity: 1, y: 0}}} transition={{ duration: 0.4, ease: "easeInOut"}} className="my-1 text-justify">
                            Whether I’m building a website, creating an app, or learning about neural networks, I bring the <strong>same level of</strong> curiosity, discipline, and drive to everything I do. 
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* skill */}
            <section className="lg:snap-center lg:px-15 lg:h-screen xs:mt-15 lg:mt-0 flex flex-col justify-center">
                <motion.h2 initial={{ scale: 2 }} whileInView={{ scale: 1 }} transition={{ duration: 0.5, ease: "easeInOut"}} className="text-4xl text-center font-bold mb-5">Skills & Stack</motion.h2>
                <div className="flex lg:flex-row xs:flex-col justify-between lg:gap-10 xs:gap-5">
                    <motion.div initial="hidden" whileInView="visible" variants={{ visible: {transition: {staggerChildren: 0.2}}}} className="lg:w-2/3 text-justify">
                        <motion.p variants={{ hidden: { opacity: 0, y:10 }, visible: {opacity: 1, y: 0}}} transition={{ duration: 0.4, ease: "easeInOut"}} className="mb-1.5">
                            I specialize in frontend web development using core technologies like <strong>HTML, CSS, and JavaScript</strong>, which I’ve extended with libraries and frameworks such as <strong>React</strong> and <strong>Next.js</strong> to build fast, modern, and responsive user interfaces. For styling and motion, I often rely on <strong>Tailwind CSS</strong> and <strong>Framer Motion</strong> to bring life and clarity to my designs.
                        </motion.p>

                        <motion.p variants={{ hidden: { opacity: 0, y:10 }, visible: {opacity: 1, y: 0}}} transition={{ duration: 0.4, ease: "easeInOut"}} className="mb-1.5">
                            Beyond the frontend, I’m also comfortable working with <strong>REST APIs</strong> and integrating them into various platforms — including mobile and desktop applications. I’ve built simple desktop apps using <strong>Java Swing</strong> and other supporting libraries, and I also create Android apps using <strong>Kotlin</strong>. While my focus in app development is on projects that aren’t overly complex, I always strive to make them feel complete and polished.
                        </motion.p>

                        <motion.p variants={{ hidden: { opacity: 0, y:10 }, visible: {opacity: 1, y: 0}}} transition={{ duration: 0.4, ease: "easeInOut"}} className="mb-1.5">
                            Lately, I’ve been diving into <strong>Artificial Intelligence</strong> and <strong>Machine Learning</strong> with <strong>Python</strong>, exploring libraries like <strong>TensorFlow</strong> and <strong>Keras</strong> to build my understanding in this exciting field.
                        </motion.p>

                        <motion.p variants={{ hidden: { opacity: 0, y:10 }, visible: {opacity: 1, y: 0}}} transition={{ duration: 0.4, ease: "easeInOut"}} className="mb-1.5">
                            While these are the tools I currently use, I see my tech stack as something constantly <strong>evolving</strong>. I enjoy discovering and <strong>adopting new technologies</strong> that can improve my workflow or push the boundaries of what I can build. If a better tool comes along, <strong>I’m always eager to learn and adapt</strong>.
                        </motion.p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "circIn"}} className="lg:w-1/3 flex flex-wrap gap-3 justify-center items-center">
                        <IconBrandHtml5 className="lg:w-12 lg:h-12 xs:w-8 xs:h-8"/> 
                        <IconBrandCss className="lg:w-15 lg:h-15 xs:w-8 xs:h-8"/>
                        <IconBrandJavascript className="lg:w-20 lg:h-20 xs:w-8 xs:h-8"/>
                        <IconBrandBootstrap className="lg:w-15 lg:h-15 xs:w-8 xs:h-8"/>
                        <IconBrandNode className="lg:w-13 lg:h-13 xs:w-8 xs:h-8"/>
                        <IconBrandFramer className="lg:w-14 lg:h-14 xs:w-8 xs:h-8"/>
                        <IconBrandFigma className="lg:w-10 lg:h-10 xs:w-8 xs:h-8"/>
                        <IconBrandReactjs className="lg:w-18 lg:h-18 xs:w-8 xs:h-8"/>
                        <IconBrandNextjs className="lg:w-19 lg:h-19 xs:w-8 xs:h-8"/>
                        <IconBrandPython className="lg:w-8 h-lg:8 xs:w-8 xs:h-8"/>
                        <IconBrandPhp className="lg:w-10 lg:h-10 xs:w-8 xs:h-8"/>
                        <Icon.mysql style={"lg:w-15 lg:h-15 xs:w-8 xs:h-8"}/>
                        <Icon.tensorflow style={"lg:w-8 lg:h-8 xs:w-8 xs:h-8"}/>
                        <Icon.keras style={"lg:w-8 lg:h-8 xs:w-8 xs:h-8"}/>
                        <Icon.mongo style={"lg:w-13 lg:h-13 xs:w-8 xs:h-8 fill-black"}/>
                        <Icon.cpp style={"lg:w-8 lg:h-8 xs:w-8 xs:h-8"}/>
                        <Icon.django style={"lg:w-8 lg:h-8 xs:w-8 xs:h-8"}/>
                        <Icon.supabase style={"lg:w-12 lg:h-12 xs:w-8 xs:h-8 fill-black"}/>
                    </motion.div>
                </div>
            </section>

            {/* education - certification */}
            <section className="lg:px-15 lg:h-auto lg:mt-0 xs:mt-15 flex flex-col justify-center">
                <motion.h2 initial={{ y:-50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, ease: "easeIn"}} className="text-4xl text-center font-bold">Education</motion.h2>
                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, ease: "easeIn"}} className="text-center text-lg text-textSec mb-5">Get to know more about my education  background</motion.p>
                <div className="flex lg:flex-row xs:flex-col justify-center lg:gap-x-10 lg:items-start xs:items-center">
                    <motion.div initial="hidden" whileInView="visible" variants={{ visible: {transition: {staggerChildren: 0.2}}}} className="lg:w-1/2 text-justify">
                        <motion.span variants={{ hidden: { opacity: 0, x:-100 }, visible: {opacity: 1, x: 0}}} transition={{ duration: 0.4, ease: "easeOut"}} className="text-textSec">2023 - Present</motion.span>
                        <motion.h3 variants={{ hidden: { opacity: 0, x:-100 }, visible: {opacity: 1, x: 0}}} transition={{ duration: 0.4, ease: "easeOut"}} className="text-2xl font-bold text-textMain">Indonesia University of Education</motion.h3>
                        <motion.span variants={{ hidden: { opacity: 0, x:-100 }, visible: {opacity: 1, x: 0}}} transition={{ duration: 0.4, ease: "easeOut"}} className="text-lg text-textSec block mb-3">Bachelor of Software Engineering</motion.span>
                        <motion.p variants={{ hidden: { opacity: 0, x:-100 }, visible: {opacity: 1, x: 0}}} transition={{ duration: 0.4, ease: "easeOut"}} className="mb-1.5">
                            Fascinated by the rapid growth of technology, I decided to pursue a career as a <strong>professional software engineer</strong>. To achieve this, I'm currently studying for a bachelor's degree in <strong>Software Engineering</strong> at the <strong>Indonesia University of Education</strong>.
                        </motion.p>
                        <motion.p variants={{ hidden: { opacity: 0, x:-100 }, visible: {opacity: 1, x: 0}}} transition={{ duration: 0.4, ease: "easeOut"}} className="mb-1.5">
                            Alongside my formal education, I actively seek opportunities to develop practical skills and gain hands-on experience through informal learning, such as bootcamps and certification programs. I'm currently a member of the <strong>Google Developer Student Clubs (GDSC)</strong> and hold certifications including <strong>Microsoft Office Specialist for Excel (Associate)</strong>, as well as several <strong>certifications from Dicoding</strong>. These help me stay current and continuously grow in the tech industry.
                        </motion.p>
                        <motion.p variants={{ hidden: { opacity: 0, x:-100 }, visible: {opacity: 1, x: 0}}} transition={{ duration: 0.4, ease: "easeOut"}} className="mb-1.5">
                            My main interests lie in <strong>web development, machine learning, and artificial intelligence</strong>. Beyond that, I’m also expanding my skills in mobile and desktop application development.
                        </motion.p>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" variants={{ visible: {transition: {staggerChildren: 0.2}}}} className="lg:w-1/2 lg:mt-0 xs:mt-10 xs:w-full">
                        <motion.h3 variants={{ hidden: { opacity: 0, x:100 }, visible: {opacity: 1, x: 0}}} transition={{ duration: 0.4, ease: "easeOut"}} className="text-center text-2xl font-bold ">Achievements</motion.h3>
                        <motion.p variants={{ hidden: { opacity: 0, x:100 }, visible: {opacity: 1, x: 0}}} transition={{ duration: 0.4, ease: "easeOut"}} className="text-center text-lg text-textSec">Some of my achievements during my study</motion.p>
                        <div className="lg:mt-10 xs:mt-5 flex flex-col gap-4">
                            <p className="text-red-600">{errorFetch}</p>
                            {
                                certifList.slice(0, certifSeeMore ? certifList.length : 3).map((data, idx) => (
                                    <motion.div initial={{ y: 10 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, ease: "easeOut"}} className="py-5 px-5 shadow-xl border-2 border-gray-200 rounded-xl flex items-center gap-5 w-full">
                                        <Icon.medal style={"w-8 h-8 fill-black"}/>
                                        <div className="w-full">
                                            <h4 className="text-lg text-textMain font-bold">{data.certifName}</h4>
                                            <p className="text-gray-700 mb-2">Publisher: {data.publisher}</p>
                                            <div className="flex justify-between w-full text-textSec text-sm">
                                                <span>{data.receiveAt}</span>
                                                <span>{data.code}</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))
                            }                            
                            <button onClick={() => setCertifSeeMore(!certifSeeMore)} className="bg-mainAccent hover:bg-hoverAccent text-white font-bold py-1 w-2/3 mx-auto mt-2 rounded-xl">
                                {certifSeeMore ? "See Less" : "See More"}    
                            </button>                         
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* [get in touch] */}
            <section className="flex flex-col justify-center">
                <div className="text-center justify-self-start h-screen flex flex-col justify-center snap-center">
                    <motion.p initial={{x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, ease: "easeInOut"}} className="font-bold sm:text-4xl xs:text-xl">"Aut viam inveniam aut faciam"</motion.p>
                    <motion.p initial={{x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut"}} className="mt-2 text-lg text-textSec">"I shall either find a way or make one"</motion.p>
                </div>
                <div className="mt-[10vh] mb-[40vh] flex flex-col justify-center text-center snap-center">
                    <motion.span initial={{y: -100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: "easeInOut"}} className="block text-2xl text-textSec tracking-widest mb-4">Let's know better</motion.span>
                    <Link href={'/#contact'}>
                        <motion.span initial={{y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: "easeInOut"}} className="block font-bold text-5xl hover:underline cursor-default select-none xs:underline lg:no-underline">
                            Get in Touch
                        </motion.span>
                    </Link>
                </div>
            </section>
        </div>
    )
}

