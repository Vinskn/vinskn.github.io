'use client'

import Footer from "@/component/Footer";
import Image from "next/image";
import { useParams } from "next/navigation"


export default function DetailProject({  }) {
    const params = useParams();
    
    return(
        <>
            <section className="flex lg:flex-row flex-col lg:justify-between justify-center gap-5 lg:gap-0 lg:items-center h-screen w-full px-5 lg:px-15">
                <div className="lg:w-1/2 flex flex-col justify-between gap-5">
                    <div>
                        <span className="text-textSec text-lg tracking-widest lg:font-normal font-light">Project Name</span>
                        <h1 className="text-textMain text-3xl font-semibold">NAVA</h1>
                    </div>
                    <div>
                        <span className="text-textSec text-lg tracking-widest lg:font-normal font-light">Technology</span>
                        <p className="text-2xl">NEXT JS, Javascript</p>
                    </div>
                    <div>
                        <span className="text-textSec text-lg tracking-widest lg:font-normal font-light">Project Info</span>
                        <ul>
                            <li className="text-lg">Completion Date: <strong>2024</strong></li>
                            <li className="text-lg">Built In <strong>2 Weeks</strong></li>
                        </ul>
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <span className="text-textSec text-lg tracking-widest lg:font-normal font-light">Project Description</span>
                    <p className="lg:mt-2 text-lg text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, voluptatum. Sint obcaecati repudiandae repellat at corporis ratione tempore ab. Odit eius aliquid consequuntur iure praesentium, temporibus debitis itaque blanditiis exercitationem quas ad sed quis ipsam unde earum, ab explicabo tempore?</p>
                </div>
            </section>

            <section className="lg:px-15 px-5 w-full flex flex-col items-center gap-5 lg:my-5">
                <div className="relative object-cover lg:w-2/3 w-full h-auto aspect-video">
                    <Image
                        src={'/prj1.png'}
                        fill
                        alt="ppp"
                    />
                </div>
                <div className="relative object-cover lg:w-2/3 w-full h-auto aspect-video">
                    <Image
                        src={'/prj1.png'}
                        fill
                        alt="ppp"
                    />
                </div>
            </section>
            <Footer />
        </>
    )
}