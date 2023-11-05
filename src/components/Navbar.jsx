import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from "../assets/logo1.png";
import {Link} from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-8 bg-[#cbb9f7] text-black'>
        <div>
            <img src={Logo} alt="Logo Image" style={{width: '62px'}} />
        </div>

        {/* menu */}
        <div className='hidden md:flex'>
            <ul className='hidden md:flex text-xl gap-3'>
                <li>
                    <Link to='home' smooth={true} duration={500} >Home</Link>
                </li>
                <li>
                    <Link to='about' smooth={true} duration={500} >About</Link>
                </li>
                <li>
                    <Link to='skills' smooth={true} duration={500} >Skills</Link>
                </li>
                <li>
                    <Link to='work' smooth={true} duration={500} >Work</Link>
                </li>
                <li>
                    <Link to='contact' smooth={true} duration={500} >Contact</Link>
                </li>
            </ul>
        </div>

        {/* Hamburger */}
        <div onClick={handleClick} className='absolute top-6 right-6 md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile menu */}
        <div className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#cbb9f7] flex flex-col justify-center items-center'}>
            <ul>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='home' smooth={true} duration={500} >Home</Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='about' smooth={true} duration={500} >About</Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='skills' smooth={true} duration={500} >Skills</Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='work' smooth={true} duration={500} >Work</Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='contact' smooth={true} duration={500} >Contact</Link>
                </li>
            </ul>
        </div>

        {/* social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'
                    style={{background: 'linear-gradient(to right, white 60%, blue 40%'}} >
                    <a className='flex justify-between items-center w-full text-gray-100' 
                        href="https://www.linkedin.com/in/sisiwang242/">
                        <span className='text-black'>LinkedIn</span>
                        <FaLinkedin size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'
                    style={{background: 'linear-gradient(to right, white 60%, #F5F7FA 40%'}} >
                    <a className='flex justify-between items-center w-full text-black-100' 
                        href="https://github.com/Sisi-tech">
                        <span className='text-black'>GitHub</span>
                        <FaGithub size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'
                    style={{background: 'linear-gradient(to right, white 60%, #0074e4 40%'}} >
                    <a className='flex justify-between items-center w-full text-gray-100' 
                        href="sisiwang242@gmail.com">
                        <span className='text-black'>Email</span>
                        <HiOutlineMail size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'
                    style={{background: 'linear-gradient(to right, white 60%, #888888 40%'}} >
                    <a className='flex justify-between items-center w-full text-gray-100' 
                        href="/">
                        <span className='text-black'>Resume</span>
                        <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default Navbar