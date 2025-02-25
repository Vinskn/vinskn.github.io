import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';


const Project_popup = (props) => {
    const { pName, pDesc, image, program, link } = props;

    return (
        <div className="absolute z-10 right-10 top-1/2 transform -translate-y-1/2 p-3 bg-myRed-600/70 rounded-3xl w-2/5 backdrop-blur-sm">
            <div className='w-9/10 mx-auto rounded-t-2xl p-4'>
                <Swiper pagination={{dynamicBullets: true}} loop={true} modules={[Pagination]}>
                    {
                        image.map((i, j) => (
                            <SwiperSlide key={j}> <img src={i} alt="" className='rounded-2xl w-8/10 mx-auto'/> </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
            <h1 className='text-center mt-3 font-kaushan text-xl'>{pName}</h1>
            <p className='text-sm font-karma text-justify mt-1 mx-4'>{pDesc}</p>
            <div className='mt-5 mx-4 flex justify-between items-center'>
                <div className='text-lg grid grid-cols-5 w-7/10 gap-3'>
                    {
                        program.map((i, j) => (
                            <i class={i}/>
                        ))
                    }
                    
                </div>
                <a href={link} target='_blank'><button className='text-black bg-white px-5 py-0.5 text-sm rounded-2xl font-kaushan'>See Project</button></a>
            </div>
        </div>
    )
}

export default Project_popup;