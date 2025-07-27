"use client"
import Footer from "@/component/Footer";
import SectionDivider from "@/component/pageAssets/SectionDivider";
import { IconOpenLink } from "@intentui/icons";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function ArchiveProject({  }) {
        const [ moreProject, setMoreProject ] = useState(false);
        const [ projectList, setProjectList ] = useState([]);
        const [ errorFetch, setErrorFetch ] = useState("");
    
        useEffect(() => {
            const fetchData = async () => {
                const res = await fetch('/api/project');
                const result = await res.json();
                if (res.ok) {
                    setProjectList(result)
                } else {
                    setErrorFetch("Error: ", res.statusText)
                }
            }
            fetchData();
        },[])
    return(
        <div className="lg:px-15 px-5 py-20">
            <h1 className="text-3xl font-bold">Projects Archive</h1>
            <SectionDivider />
            <p>{errorFetch}</p>

            <div>
                <table className="table-auto w-full text-center border-spacing-10">
                    <colgroup>
                        <col className="w-1/10"/>
                        <col className="w-2/10"/>
                        <col className="w-4/10"/>
                        <col className="w-1/10"/>
                        <col className="w-1/10"/>
                    </colgroup>
                    <thead className="border-b-1 border-bgSoft">
                        <tr>
                            <th className="py-3">Year</th>
                            <th className="py-3">Title</th>
                            <th className="py-3">Technology</th>
                            <th className="py-3">Type</th>
                            <th className="py-3">Link</th>
                        </tr>
                    </thead>
                    <tbody>                     
                        {projectList.map((data, idx) => (
                            <tr key={idx} className="border-b-1 border-bgSoft">
                                <td className="py-2 px-1 lg:text-base xs:text-sm">{data.date.split("-")[0]}</td>
                                <td className="py-2 px-1 lg:text-base xs:text-sm hover:underline select-none cursor-pointer">
                                    <Link href={`/detail/project/${data.id}`}>
                                        {data.projectName}
                                    </Link>
                                </td>
                                <td className="py-2 px-1 lg:text-base xs:text-sm">{data.utils.join(', ')}</td>
                                <td className="py-2 px-1 lg:text-base xs:text-sm underline-offset-3 hover:underline select-none cursor-pointer">{data.type}</td>
                                <td className="text-center align-middle py-2 px-1 lg:text-base xs:text-sm cursor-pointer">
                                    <Link href={`/detail/project/${data.id}`}>
                                        <IconOpenLink className="inline-block mx-auto"/>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Footer />
        </div>
    )
}