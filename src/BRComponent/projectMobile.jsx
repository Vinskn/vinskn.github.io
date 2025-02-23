const Project_mobile = () => {



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
              <h1 className='text-xl font-bold font-kaushan mb-1'>Tristar Invoice Generator</h1>
              <p className='font-light text-xs text-justify font-karma'>Tristar Invoice Generator is a Python-based application built with the Kivy framework, utilizing libraries such as Pandas, Webbrowser, FPDF, and Babel. Its primary function is to generate invoices based on user input, producing a ready-to-print PDF document efficiently.</p>
              <div className='flex justify-between mt-4'>
                <div className='text-xl grid grid-cols-10 gap-3 w-7/10'>
                  <i class="devicon-python-plain"/>
                  <i class="devicon-pandas-plain"></i>
                  <i class="devicon-babel-plain"></i>
                </div>
                <a href="#" className='bg-white hover:bg-gray-200 text-black px-5 rounded-4xl font-kaushan'><button>See Project</button></a>
              </div>
            </div>
               
          </div>
          <div className='flex justify-center'>
            <a href="#"><button className='bg-white hover:bg-gray-200 text-black px-10 py-1 rounded-xl font-kaushan'>Load More</button></a>
          </div>
        </section>
    )
}

export default Project_mobile;