import { useEffect, useState } from 'react'

import { IconMail, IconTelephone,IconBrandGithub, IconBrandLinkedin, IconBrandInstagram } from 'justd-icons'

import Navbar from './utils/navbar'
import Footer from './utils/footer'
import Home_mobile from './BRComponent/homeMobile';
import Home_desktop from './BRComponent/homeDesktop';
import Project_mobile from './BRComponent/projectMobile';
import Project_desktop from './BRComponent/projectDesktop';
import HoverMenu from './tes';
import Service_mobile from './BRComponent/serviceMobile';
import Service_desktop from './BRComponent/serviceDesktop';
import Certificate_mobile from './BRComponent/certifMobile';
import Certificate_desktop from './BRComponent/certifDesktop';

function App() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

  return (
    <div>
      <div className='text-white w-11/13 mx-auto p-5'>
        <Navbar/>
        {isMobile ? <Home_mobile/> : <Home_desktop/>}

        {isMobile ? <Project_mobile/> : <Project_desktop/>}

        {isMobile? <Service_mobile/> : <Service_desktop/>}

        {isMobile? <Certificate_mobile/> : <Certificate_desktop/>}

        <section id='contact' className='mt-15'>
          <h1 className='text-4xl mb-4 font-kaushan font-bold'>Reach Me!</h1>
          <input type="text" placeholder='Your Name, eg: John Doe' className='bg-red-800/40 p-3 w-9/10 mb-3 rounded-xl py-1 font-kaushan tracking-wider'/>
          <input type="email" placeholder='Your Email, eg: john@mail.com' className='bg-red-800/40 p-3 w-9/10 mb-3 rounded-xl py-1 font-kaushan tracking-wider'/>
          <textarea name="" id="" placeholder='Your Message Here!' className='bg-red-800/40 p-3 w-9/10 mb-3 h-25 rounded-xl py-1 font-kaushan tracking-wider'/>
          <div className='flex justify-center'>
            <button className='bg-white text-black px-20 py-1 rounded-3xl font-kaushan'>Send</button>
          </div>
          <div className='mt-20 flex justify-around'>
            <a href="#"><IconMail className='scale-200'/></a>
            <a href="#"><IconTelephone className='scale-200'/></a>
            <a href="#"><IconBrandGithub className='scale-200'/></a>
            <a href="#"><IconBrandLinkedin className='scale-200'/></a>
            <a href="#"><IconBrandInstagram className='scale-200'/></a>
          </div>
        </section>
      </div>
      <Footer/>
    </div>
  )
}
export default App
