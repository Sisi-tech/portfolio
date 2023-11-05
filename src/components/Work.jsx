import React, {useState} from 'react'
import RecipeImg from '../assets/RecipeApp.png'
import PendingImg from '../assets/pendingImg.jpg'

const Work = () => {
  const [mobile, setMobile] = useState(false);
  return (
    <div name='work' className='w-full bg-[#e5ddf4]'>
      <div className='max-w-[1000px] max-h-auto mx-auto p-4 flex flex-col justify-center  w-full h-full gap-6'>
        <div className='pb-1'>
          <p className='text-4xl font-bold inline border-b-4 border-purple-800'>Work</p>
          <p className='py-4'>Check out some of my recent work</p>
        </div>

        {/* Project 1 */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 sm:justify-center sm:items-center shadow-lg shadow-[#cbb9f7] px-4 py-4 
          ${!mobile ? 'grid-cols-1' : 'grid-cols-2'}`}>
        <div className='col-span-2 sm:col-span-1'>
          <div className='max-w-[1000px] mx-auto text-center'>
              <div style={{backgroundImage: `url(${RecipeImg})`}}
                className='shadow-lg shadow-[#cbb9f7] group container rounded-md flex justify-center items-center mx-auto content-div'>
                <div className='opacity-0 group-hover:opacity-100'>
                  <span className='text-2xl font-bold text-white tracking-wider'>
                    React JS Application
                  </span>
                  <div className='pt-8 text-center'>
                    <a href="https://food-recipe-app-vite.netlify.app/" >
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                        Demo
                      </button>
                    </a>
                    <a href="https://github.com/Sisi-tech/food-recip-app">
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
        </div>
            <div className='sm:text-left flex flex-col' >
              <h1 className='text-2xl text-purple-800 py-4 '>Recipe Application - React JS</h1>
              <p className='text-[18px] py-4 text-left'>
                Discovering your favorite recipes has never been easier with our React JS Recipe Application. With a simple and intuitive interface, you can search for recipes by entering the name of your desired dish or food. Just type it in and hit 'Enter' to let our app find the perfect recipes for you. Whether you're a culinary enthusiast or just looking for quick and delicious meal ideas, our Recipe Application is your go-to source for a world of culinary inspiration.
              </p>
            </div>
        </div>

        {/* Project 2 */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 sm:justify-center sm:items-center shadow-lg shadow-[#cbb9f7] px-4 py-4 
          ${!mobile ? 'grid-cols-1' : 'grid-cols-2'}`}>
        <div className='col-span-2 sm:col-span-1'>
          <div className='max-w-[1000px] mx-auto text-center'>
              <div style={{backgroundImage: `url(${PendingImg})`}}
                className='shadow-lg shadow-[#cbb9f7] group container rounded-md flex justify-center items-center mx-auto content-div'>
                <div className='opacity-0 group-hover:opacity-100'>
                  <span className='text-2xl font-bold text-white tracking-wider'>
                    Coming Soon 
                  </span>
                  <div className='pt-8 text-center'>
                    <a href="/" >
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                        Demo
                      </button>
                    </a>
                    <a href="/">
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
        </div>
            <div className='sm:text-center flex flex-col' >
              <h1 className='text-2xl text-purple-800 py-4 '>Future Project</h1>
              <p className='text-[18px] py-4 '>
                The new project is coming soon ...
              </p>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Work