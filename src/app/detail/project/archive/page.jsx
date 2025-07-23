import Footer from "@/component/Footer";
import SectionDivider from "@/component/pageAssets/SectionDivider";
import { IconOpenLink } from "@intentui/icons";



export default function ArchiveProject({  }) {
    
    return(
        <div className="lg:px-15 px-5 py-20">
            <h1 className="text-3xl font-bold">Projects Archive</h1>
            <SectionDivider />

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
                        <tr className="border-b-1 border-bgSoft">
                            <td className="py-2 px-1 lg:text-base xs:text-sm">2024</td>
                            <td className="py-2 px-1 lg:text-base xs:text-sm hover:underline select-none cursor-pointer">NAVA Project</td>
                            <td className="py-2 px-1 lg:text-base xs:text-sm">NEXT JS, Tailwind</td>
                            <td className="py-2 px-1 lg:text-base xs:text-sm underline-offset-3 hover:underline select-none cursor-pointer">Open Source</td>
                            <td className="text-center align-middle py-2 px-1 lg:text-base xs:text-sm cursor-pointer"><IconOpenLink className="inline-block mx-auto"/></td>
                        </tr>
                        <tr className="border-b-1 border-bgSoft">
                            <td className="py-2 px-1 lg:text-base xs:text-sm">2024</td>
                            <td className="py-2 px-1 lg:text-base xs:text-sm hover:underline select-none cursor-pointer">NAVA Project</td>
                            <td className="py-2 px-1 lg:text-base xs:text-sm">NEXT JS, Tailwind</td>
                            <td className="py-2 px-1 lg:text-base xs:text-sm underline-offset-3 hover:underline select-none cursor-pointer">Open Source</td>
                            <td className="text-center align-middle py-2 px-1 lg:text-base xs:text-sm cursor-pointer"><IconOpenLink className="inline-block mx-auto"/></td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
            <Footer />
        </div>
    )
}