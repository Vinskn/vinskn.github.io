import Footer from "@/component/Footer";
import { IconBrandGithub, IconChainLink } from "@intentui/icons";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation"


export default async function DetailProject({ params }) {
    const slug = await params;    
    
    const res = await fetch(`${process.env.BASE_URL}/api/project/${slug.slug}`, {
        cache: 'force-cache'
    });

    if (!res.ok) {
        notFound();
    }
    const projectData = await res.json()
    
    return(
        <>
            <section className="flex lg:flex-row flex-col lg:justify-between justify-center gap-5 lg:gap-0 lg:items-center h-screen w-full px-5 lg:px-15">
                <div className="lg:w-1/2 flex flex-col justify-between gap-5">
                    <div>
                        <span className="text-textSec text-lg tracking-widest lg:font-normal font-light">Project Name</span>
                        <h1 className="text-textMain text-3xl font-semibold">{projectData[0].projectName}</h1>
                    </div>
                    <div>
                        <span className="text-textSec text-lg tracking-widest lg:font-normal font-light">Technology</span>
                        <p className="text-2xl">{projectData[0].utils.join(', ')}</p>
                    </div>
                    <div>
                        <span className="text-textSec text-lg tracking-widest lg:font-normal font-light">Project Info</span>
                        <ul>
                            <li className="text-lg">Completed in: <strong>{projectData[0].date.split('-')[0]}</strong></li>
                            <li className="text-lg">Built In: <strong>{projectData[0].compleateTime}</strong></li>
                            <li className="text-lg">Location: <strong>{projectData[0].location}</strong></li>                            
                        </ul>
                    </div>
                    <div className="flex gap-5">
                        {projectData[0].githubLink != null && 
                            <Link href={projectData[0].githubLink} target="_blank">
                                <IconBrandGithub className="w-8 h-8 text-textMain cursor-pointer"/>
                            </Link>
                        }
                        {projectData[0].websiteLink != null && 
                            <Link href={projectData[0].websiteLink} target="_blank">
                                <IconChainLink className="w-8 h-8 text-blue-800 cursor-pointer"/>
                            </Link>
                        }
                    </div>
                </div>
                <div className="lg:w-1/2 flex flex-col justify-between">
                    <span className="text-textSec text-lg tracking-widest lg:font-normal font-light">Project Description</span>
                    <p className="lg:mt-2 text-lg text-justify">{projectData[0].projectDesc}</p>
                    <div className="w-9/10 flex flex-wrap gap-5 mt-5">
                        <p className="bg-mainAccent/40 px-3 py-0.5 rounded-xl font-semibold text-textMain">{projectData[0].workType}</p>
                        <p className="bg-orange-700/40 px-3 py-0.5 rounded-xl font-semibold text-textMain">{projectData[0].type}</p>
                        <p className="bg-yellow-600/40 px-3 py-0.5 rounded-xl font-semibold text-textMain">{projectData[0].appType}</p>
                    </div>
                </div>
            </section>

            <section className="lg:px-15 px-5 w-full flex flex-col items-center gap-5 lg:my-5">
                {
                    projectData[0].image.imageData.map((data, idx) => (
                        <div key={idx} className="relative object-cover lg:w-2/3 w-full h-auto aspect-video">
                            <Image
                                src={data}
                                fill
                                alt={`Project Example Image - ${idx}`}
                            />
                        </div>
                    ))
                }
            </section>
            <Footer />
        </>
    )
}