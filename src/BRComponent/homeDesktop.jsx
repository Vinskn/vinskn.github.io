const Home_desktop = () => {    
    return (
        <>
            <section id='home' className="flex justify-around">
                <div className="w-1/4">
                    <div className="bg-myRed-600/60 rounded-2xl p-4 pb-5">
                        <h1 className="text-center text-xl font-bold font-kaushan">Get to Know Me</h1>
                        <img src="/Vin's Logo.jpg" alt="profilPhoto" className="w-6/10 mx-auto rounded-2xl mt-4"/>
                        <button className="block mx-auto mt-4 bg-myRed-400 hover:bg-myRed-600 px-8 py-0.5 rounded-4xl font-kaushan text-sm">Download CV</button>
                    </div>
                    <div className="bg-myRed-600/60 rounded-2xl p-4 mt-5 pb-7">
                        <h1 className="text-center text-xl font-bold font-kaushan tracking-wider">Skills</h1>
                        <div className="grid grid-cols-4 gap-3 justify-items-center mt-4 mb-8 text-xl">
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
                        <p className='text-sm font-extralightlight font-karma'>Visit the projects section to see the work done with this technologies</p>
                    </div>
                </div>

                <div className="bg-myRed-400/85 w-1/3 rounded-2xl py-7">
                    <img src="/profile-pic.png" alt="profilPhoto" className="w-7/10 mx-auto rounded-t-2xl"/>
                    <div className="mt-10 p-3 bg-white/15 w-7/10 mx-auto rounded-2xl">
                        <h1 className="text-center text-3xl font-kaushan">Sinamo Kevin</h1>
                        <h1 className="text-center text-xl font-kaushan">Nathanael</h1>
                        <div className="my-5 mt-15 flex justify-around">
                            <a href="#"><button className="bg-myRed-600/95 hover:bg-redBg-2 px-5 py-1 rounded-2xl font-kaushan">Projects</button></a>
                            <a href="#"><button className="bg-white hover:bg-gray-300 px-5 py-1 rounded-2xl text-black font-kaushan">Services</button></a>
                        </div>
                    </div>
                </div>

                <div className="w-1/4 bg-myRed-600/60 rounded-2xl p-4 mt-3">
                    <img src="/NAVA.png" alt="profilPhoto" className="w-6/10 mx-auto rounded-t-2xl mb-5"/>
                    <h1 className="text-center text-2xl font-bold font-kaushan">Software Engineer</h1>
                    <p className='px-4 pt-2 text-justify text-xs font-karma'>A full-stack web and app developer with expertise in React, Node.js, and modern technologies. Passionate about building seamless digital experiences, continuously learning, and exploring AI and machine learning to create impactful solutions.</p>
                    <div className='mt-8 border-t-1 border-red-600'>
                        <h1 className='text-center text-2xl font-bold font-kaushan'>Languages</h1>
                        <div className='mt-3 w-4/5 mx-auto mb-5'>
                            <p className="text-white text-xs font-light mb-1">Indonesian (Native Speaker)</p>
                            <div className='w-full bg-white rounded-full h-2 mb-3'>
                                <div className='bg-red-700 h-2 rounded-full w-98/100'></div>
                            </div>
                            <p className="text-white text-xs font-light mb-1">English</p>
                            <div className='w-full bg-white rounded-full h-2 mb-3'>
                                <div className='bg-red-700 h-2 rounded-full w-75/100'></div>
                            </div>
                            <p className="text-white text-xs font-light mb-1">Japanese</p>
                            <div className='w-full bg-white rounded-full h-2 mb-3'>
                                <div className='bg-red-700 h-2 rounded-full w-30/100'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home_desktop;