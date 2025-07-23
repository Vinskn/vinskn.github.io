import Image from "next/image";
import { useEffect, useRef } from "react";
import { useInView } from 'motion/react'
import ArrowComponent from "../pageAssets/LandingArrow";
import SectionDivider from "../pageAssets/SectionDivider";
import Link from "next/link";
import { IconBrandDiscord, IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconDevicePhone, IconEyeClosed, IconGlobe2, IconMail, IconProcessor } from "@intentui/icons";

export default function LandingPage({ openerSection }) {
    
    const sectionView = useRef(null);
    const sectioninView = useInView(sectionView, {amount: 0.2});
    useEffect(() => {
        openerSection(!sectioninView);
    }, [sectioninView]);
    console.log("tes", sectioninView);
    
    return (
        <div ref={sectionView}>
            <section
                className="lg:p-20 sm:p-10 xs:p-5 xs:pt-8 sm:pt-10"
            >
                <h2 className="text-center font-bold lg:text-3xl sm:text-2xl xs:text-2xl text-textMain">
                    Hi, I'm Sinamo Kevin Nathanael
                </h2>
                <p className="text-center lg:text-lg xs:text-base lg:mt-4 sm:mt-2 lg:w-2/3 mx-auto text-textSec">
                    I’m a Software Engineering graduate with a strong focus on frontend web development. While I specialize in web interfaces, I also build simple mobile and desktop apps. Currently exploring the exciting world of AI and machine learning.
                </p>
            </section>

            <section className="lg:h-[80vh] xs:h-[50vh]">
                <div>
                    <h2 className="font-semibold lg:text-2xl sm:text-xl text-center lg:mb-2 md:-mb-4 sm:-mb-6">
                        Face Behind the Code
                    </h2>
                    <div className="flex justify-center">
                        <ArrowComponent.ArrowLR style={"w-1/4 fill-textSec sm:mt-0 xs:-mt-10"}/>
                        <ArrowComponent.ArrowRL style={"w-1/4 fill-textSec sm:mt-0 xs:-mt-10"}/>
                    </div>
                </div>
                <div className="flex justify-center w-full h-full lg:mt-0 sm:-mt-5 xs:-mt-10">
                    <div className="relative sm:w-1/2 xs:w-2/3 xs:h-1/2 lg:h-2/3">
                        <Image 
                            src={'/myPict.jpg'}
                            fill
                            alt="Sinamo Kevin Nathanael Picture"
                            className="brightness-90 drop-shadow-xl rounded-b-xl lg:grayscale hover:grayscale-0 object-cover object-right"
                        />
                    </div>
                </div>
            </section>

            <section className="lg:h-[90vh] flex flex-col lg:justify-center">
                <h2 className="lg:text-3xl xs:text-2xl font-bold text-textMain text-center">Tools & Technologies</h2>
                <p className="text-center lg:text-lg xs:text-base lg:mb-8 sm:mb-6 xs:mb-5">These are the skills that power my projects.</p>
                <div className="flex justify-center lg:gap-20 sm:gap-10 xs:gap-5 sm:flex-nowrap xs:flex-wrap lg:mb-0 xs:mb-5">
                    <div className="flex flex-col items-center justify-center cursor-pointer">
                        <IconGlobe2 className="lg:w-10 xs:w-7 lg:h-10 xs:h-7 mb-2"/>
                        <p className="font-semibold lg:text-base xs:text-sm text-textMain">Web Development</p>
                    </div>
                    <div className="flex flex-col items-center justify-center cursor-pointer">
                        <IconEyeClosed className="lg:w-10 xs:w-7 lg:h-10 xs:h-7 mb-2"/>
                        <p className="font-semibold lg:text-base xs:text-sm text-textSec">Rest API</p>
                    </div>
                    <div className="flex flex-col items-center justify-center cursor-pointer">
                        <IconDevicePhone className="lg:w-10 xs:w-7 lg:h-10 xs:h-7 mb-2"/>
                        <p className="font-semibold lg:text-base xs:text-sm text-textSec">Mobile Development</p>
                    </div>
                    <div className="flex flex-col items-center justify-center cursor-pointer">
                        <IconProcessor className="lg:w-10 xs:w-7 lg:h-10 xs:h-7 mb-2"/>
                        <p className="font-semibold lg:text-base xs:text-sm text-textSec">Machine Learning</p>
                    </div>
                </div>

                <div className="flex justify-around lg:flex-row xs:flex-col items-top lg:mt-15 lg:gap-10 xs:gap-5 sm:px-10 xs:px-5 text-textMain">
                    <div className="lg:w-1/2 xs:w-full">
                        <h3 className="text-center font-bold text-xl mb-2">Language & Framework</h3>
                        <div>
                            <p className="text-center">
                                HTML | CSS | Javascript | <strong>React</strong> | <strong>NextJS</strong> | <strong>TailwindCSS</strong> |
                                Bootsrap5 | <strong>SupabaseDB</strong> | ExpressJS | MySQL | <strong>SupabaseDB</strong> |MongoDB 
                                PHP | Python
                            </p>
                        </div>
                    </div>
                    <div className="lg:w-1/2 xs:w-full">
                        <h3 className="text-center font-bold text-xl mb-2">Tools</h3>
                        <div>
                            <p className="text-center">
                                <strong>Visual Studio Code</strong> | Figma | <strong>Github</strong> | <strong>Git</strong> | Canva | Corel Draw
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="lg:px-15 sm:px-8 xs:px-5 my-15">
                <h2 className="lg:text-3xl xs:text-2xl font-bold ">Profesional Experience</h2>
                <SectionDivider />
                <div className="lg:mx-25 lg:mt-10 py-5 border-l-4 border-secAccent">
                    <div className="relative pl-10 bg-gray-200 rounded-xl p-3 my-4">
                        <span className="w-10 h-10 bg-mainAccent rounded-full border-4 border-background absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2" />
                        <div>
                            <span className="text-xs bg-secAccent py-0.5 px-2 pr-5 rounded-r-lg text-white">Feb 2025 - Mar 2025</span>
                            <h3 className="mt-2 text-xl font-bold">PT. SHB Naga Company Profile Website</h3>
                            <span className="text-sm text-textSec">Freelance - Washington DC, America (remote)</span>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quidem quibusdam veniam suscipit iusto sed animi iure exercitationem doloremque molestiae!</p>
                            <ul className="flex gap-2 text-sm text-gray-800 mt-3 w-3/4 cursor-default select-none">
                                <li className="bg-bgSoft py-0.5 px-2 rounded-lg border border-gray-400">React</li>
                                <li className="bg-bgSoft py-0.5 px-2 rounded-lg border border-gray-400">HTML</li>
                                <li className="bg-bgSoft py-0.5 px-2 rounded-lg border border-gray-400">CSS</li>
                                <li className="bg-bgSoft py-0.5 px-2 rounded-lg border border-gray-400">Javascript</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" className="lg:h-screen xs:h-[50vh] flex lg:flex-row xs:flex-col justify-around items-center lg:px-30 xs:px-10 relative">
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
            </section>
        </div>
    )
}

// mailto:vinskn1@gmail.com?subject=Hello%20Sinamo%2C%20I’d%20like%20to%20get%20in%20touch&body=Hi%20Sinamo%2C