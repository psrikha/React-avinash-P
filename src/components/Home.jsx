import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import {useRef} from 'react';
import HTML from '../assets/html.png';
import JS from '../assets/javascript.png';
import css from '../assets/css.png';
import py from '../assets/py.png';
import aws from '../assets/aws.png';
import react from '../assets/react.png';
import sf1 from '../assets/sf1.png';
import tableau from '../assets/tableau.png';
import d3 from '../assets/d3.png';
import pytorch from '../assets/pytorch.png';


const Home = () => {
  const ref = useRef(null);
  return (
    <div name="home" className="w-full h-screen bg-[black]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-4 md:px-8 flex flex-col justify-center h-full">
        <p className="font-bold text-lg sm:text-xl md:text-2xl text-orange-600">
          Hi &#128075;&#127996; I'm,
        </p>
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-[#ccd6f6]">
          PANDU RANGA AVINASH{" "}
          <p className="text-2xl sm:text-4xl md:text-6xl text-orange-600">
            SRIKHAKOLLU
          </p>
        </h1>
        <p className="text-[#8892b0] py-4 text-sm sm:text-base md:text-lg max-w-[700px]">
          A passionate software and data engineer with a love for innovation. I thrive on turning ideas into reality.
          Let's innovate and make a difference in the tech world together.
        </p>
        <div>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="text-white group border-2 px-4 py-2 my-2 flex items-center hover:bg-orange-600 hover:border-orange-600"
          >
            View More
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-2" />
            </span>
          </Link>
        </div>
        <p className="py-4 text-base font-bold text-orange-600">Tech Stack</p>
        <div className="flex items-center justify-between px-4 sm:px-10">
        <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-300'><img className='w-14 md:mr-6' src={py} alt='python' /></div>
        <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-300'><img className='w-14 md:mr-6' src={JS} alt='javascript' /></div>
        <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-300'><img className='w-14 md:mr-6' src={react} alt='react' /></div>
        <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-300'><img className='w-14 md:mr-6' src={tableau} alt='tableau' /></div>
        <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-300'><img className='w-14 md:mr-6' src={d3} alt='d3'/></div>
        </div>
        <div className='py-8 flex items-center justify-between px-10'>
        <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-300'><img className='w-14 md:mr-6' src={HTML} alt='HTML' /></div>
        <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-300'><img className='w-14 md:mr-6' src={css} alt='CSS' /></div>
        <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-300'><img className='w-14 md:mr-6' src={aws} alt='AWS' /></div>
        <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-300'><img className='w-14 md:mr-6' src={sf1} alt='Salesforce' /></div>
        <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-300'><img className='w-14 md:mr-6' src={pytorch} alt='pytorch' /></div>
        </div>
      </div>
    </div>
  );
};


export default Home;
