import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi';


const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#e5ddf4]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full gap-2'>
        <p className='text-xl sm:text-4xl text-purple-800'>Hi, my name is</p>
        <h1 className='text-3xl sm:text-6xl font-bold text-gray-700'>Sisi Wang</h1>
        <h2 className='text-3xl sm:text-6xl font-bold text-gray-800'>I'm a Full Stack Developer.</h2>
        <p className='text-gray-800 py-4 max-w-[700px]'>I'm a full-stack developer specializing in building (and occasionally designing) exceptional digital experiences.
          Currently, I'm focused on building responsive full-stack web applications.
        </p>
        <div>
          <button className='border-2 group border-purple-800 hover:bg-[#cbb9f7] hover:border-[#cbb9f7] hover:text-white px-5 py-3 my-2 flex items-center rounded-md'>
            View Work 
            <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3 text-xl'/>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home