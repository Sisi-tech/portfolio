import React, {useState} from 'react'
import {Link} from 'react-scroll'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Contact = () => {
  const [mobile, setMobile] = useState(false);
  return (
    <div name='contact' className='w-full h-screen bg-[#e5ddf4] flex flex-col justify-center items-center p-4 gap-4'>
      <form method='POST' action='https://getform.io/f/447062fc-e66f-4e67-917f-2a33187594ae' className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-5 '>
          <p className='text-4xl border-b-4 border-purple-800 inline'>Contact</p>
          <p className='py-4'>Submit the form below or shoot me an email:</p>
          <p className='sm:flex text-purple-800 hover:scale-125 hover:transform origin-left'>sisiwang242@gmail.com</p>
        </div>
        <input type="text" placeholder='Name' name='name' className='p-2 rounded-sm' />
        <input type="email" placeholder='Email' name='email' className='my-4 p-2 rounded-sm'/>
        <textarea className='p-2 rounded-lg'name='message' rows='8' />
        <button className='px-3 py-3 my-8 mx-auto flex items-center border-2 border-purple-600 rounded-full hover:bg-purple-600
           hover:border-purple-600 shadow-md shadow-gray-400'>
          Let's Collaborate
        </button>
      </form>
      {/* contacts icons */}
      <div className={!mobile ? 'sm:hidden' : 'flex'}>
            <ul className='flex flex-row justify-left gap-6 pt-4 py-4'>
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
                <a href='sisiwang242@gmail.com'>
                  <HiOutlineMail />
                </a>
              </li>
              <li className='w-[50px] h-[50px] rounded-lg flex justify-center items-center bg-[#888888]
                text-white text-4xl shadow-md shadow-gray-400 hover:scale-110'>
                <a href='/'>
                  <BsFillPersonLinesFill />
                </a>
              </li>
            </ul>
      </div>
      <div className='text-right bottom-0 right-0 m-4'>
        <button>
          <Link to='home' smooth={true} duration={500} >Back to Top</Link>
        </button>
      </div>
    </div>
  )
}

export default Contact