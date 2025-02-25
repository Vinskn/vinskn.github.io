import axios from "axios";
import { useState } from "react";


const Certificate_desktop = () => {

    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [loadMore, setLoadMore] = useState(false);

    const handleLoadMore = () => {
        setLoading(true);
        if (!loadMore){
          axios.get('http://localhost:5000/api/PortofolioV2/Certificate-Part')
          .then((res) => {
            setData(res.data);
            setLoading(false);
            setLoadMore(true);
          })
          .catch((error) => {
            console.error('Error:', error);
          }); 
        }
        else {
          setData([]);
          setLoadMore(false);
          setLoading(false);
        }
      }

    return (
        <section id='certif' className='mt-15'>
            <h1 className="text-4xl font-bold font-kaushan">Certification & Award</h1>
            <div className="mt-5">
                <div onMouseEnter={() => setImage("st1")} onMouseLeave={() => setImage("")} className="border-b-1 border-red-900 pb-4 p-4 mb-5 relative bg-red-950/15 rounded-t-2xl">
                    {
                        image === "st1" &&
                        <img src="https://res.cloudinary.com/destefwak/image/upload/v1738491369/portoAssets/addData/certif/wyuof8rnrevv4miiwhy8.png" alt="certif" className="absolute rounded-2xl z-10 w-1/2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
                    }
                    <h1 className="font-kaushan text-2xl">Microsoft Office Specialist: Excel Associate</h1>
                    <p className="text-sm text-justify">Microsoft Office Specialist (MOS) Excel Associate certification demonstrates my proficiency in using Microsoft Excel to manage and analyze data effectively. This certification validates my ability to create and format worksheets, use functions and formulas, and visualize data through charts and tables, showcasing my skills in spreadsheet management and data analysis.</p>
                    <div className="mt-3 flex justify-between items-center">
                        <div>
                            <h1 className="text-sm font-bold font-karma tracking-wider">Microsoft - International</h1>
                            <h1 className="text-sm font-karma tracking-wider">Credential: x5a7-sFpA</h1>
                        </div>
                        <h1 className="text-sm font-bold font-karma  tracking-wider">Awarded at: July 2, 2024</h1>
                    </div>
                </div>

                <div onMouseEnter={() => setImage("st2")} onMouseLeave={() => setImage("")} className="border-b-1 border-red-900 pb-4 p-4 mb-5 relative bg-red-950/15 rounded-t-2xl">
                    {
                        image === "st2" &&
                        <img src="https://res.cloudinary.com/destefwak/image/upload/v1738491372/portoAssets/addData/certif/vlkewuw1bzg78myxqhtd.png" alt="certif" className="absolute rounded-2xl z-10 w-1/2 top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
                    }
                    <h1 className="font-kaushan text-2xl">Dicoding: Starting with Machine Learning</h1>
                    <p className="text-sm text-justify">The Dicoding ML Foundations certification demonstrates my understanding of fundamental machine learning concepts, including machine learning frameworks such as TensorFlow and Keras. Through this course, I developed an image identifier as a final project, showcasing my ability to build and implement ML models for image recognition.</p>
                    <div className="mt-3 flex justify-between items-center">
                        <div>
                            <h1 className="text-sm font-bold font-karma tracking-wider">Dicoding - Indonesia</h1>
                            <h1 className="text-sm font-karma tracking-wider">Credential: QLZ97K59MP5D</h1>
                        </div>
                        <h1 className="text-sm font-bold font-karma  tracking-wider">Awarded at: April 29, 2024</h1>
                    </div>
                </div>

                <div onMouseEnter={() => setImage("st3")} onMouseLeave={() => setImage("")} className="border-b-1 border-red-900 pb-4 p-4 mb-5 relative bg-red-950/15 rounded-t-2xl">
                    {
                        image === "st3" &&
                        <img src="https://res.cloudinary.com/destefwak/image/upload/v1738491368/portoAssets/addData/certif/w1gkjx2ugmiluiviwqlh.png" alt="certif" className="absolute rounded-2xl z-10 w-1/2 top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
                    }
                    <h1 className="font-kaushan text-2xl">Dicoding: Basic Javascript</h1>
                    <p className="text-sm text-justify">The Dicoding JavaScript Basics certification validates my foundational knowledge of JavaScript programming. Throughout this course, I learned core concepts such as operations, functions, object-oriented programming (OOP), asynchronous methods, and code quality based on ECMAScript standards, enabling me to write clean and efficient JavaScript code.</p>
                    <div className="mt-3 flex justify-between items-center">
                        <div>
                            <h1 className="text-sm font-bold font-karma tracking-wider">Dicoding - Indonesia</h1>
                            <h1 className="text-sm font-karma tracking-wider">Credential: KEXLY8J6YZG2</h1>
                        </div>
                        <h1 className="text-sm font-bold font-karma  tracking-wider">Awarded at: October 18, 2024</h1>
                    </div>
                </div>

                {
                    loading ? <p>Loading...</p> :
                    data.map((i)=> (
                        <div key={i._id} onMouseEnter={() => setImage(i._id)} onMouseLeave={() => setImage("")} className="border-b-1 border-red-900 pb-4 p-4 mb-5 relative bg-red-950/15 rounded-t-2xl">
                            {
                                image === `${i._id}` &&
                                <img src={`http://localhost:5000${i.path}`} alt={i.CertiName} className="absolute rounded-2xl z-10 w-1/2 top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
                            }
                            <h1 className="font-kaushan text-2xl">{i.CertiName}</h1>
                            <p className="text-sm text-justify">{i.desc}</p>
                            <div className="mt-3 flex justify-between items-center">
                                <div>
                                    <h1 className="text-sm font-bold font-karma tracking-wider">{i.publisher}</h1>
                                    <h1 className="text-sm font-karma tracking-wider">Credential: {i.credential}</h1>
                                </div>
                                <h1 className="text-sm font-bold font-karma  tracking-wider">Awarded at: {i.accDate}</h1>
                            </div>
                        </div>
                    ))
                }
               
                <div className='flex justify-center'>
                    <button onClick={handleLoadMore} className={`${loadMore ? "bg-myRed-600 hover:bg-red-800 text-white" : "bg-white hover:bg-gray-300 text-black"} px-10 py-1 rounded-xl font-kaushan`}>{loadMore ? "See Less" : "Load More"}</button>
                </div>
            </div>
        </section>
    )
}

export default Certificate_desktop;