const Service_desktop = () => {
    return (
        <section id='services' className='mt-15'>
            <h1 className="text-4xl font-bold font-kaushan mb-5">Services</h1>
            <div className="flex justify-around">
                <div className="w-1/4 p-4 bg-myRed-600 rounded-2xl py-10">
                    <h1 className="text-center font-kaushan text-xl mb-3">Front-End Development</h1>
                    <p className="text-justify font-karma text-sm">Creating responsive, user-friendly, and intuitive web interfaces that deliver seamless user experiences. Able to efficiently translate existing designs into fully functional websites, ensuring smooth interactions and optimal performance across all devices.</p>
                </div>
                <div className="w-1/4 p-4 bg-myRed-600 rounded-2xl py-10">
                    <h1 className="text-center font-kaushan text-xl mb-3">Back-End Development</h1>
                    <p className="text-justify font-karma text-sm">Developing secure, scalable, and efficient server-side systems to ensure reliable performance and seamless data management. Strong architecture planning and optimized database management guarantee a smooth, high-performing backend tailored to business needs.</p>
                </div>
                <div className="w-1/4 p-4 bg-myRed-600 rounded-2xl py-10">
                    <h1 className="text-center font-kaushan text-xl mb-3">App Development</h1>
                    <p className="text-justify font-karma text-sm">Building high-performance mobile and desktop applications with a focus on functionality, usability, and seamless integration across platforms. Every app is designed for scalability and efficiency, ensuring a smooth user experience and long-term reliability.</p>
                </div>
            </div>
        </section>
    )
}

export default Service_desktop;