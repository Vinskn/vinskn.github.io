import { useEffect, useState } from "react";
import Project_popup from "../utils/projectPopupDesktop";
import axios from 'axios';

const Project_mobile = () => {
  const [isVisible, setVisible] = useState("");
    const [loadMore, setLoadMore] = useState(false);
    const [prjData, setPrjData] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleLoadMore = () => {
        setLoading(true);
        if (!loadMore){
            axios.get('http://fi4.bot-hosting.net:21303/api/PortofolioV2/Project-Part')
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
        <section id='project' className='mt-15'>
          <h1 className='text-3xl font-kaushan font-bold'>My Projects</h1>
          <div className='mt-5'>
            <div className='bg-red-700/25 p-3 rounded-3xl mb-4'>
              <h1 className='text-xl font-bold font-kaushan mb-1'>NAVA System</h1>
              <p className='font-light text-xs text-justify font-karma'>NAVA System is a unified name for all the products I create, representing a collection of innovative solutions built with a focus on functionality and efficiency. Each project under the NAVA System embodies my commitment to quality and continuous improvement.</p>
              
            </div>

            <div className='bg-red-700/25 p-3 rounded-3xl mb-4'>
              <h1 className='text-xl font-bold font-kaushan mb-1'>Recollection: Student Trading Note App</h1>
              <p className='font-light text-xs text-justify font-karma'>Recollection: Student Trading Note App is my first application developed using Python and the Kivy framework. This app provides a platform for students to buy and sell study notes, making it easier to access and share valuable learning resources.</p>
              <div className='flex justify-between mt-4'>
                <div className='text-xl grid grid-cols-10 gap-3 w-7/10'>
                  <i class="devicon-python-plain"/>
                  <i class="devicon-numpy-plain"></i>
                  <i class="devicon-pandas-plain"></i>
                </div>
                <a href="#" className='bg-white hover:bg-gray-200 text-black px-5 rounded-4xl font-kaushan'><button>See Project</button></a>
              </div>
            </div>

            <div className='bg-red-700/25 p-3 rounded-3xl mb-4'>
              <h1 className='text-xl font-bold font-kaushan mb-1'>ZooSphere: Zoo Website</h1>
              <p className='font-light text-xs text-justify font-karma'>ZooSphere is a zoo website that provides information about animals, ticket prices, and the zoo's history. One of its key features is a ticket generation system that creates unique codes and QR codes, which are stored in a database. Additionally, the admin dashboard allows ticket price adjustments and access to sold ticket records. The website is built using React, with supporting libraries such as Express, Redux, and Random. It uses MongoDB for database management, while Node.js serves as the API provider connecting the frontend and backend.</p>
              <div className='flex justify-between mt-4'>
                <div className='text-xl grid grid-cols-10 gap-3 w-7/10'>
                  <i class="devicon-python-plain"/>
                  <i class="devicon-pandas-plain"></i>
                  <i class="devicon-babel-plain"></i>
                </div>
                <a href="#" className='bg-white hover:bg-gray-200 text-black px-5 rounded-4xl font-kaushan'><button>See Project</button></a>
              </div>
            </div>

            {
              loading ? (<p>Loading</p>) :
              prjData.map((i) => (
                <div className='bg-red-700/25 p-3 rounded-3xl mb-4'>
                  <h1 className='text-xl font-bold font-kaushan mb-1'>{i.prjName}</h1>
                  <p className='font-light text-xs text-justify font-karma'>{i.prjDesc}</p>
                  <div className='flex justify-between mt-4'>
                    <div className='text-xl grid grid-cols-10 gap-3 w-7/10'>
                      {
                        i.progIcn.map((y) => (
                          <i class={y}/>
                        ))
                      }
                    </div>
                    <a href="i.linkPrj" className='bg-white hover:bg-gray-200 text-black px-5 rounded-4xl font-kaushan'><button>See Project</button></a>
                  </div>
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

export default Project_mobile;