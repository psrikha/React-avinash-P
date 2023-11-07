import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-black text-gray-300'>
      
      <ul className='hidden md:flex'>
        <li>
          <Link to='home' smooth={true} duration={500}>
            <span className="icon2 ">Home</span> 
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} offset={-50} duration={500}>
          <span className="icon2">About</span>
          </Link>
        </li>
        <li>
          <Link to='projects' smooth={true} offset={50} duration={500}>
          <span className="icon2">Projects</span>
          </Link>
        </li>
        <li>
          <Link to='work' smooth={true} offset={-100} duration={500}>
          <span className="icon2">Work</span>
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} offset={100} duration={500}>
          <span className="icon2">Contact</span>
          </Link>
        </li>
      </ul>
      {/* <div>
        <img src={Logo} alt='Logo Image' style={{ width: '200px' }} />
      </div> */}
      <ul className='hidden md:flex'>
    <li className='w-[140px] ml-auto'>
      <a className='flex justify-between items-center text-gray-300 icon' href='https://www.linkedin.com/in/avinashsrikha/'>LinkedIn  
         <FaLinkedin size={30} />
      </a>
    </li>
    <li className='w-[130px] ml-auto'>
      <a className='flex justify-between items-center text-gray-300 icon1' href='https://github.com/psrikha'>GitHub
        <FaGithub size={30} />
      </a>
    </li>
    <li className='w-[130px] ml-auto'>
      <a className='flex justify-between items-center text-gray-300 icon3' href='https://drive.google.com/file/d/1D7YNuYrZIaYNPs_9VVny6Y5IdM-DWhUz/view?usp=drive_link'>
        Resume <BsFillPersonLinesFill size={25} />
      </a>
    </li>
  </ul>
      {/* menu */}

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
  className={
    !nav
      ? 'hidden'
      : 'absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center'
  }
>
  <li className='py-6 text-4xl'>
    <Link onClick={handleClick} to='home' smooth={true} offset={-100} duration={500}>
      <span className='icon2'>Home</span>
    </Link>
  </li>
  <li className='py-6 text-4xl'>
    <Link onClick={handleClick} to='about' smooth={true} offset={-100} duration={500}>
      <span className='icon2'>About</span>
    </Link>
  </li>
  <li className='py-6 text-4xl'>
    <Link onClick={handleClick} to='projects' smooth={true} offset={-100} duration={500}>
      <span className='icon2'>Projects</span>
    </Link>
  </li>
  <li className='py-6 text-4xl'>
    <Link onClick={handleClick} to='work' smooth={true} offset={-100} duration={500}>
      <span className='icon2'>Work</span>
    </Link>
  </li>
  <li className='py-6 text-4xl'>
    <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
      <span className='icon2'>Contact</span>
    </Link>
  </li>
  <li className='py-6 text-2xl flex items-center justify-center'>
  <a className='text-gray-300 icon mx-5' href='https://www.linkedin.com/in/avinashsrikha/'>
    <FaLinkedin size={35} />
  </a>
  <a className='text-gray-300 icon1 mx-5' href='https://github.com/psrikha'>
    <FaGithub size={35} />
  </a>
  <a className='text-gray-300 icon3 mx-5' href='https://drive.google.com/file/d/1xlUAPdXCQSlDpMokGZ-rpJXgTXQFz5e9/view?usp=drive_link'>
    <BsFillPersonLinesFill size={35} />
  </a>
</li>

</ul>

    </div>
  );
};

export default Navbar;
