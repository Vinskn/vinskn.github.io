import { useState } from "react";
import axios from "axios"



const Certificate_mobile = () => {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [seeMore, setSeeMore] = useState(false);

    const handleSeeMore = () => {
      setLoading(true);
      if (!seeMore){
        axios.get('http://fi4.bot-hosting.net:21303/api/PortofolioV2/Certificate-Part')
        .then((res) => {
          setData(res.data);
        })
        .catch((error) => {
          console.error('Error:', error);
        }); 
        setLoading(false);
        setSeeMore(true);
      }
      else {
        setData([]);
        setSeeMore(false);
        setLoading(false);
      }
    }

    return (
        <section id='certif' className='mt-15'>
          <h1 className='text-3xl mb-3 font-kaushan font-bold'>Certification</h1>
          <div>
            <div className='bg-red-600/35 p-3 rounded-2xl mb-4'>
              <h1 className='text-xl font-bold mb-2 font-kaushan'>Microsoft Office Specialist: Excel Associate</h1>
              <p className='text-xs font-karma text-justify'>Microsoft Office Specialist (MOS) Excel Associate certification demonstrates my proficiency in using Microsoft Excel to manage and analyze data effectively. This certification validates my ability to create and format worksheets, use functions and formulas, and visualize data through charts and tables, showcasing my skills in spreadsheet management and data analysis.</p>
              <div className="flex justify-between mt-4">
                <div>
                  <h1 className='text-xs font-bold font-karma tracking-wider'>Microsoft - International</h1>
                  <h1 className='text-sm font-karma tracking-wider'>Credential: x5a7-sFpA</h1>
                </div>
                <div className='flex justify-end'>
                  <a href="https://res.cloudinary.com/destefwak/image/upload/v1738491369/portoAssets/addData/certif/wyuof8rnrevv4miiwhy8.png" target="_blank"><button className='bg-white text-black px-4 py-0.5 rounded-xl text-sm font-kaushan'>See Certificate</button></a>
                </div>
              </div>
            </div>
            
            <div className='bg-red-600/35 p-3 rounded-2xl mb-4'>
              <h1 className='text-xl font-bold mb-2 font-kaushan'>Dicoding: Starting with Machine Learning</h1>
              <p className='text-xs font-karma text-justify'>The Dicoding ML Foundations certification demonstrates my understanding of fundamental machine learning concepts, including machine learning frameworks such as TensorFlow and Keras. Through this course, I developed an image identifier as a final project, showcasing my ability to build and implement ML models for image recognition.</p>
              <div className="flex justify-between mt-4">
                <div>
                  <h1 className='text-xs font-bold font-karma tracking-wider'>Dicoding - Indonesia</h1>
                  <h1 className='text-sm font-karma tracking-wider'>Credential: 07Z64J12RPQR</h1>
                </div>
                <div className='flex justify-end'>
                  <a href="https://res.cloudinary.com/destefwak/image/upload/v1738491372/portoAssets/addData/certif/vlkewuw1bzg78myxqhtd.png" target="_blank"><button className='bg-white text-black px-4 py-0.5 rounded-xl text-sm font-kaushan'>See Certificate</button></a>
                </div>
              </div>
            </div>  

            <div className='bg-red-600/35 p-3 rounded-2xl mb-4'>
              <h1 className='text-xl font-bold mb-2 font-kaushan'>Dicoding: Basic Javascript</h1>
              <p className='text-xs font-karma text-justify'>The Dicoding JavaScript Basics certification validates my foundational knowledge of JavaScript programming. Throughout this course, I learned core concepts such as operations, functions, object-oriented programming (OOP), asynchronous methods, and code quality based on ECMAScript standards, enabling me to write clean and efficient JavaScript code.</p>
              <div className="flex justify-between mt-4">
                <div>
                  <h1 className='text-xs font-bold font-karma tracking-wider'>Dicoding - Indonesia</h1>
                  <h1 className='text-sm font-karma tracking-wider'>Credential: KEXLY8J6YZG2</h1>
                </div>
                <div className='flex justify-end'>
                  <a href="https://res.cloudinary.com/destefwak/image/upload/v1738491368/portoAssets/addData/certif/w1gkjx2ugmiluiviwqlh.png" target="_blank"><button className='bg-white text-black px-4 py-0.5 rounded-xl text-sm font-kaushan'>See Certificate</button></a>
                </div>
              </div>
            </div>

            {
              loading ? (<p>Loading</p>) :
              data.map((i) => (
                <div key={i._key} className='bg-red-600/35 p-3 rounded-2xl mb-4'>
                  <h1 className='text-xl font-bold mb-2 font-kaushan'>{i.CertiName}</h1>
                  <p className='text-xs font-karma text-justify'>{i.desc}</p>
                  <div className="flex justify-between mt-4">
                    <div>
                      <h1 className='text-xs font-bold font-karma tracking-wider'>{i.publisher}</h1>
                      <h1 className='text-sm font-karma tracking-wider'>Credential: {i.credential}</h1>
                    </div>
                    <div className='flex justify-end'>
                      <a href={i.path} target="_blank"><button className='bg-white text-black px-4 py-0.5 rounded-xl text-sm font-kaushan'>See Certificate</button></a>
                    </div>
                  </div>
                </div>
              ))
            }

          </div>
          <div className='flex justify-center'>
            <button onClick={handleSeeMore} className={`${seeMore ? "bg-myRed-600 text-white" : "bg-white text-black"} px-10 py-1 rounded-xl font-kaushan`}>{seeMore ? "See Less" : "See More"}</button>
          </div>
        </section>
    )
}

export default Certificate_mobile;