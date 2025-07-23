"use client"

import Footer from "@/component/Footer";
import SectionDivider from "@/component/pageAssets/SectionDivider";
import Image from "next/image";
import { useState } from "react"

export default function Project({  }) {
    const [ tes, setTes ] = useState(false);
    
    return(
        <div className="overflow-x-hidden">
           <section className="flex lg:flex-row xs:flex-col lg:justify-between xs:justify-center lg:items-center h-screen lg:px-15 xs:px-5">
                <div className="lg:w-1/3">
                    <h1 className="sm:text-6xl xs:text-5xl font-bold mb-2 lg:text-start xs:text-center">My Project</h1>
                    <SectionDivider style={'block xs:mx-auto lg:mx-0'}/>
                    <p className="text-xl text-textSec -mt-3 lg:text-start xs:text-center">Here are some of the projects I’ve worked on</p>
                </div>
                <div className="w-2/3 h-full xs:hidden lg:flex items-end justify-center flex-col overflow-x-hidden perspective-dramatic">
                    <div className="relative aspect-video w-2/3 -rotate-y-3 transition-transform duration-200 hover:rotate-y-0 hover:z-10">
                        <Image 
                            src='/prj1.png'
                            fill
                            alt="Project Example 1"
                            className="object-cover object-top"
                        />
                    </div>
                    <div className="absolute top-3/9 -rotate-y-2 w-2/3 aspect-video transition-transform duration-200 hover:rotate-y-0 hover:z-10">
                        <Image 
                            src='/prj2.png'
                            fill
                            alt="Project Example 2"
                            className="object-contain"
                        />
                    </div>
                    <div className="absolute top-4/9 -rotate-y-1 w-2/3 aspect-video transition-transform duration-200 hover:rotate-y-0 hover:z-10">
                        <Image 
                            src='/prj3.png'
                            fill
                            alt="Project Example 3"
                            className="object-contain"
                        />
                    </div>
                </div>
           </section>

           <section className="lg:h-screen lg:mb-0 mb-20 lg:px-15 xs:px-5">
                <h2 className="text-4xl font-bold">Highlight</h2>
                <SectionDivider />

                <div className="flex lg:flex-row xs:flex-col lg:justify-around gap-5 lg:items-center">
                    <div className="relative lg:w-1/2 lg:h-[70vh] perspective-dramatic flex flex-col justify-start items-center">
                        <div className="relative w-9/10 aspect-video">
                            <Image 
                                src='/prj2.png'
                                fill
                                alt="Project Example 2"
                                className="object-contain hover:z-10 hover:scale-101 transition duration-200"
                            />
                            <div className="absolute w-8/10 aspect-video -bottom-1/6 hover:z-10 hover:w-9/10 transition-all duration-200">
                                <Image 
                                    src='/prj2.2.png'
                                    fill
                                    alt="Project Example 2"
                                    className="object-contain"
                                />
                            </div>
                            <div className="absolute w-6/10 aspect-video right-0 top-1/2 transform -translate-y-1/2 hover:z-10 hover:w-9/10 transition-all duration-200">
                                <Image 
                                    src='/prj2.3.png'
                                    fill
                                    alt="Project Example 2"
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 lg:mt-0 xs:mt-5 text-justify">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, ratione tempora aut temporibus nam magni, quae a veniam excepturi earum minima molestias id sapiente unde dolore atque repellat corporis! Hic voluptas, minima ducimus doloribus voluptatum obcaecati veritatis sed numquam reiciendis iusto eveniet. Commodi sequi iure architecto harum quam recusandae molestiae.</p>
                        <button className="mt-10 lg:px-5 xs:px-15 py-2 bg-hoverAccent hover:bg-secAccent text-white font-bold rounded-xl block lg:mx-0 xs:mx-auto">See Website</button>
                    </div>
                </div>

           </section>

           <section className="lg:px-15 px-3 lg:my-10">
                <h2 className="text-4xl font-bold lg:text-start text-center">Recent Project</h2>
                <SectionDivider style={'block lg:mx-0 xs:mx-auto'}/>
                <div className="flex lg:gap-5 gap-2 flex-wrap justify-center">
                    <div className="relative lg:w-4/10 w-full h-75 m-5 bg-bgSoft rounded-lg">
                        <div className="relative w-full h-75 aspect-video">
                            <Image 
                                src='/prj1.png'
                                fill
                                alt="Project Example 1"
                                className="object-contain object-top rounded-lg"
                            />
                        </div>
                        <div className="absolute z-10 top-0 p-5 bg-mainAccent/20 h-full w-full rounded-lg text-textMain backdrop-blur-lg flex flex-col justify-center transition delay-150 ease-linear hover:opacity-0">
                            <span className="absolute left-0 top-0 lg:mt-5 pl-3 pr-5 py-0.5 lg:rounded-tl-none xs:rounded-tl-lg rounded-r-xl text-white text-sm font-bold bg-mainAccent">Indonesia | 2025</span>
                            <h3 className="font-bold text-xl text-center">NGABARIN: Campus Event Management</h3>
                            <span className="text-center text-gray-600">Desktop Application | 2025</span>
                            <p className="mt-4 line-clamp-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio ad explicabo reiciendis molestiae aspernatur vel earum sunt soluta deleniti quo.</p>
                            <div className="flex gap-3 my-2 text-white ">
                                <span className="px-3 py-1 bg-secAccent rounded-lg text-sm">JAVA</span>
                                <span className="px-3 py-1 bg-secAccent rounded-lg text-sm">Swing</span>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
                <div className="flex justify-center mt-10">
                    <button className="bg-hoverAccent hover:bg-secAccent text-white font-semibold py-2 px-13 rounded-xl">See Archive</button>
                </div>
           </section>
        
            <Footer />
        </div>
    )
}