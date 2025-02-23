import { IconMail, IconTelephone,IconBrandGithub, IconBrandLinkedin, IconBrandInstagram } from 'justd-icons'

const Home_mobile = () => {
    return(
        <>
            <section id='Home' className='bg-myRed-400 p-5 rounded-t-2xl'>
                <img src="./profile-pic.png" alt="profilPhoto" className='w-2/3 rounded-t-2xl mx-auto'/>
                <div className='mt-2 bg-myRed-600/90 pt-10 pb-16'>
                    <h1 className='text-center text-3xl font-kaushan'>Sinamo Kevin Nathanael</h1>
                    <h1 className='font-karma text-center text-2xl'>Software Engineer</h1>
                    <p className='px-4 pt-2 font-karma text-justify text-sm'>A full-stack web and app developer with expertise in React, Node.js, and modern technologies. Passionate about building seamless digital experiences, continuously learning, and exploring AI and machine learning to create impactful solutions.</p>
                </div>

                <div className='bg-white/20 mt-4 rounded-b-2xl p-2 w-full font-kaushan pt-8'>
                    <div className='flex justify-around'>
                        <a href="#" className='bg-myRed-400 hover:bg-redBg-2 px-12 py-1 rounded-3xl'><button>Project</button></a>
                        <a href="#" className='bg-myRed-400 hover:bg-redBg-2 px-12 py-1 rounded-3xl'><button>Services</button></a>
                    </div>
                    <a href="#" className='block text-center'><button className='text-black bg-white hover:bg-gray-300 w-4/5 mt-4 py-1 rounded-3xl'>Download CV</button></a>

                    <div className='flex justify-around mt-10 mb-10'>
                        <a href=""> <IconMail className='scale-150 text-black bg-gray-200 rounded-full w-6 h-6 p-1'/> </a>
                        <a href=""> <IconTelephone className='scale-150 text-black bg-gray-200 rounded-full w-6 h-6 p-1'/> </a>
                        <a href=""> <IconBrandGithub className='scale-150 text-black bg-gray-200 rounded-full w-6 h-6 p-1'/> </a>
                        <a href=""> <IconBrandLinkedin className='scale-150 text-black bg-gray-200 rounded-full w-6 h-6 p-1'/> </a>
                    </div>
                </div>
            </section>

            <section id='skill_lang' className='bg-myRed-600 p-5 mt-5 rounded-b-2xl'>
                <div>
                    <h1 className='text-3xl tracking-widest text-center font-kaushan font-bold'>Skills</h1>
                    <div className='mt-7 mb-6 grid grid-cols-4 gap-5 justify-items-center text-2xl'>   
                        <i class="devicon-javascript-plain"></i>    
                        <i class="devicon-python-plain"/>
                        <i class="devicon-cplusplus-plain"></i>   
                        <i class="devicon-kotlin-plain"></i>
                        <i class="devicon-html5-plain-wordmark"></i>
                        <i class="devicon-css3-plain-wordmark"></i>
                        <i class="devicon-bootstrap-plain"></i>
                        <i class="devicon-tailwindcss-original"></i>
                        <i class="devicon-react-original"></i>
                        <i class="devicon-express-original"></i>
                        <i class="devicon-nodejs-plain-wordmark"></i>
                        <i class="devicon-keras-plain"></i>
                        <i class="devicon-tensorflow-original"></i>
                        <i class="devicon-django-plain"></i>
                        <i class="devicon-mysql-original"></i>
                        <i class="devicon-mongodb-plain-wordmark"></i>
                    </div>
                    <p className='text-sm font-light'>Visit the projects section to see the work done with this technologies</p>
                </div>

                <div className='mt-8 border-t-2 border-red-600'>
                    <h1 className='text-3xl tracking-widest text-center mt-5 font-kaushan font-bold'>Languages</h1>

                    <div className='mt-3 w-4/5 mx-auto mb-10'>
                        <p className="text-white text-sm font-light mb-1">Indonesian (Native Speaker)</p>
                        <div className='w-full bg-white rounded-full h-3 mb-5'>
                            <div className='bg-red-700 h-3 rounded-full w-98/100'></div>
                        </div>
                        <p className="text-white text-sm font-light mb-1">English</p>
                        <div className='w-full bg-white rounded-full h-3 mb-5'>
                            <div className='bg-red-700 h-3 rounded-full w-75/100'></div>
                        </div>
                        <p className="text-white text-sm font-light mb-1">Japanese</p>
                        <div className='w-full bg-white rounded-full h-3 mb-5'>
                            <div className='bg-red-700 h-3 rounded-full w-30/100'></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home_mobile;