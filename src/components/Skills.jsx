import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import react from '../assets/react.png';
import Python from '../assets/python.png';
import GitHub from '../assets/github.png';
import tailwindCSS from '../assets/tailwindCSS.png';
import Django from '../assets/django.png';

const Skills = () => {
  return (
    <div name='skills' className='skills w-full h-auto bg-[#e5ddf4]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-purple-800'>Skills</p>
                <p className='py-6 text-xl'>These are the technologies I've worked with.</p>
            </div>
            {/* HTML */}
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8'>
                <div className='shadow-md shadow-[#cbb9f7] hover:scale-110 duration-500 pt-2 pb-2'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML Icon" />
                    <p className='my-2'>HTML</p>
                </div>
            {/* CSS */}
                <div className='shadow-md shadow-[#cbb9f7] hover:scale-110 duration-500 pt-2 pb-2'>
                    <img className='w-20 mx-auto' src={CSS} alt="CSS Icon" />
                    <p className='my-2'>CSS</p>
                </div>
            {/* Tailwind CSS */}
                <div className='shadow-md shadow-[#cbb9f7] hover:scale-110 duration-500 pt-2 pb-2'>
                    <img className='w-20 mx-auto' src={tailwindCSS} alt="tailwindCSS Icon" />
                    <p className='my-2'>Tailwind CSS</p>
                </div>
            {/* JavaScript */}
                <div className='shadow-md shadow-[#cbb9f7] hover:scale-110 duration-500 pt-2 pb-2'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript Icon" />
                    <p className='my-2'>JavaScript</p>
                </div>
            {/* React */}
                <div className='shadow-md shadow-[#cbb9f7] hover:scale-110 duration-500 pt-2 pb-2'>
                    <img className='w-20 mx-auto' src={react} alt="React Icon" />
                    <p className='my-2'>React</p>
                </div>
            {/* Python */}
                <div className='shadow-md shadow-[#cbb9f7] hover:scale-110 duration-500 pt-2 pb-2'>
                    <img className='w-20 mx-auto' src={Python} alt="Python Icon" />
                    <p className='my-2'>Python</p>
                </div>
            {/* Django */}
                <div className='shadow-md shadow-[#cbb9f7] hover:scale-110 duration-500 pt-2 pb-2'>
                    <img className='w-20 mx-auto' src={Django} alt="Django Icon" />
                    <p className='my-2'>Django</p>
                </div>
            {/* GitHub */}
                <div className='shadow-md shadow-[#cbb9f7] hover:scale-110 duration-500 pt-2 pb-2'>
                    <img className='w-20 mx-auto' src={GitHub} alt="GitHub Icon" />
                    <p className='my-2'>GitHub</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills