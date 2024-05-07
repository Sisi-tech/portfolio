import React, {useState} from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi';
import {Link} from 'react-scroll';
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import swing from '../assets/swing.gif';

const Home = () => {
  const [mobile, setMobile] = useState(false);
  // const Resume_url = 'https://raw.githubusercontent.com/Sisi-tech/portfolio/main/src/assets/Resume.pdf';

  return (
    <div name='home' className='w-full h-screen bg-[#e5ddf4] flex justify-center align-center items-center pt-10'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full gap-2'>
        <p className='md:text-4xl text-2xl text-purple-800'>Hi, my name is</p>
        <h1 className='text-3xl sm:text-5xl font-bold text-gray-700'>Sisi Wang</h1>
        <h2 className='text-3xl sm:text-5xl font-bold text-gray-800'>I'm a Web Developer.</h2>
        <p className='text-gray-800 py-4 max-w-[700px] text-xl leading-9'>I'm a passionate software engineer with a strong interest in building efficient and scalable software solutions. Currently exploring various technologies and frameworks to expand my skills and knowledge.</p>

        {/* contacts for mobile screen */}
        <div className={!mobile ? 'sm:hidden' : 'flex'}>
          <ul className='flex flex-row justify-left gap-4 pt-4 py-4'>
            <li className='w-[50px] h-[50px] rounded-lg flex justify-center items-center
               bg-[#2b2be4] text-white text-4xl shadow-md shadow-gray-400 hover:scale-110 '>
              <a href='https://www.linkedin.com/in/sisiwang242/'>
                <FaLinkedin />
              </a>
            </li>
            <li className='w-[50px] h-[50px] rounded-lg flex justify-center items-center bg-[#F5F7FA]
               text-black text-4xl shadow-md shadow-gray-400 hover:scale-110'>
              <a href='https://github.com/Sisi-tech'>
                <FaGithub />
              </a>
            </li>
            <li className='w-[50px] h-[50px] rounded-lg flex justify-center items-center bg-[#0074e4]
               text-white text-4xl shadow-md shadow-gray-400 hover:scale-110'>
              <a href='mailto:sisiwang242@gmail.com'>
                <HiOutlineMail />
              </a>
            </li>
            <li className='w-[50px] h-[50px] rounded-lg flex justify-center items-center bg-[#888888]
               text-white text-4xl shadow-md shadow-gray-400 hover:scale-110'>
              <a href="https://raw.githubusercontent.com/Sisi-tech/portfolio/main/src/assets/Sisi_Resume.pdf" download="Resume.pdf">
                <BsFillPersonLinesFill /> 
              </a>
            </li>
          </ul>
        </div>
        {/* button */}
        <Link to="work" smooth={true} duration={400} className='cursor-pointer'>
          <button className='border-2 group border-purple-800 hover:bg-[#cbb9f7] hover:border-[#cbb9f7] hover:text-white px-5 py-3 my-2 flex items-center rounded-md' style={{ zIndex: 1}}>
              View Work 
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 text-xl'/>
            </span>
          </button>
        </Link>

        <div className='swing absolute transform right-0 bottom-0 pl-20'> 
          <img src={swing} width="50%" className='w-[70%]' />
        </div>

      </div>
        
    </div>
  )
}

export default Home