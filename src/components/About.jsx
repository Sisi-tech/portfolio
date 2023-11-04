import React from 'react'
import myPic from '../assets/myPic.jpg'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-[#e5ddf4]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-8 grid grid-cols-1 sm:grid-cols-2 gap-8'>
                <div className='pb-4 pr-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-purple-800'>
                        About
                    </p>
                </div>
                {/* <div></div> */}
            </div>
            <div className='max-w-[1000px] w-full grid grid-cols-1 sm:grid-cols-2'>
                    <div className='px-4 pt-3 flex justify-center items-center'>
                        <img src={myPic} className='w-60 h-60 rounded-full' alt="My Picture" />
                    </div>

                    <div className='w-full grid grid-row-2 gap-3 py-4 sm:text-left text-center'>
                        <div className='text-4xl font-bold'>
                            <p>Hi, I'm <span className='text-purple-800'>Sisi</span>, nice to meet you. Please take a look around.</p>
                        </div>
                        <div>
                            <p className='text-xl leading-normal '>
                            I'm a full stack developer passionate about creating seamless digital experiences. With expertise in both front-end (React.js) and back-end (Node.js). My adaptability and continuous learning ensure I stay at the forefront of web development trends, making me a valuable addition to any team looking to transform complex ideas into elegant digital solutions.
                            </p>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default About