import { useEffect, useState } from "react";
import Project_popup from "../utils/projectPopupDesktop";
import axios from 'axios';

const Project_desktop = () => {

    const [isVisible, setVisible] = useState("");
    const [loadMore, setLoadMore] = useState(false);
    const [prjData, setPrjData] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleLoadMore = () => {
        setLoading(true);
        if (!loadMore){
            axios.get('http://localhost:5000/api/PortofolioV2/Project-Part')
                .then(response => {
                    setPrjData(response.data);
                    setLoadMore(true);
                    setLoading(false);
                })
                .catch(error => {
                    console.error(error);
                });
        }
        else {
            setPrjData([])
            setLoadMore(false);
            setLoading(false)
        }
    }
    

    return (
        <section id="project" className="mt-15">
            <h1 className="text-4xl font-bold font-kaushan">My Project</h1>
            <div className="mt-8">
                <div onMouseEnter={() => setVisible("p1")} onMouseLeave={() => {setVisible("")}} className="pb-3 border-b-1 border-red-900 mb-4 relative">
                    {isVisible === "p1" && <Project_popup 
                        pName="NAVA System" 
                        pDesc="NAVA System is a unified name for all the products I create, representing a collection of innovative solutions built with a focus on functionality and efficiency. Each project under the NAVA System embodies my commitment to quality and continuous improvement."
                        image={["/NAVA.png"]}
                        program={["devicon-react-original"]}
                        link=""
                        />}
                    <h1 className="font-kaushan text-2xl">NAVA System</h1>
                    <p className="text-sm font-karma line-clamp-2">NAVA System is a unified name for all the products I create, representing a collection of innovative solutions built with a focus on functionality and efficiency. Each project under the NAVA System embodies my commitment to quality and continuous improvement.</p>
                </div>

                <div onMouseEnter={() => setVisible("p2")} onMouseLeave={() => {setVisible("")}} className="pb-3 border-b-1 border-red-900 mb-4 relative">
                    {isVisible === "p2" && <Project_popup 
                        pName="Recollection: Student Trading Note App" 
                        pDesc="Recollection: Student Trading Note App is my first application developed using Python and the Kivy framework. This app provides a platform for students to buy and sell study notes, making it easier to access and share valuable learning resources."
                        image={["/NAVA.png"]}
                        program={["devicon-python-plain", 'devicon-numpy-plain', 'devicon-pandas-plain']}
                        link=""
                        />}
                    <h1 className="font-kaushan text-2xl">Recollection: Student Trading Note App</h1>
                    <p className="text-sm font-karma line-clamp-2">Recollection: Student Trading Note App is my first application developed using Python and the Kivy framework. This app provides a platform for students to buy and sell study notes, making it easier to access and share valuable learning resources.</p>
                </div>

                <div onMouseEnter={() => setVisible("p3")} onMouseLeave={() => {setVisible("")}} className="pb-3 border-b-1 border-red-900 mb-4 relative">
                    {isVisible === "p3" && <Project_popup 
                        pName="Tristar Invoice Generator" 
                        pDesc="Tristar Invoice Generator is a Python-based application built with the Kivy framework, utilizing libraries such as Pandas, Webbrowser, FPDF, and Babel. Its primary function is to generate invoices based on user input, producing a ready-to-print PDF document efficiently."
                        image={["/NAVA.png"]}
                        program={["devicon-python-plain", 'devicon-babel-plain', 'devicon-pandas-plain']}
                        link=""
                        />}
                    <h1 className="font-kaushan text-2xl">Tristar Invoice Generator</h1>
                    <p className="text-sm font-karma line-clamp-2">Tristar Invoice Generator is a Python-based application built with the Kivy framework, utilizing libraries such as Pandas, Webbrowser, FPDF, and Babel. Its primary function is to generate invoices based on user input, producing a ready-to-print PDF document efficiently.</p>
                </div>

                {
                    loading ? <p>Loading...</p> : 
                    prjData.map((i) => (
                        <div key={i._id} onMouseEnter={() => setVisible(i._id)} onMouseLeave={() => {setVisible("")}} className="pb-3 border-b-1 border-red-900 mb-4 relative">
                            {isVisible === i._id && <Project_popup 
                                pName= {i.prjName} 
                                pDesc= {i.prjDesc}
                                image= {i.image}
                                program= {i.progIcn}
                                link= {i.linkPrj}
                                />}
                            <h1 className="font-kaushan text-2xl">{i.prjName}</h1>
                            <p className="text-sm font-karma line-clamp-2">{i.prjDesc}</p>
                        </div>
                    ))
                }


            </div>
            <div className='flex justify-center'>
            <button onClick={handleLoadMore} 
                className={`${loadMore ? "bg-myRed-600 hover:bg-red-800 text-white" : "bg-white hover:bg-gray-300 text-black"} px-10 py-1 rounded-xl font-kaushan`}
                >{loadMore ? "See Less" : "Load More"}
            </button>
          </div>
        </section>
    )
}

export default Project_desktop;