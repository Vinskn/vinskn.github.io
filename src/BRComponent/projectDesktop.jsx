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
            <p className="font-karma font-light mt-3 text-xs">All of these projects are available on my GitHub. If you're interested in purchasing or collaborating on a project, feel free to contact me via email.</p>
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
                        image={["https://res.cloudinary.com/destefwak/image/upload/v1740299552/portoAssets/project/cykfpmssr380aj4n2qjq.png", "https://res.cloudinary.com/destefwak/image/upload/v1740299552/portoAssets/project/eaxkw4qyo5btirwkzujv.png", "https://res.cloudinary.com/destefwak/image/upload/v1740299551/portoAssets/project/afgn9gxhmn51pu0k7rm1.png"]}
                        program={["devicon-python-plain", 'devicon-numpy-plain', 'devicon-pandas-plain']}
                        link="https://github.com/Vinskn/Recollection-Project.git"
                        />}
                    <h1 className="font-kaushan text-2xl">Recollection: Student Trading Note App</h1>
                    <p className="text-sm font-karma line-clamp-2">Recollection: Student Trading Note App is my first application developed using Python and the Kivy framework. This app provides a platform for students to buy and sell study notes, making it easier to access and share valuable learning resources.</p>
                </div>

                <div onMouseEnter={() => setVisible("p3")} onMouseLeave={() => {setVisible("")}} className="pb-3 border-b-1 border-red-900 mb-4 relative">
                    {isVisible === "p3" && <Project_popup 
                        pName="ZooSphere: Zoo Website" 
                        pDesc="ZooSphere is a zoo website that provides information about animals, ticket prices, and the zoo's history. One of its key features is a ticket generation system that creates unique codes and QR codes, which are stored in a database. Additionally, the admin dashboard allows ticket price adjustments and access to sold ticket records. The website is built using React, with supporting libraries such as Express, Redux, and Random. It uses MongoDB for database management, while Node.js serves as the API provider connecting the frontend and backend."
                        image={["https://res.cloudinary.com/destefwak/image/upload/v1738490184/portoAssets/project/serfsichkz4z7oierkf8.jpg", "https://res.cloudinary.com/destefwak/image/upload/v1738490184/portoAssets/project/ckokxm0qyds07plrhvhj.jpg", "https://res.cloudinary.com/destefwak/image/upload/v1738490186/portoAssets/project/rydy8yscsi0bzys8v9mf.jpg", "https://res.cloudinary.com/destefwak/image/upload/v1738490186/portoAssets/project/am7ziupp2zo7rsnafrxo.jpg", "https://res.cloudinary.com/destefwak/image/upload/v1738490187/portoAssets/project/qfkkaebiyawpiesv6fqw.jpg", "https://res.cloudinary.com/destefwak/image/upload/v1738490187/portoAssets/project/st0aloudttwa3g86phem.jpg", "https://res.cloudinary.com/destefwak/image/upload/v1738490185/portoAssets/project/awla1ro4ejgtbofxtisd.jpg", "https://res.cloudinary.com/destefwak/image/upload/v1738490185/portoAssets/project/yumdw8dirjhzmvro5dfw.jpg", "https://res.cloudinary.com/destefwak/image/upload/v1738490187/portoAssets/project/lfvj7udglqsqf8gux0hx.jpg", "https://res.cloudinary.com/destefwak/image/upload/v1738490184/portoAssets/project/rmngm6sva6t6ccm7drov.png"]}
                        program={["devicon-html5-plain", "devicon-tailwindcss-original", "devicon-react-original", "devicon-express-original", "devicon-mongodb-plain", "devicon-nodejs-plain-wordmark"]}
                        link=""
                        />}
                    <h1 className="font-kaushan text-2xl">ZooSphere: Zoo Website</h1>
                    <p className="text-sm font-karma line-clamp-2">ZooSphere is a zoo website that provides information about animals, ticket prices, and the zoo's history. One of its key features is a ticket generation system that creates unique codes and QR codes, which are stored in a database. Additionally, the admin dashboard allows ticket price adjustments and access to sold ticket records. The website is built using React, with supporting libraries such as Express, Redux, and Random. It uses MongoDB for database management, while Node.js serves as the API provider connecting the frontend and backend.</p>
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