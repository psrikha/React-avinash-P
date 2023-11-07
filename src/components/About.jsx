import React from 'react';
import pic from '../assets/pic.png';
import HTML from '../assets/html.png';
const About = () => {

return (
  <div name='about' className='w-full md:h-screen text-gray-300 bg-[black]'>
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
      <div className='pb-6'>
        <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-orange-700'>
          About
        </p>
      </div>
      {/* <div className='flex items-center justify-between'>
  <img className='w-1/3 md:mr-6' src={pic} alt='Profile Picture' />
  <div className='px-4 max-w-[700px]'>
    <p align="">
    I am a Computer Science graduate student at Clemson University, where I specialize in Data Science and Informatics. My journey as a highly motivated software engineer and data scientist has been defined by a strong passion for cutting-edge technologies, particularly machine learning and computer vision. During my tenure as an Application Development Associate at Accenture, I honed my skills in Salesforce Administration, gaining valuable insights into the software industry and real-time product development through agile methodologies. Through this portfolio, I invite you to explore my projects, experiences, and journey in the realm of technology and innovation.
    </p>
  </div>
</div>   */}

<div className='flex flex-col items-center justify-center'>
  <img className='w-full md:w-1/3 md:mr-6' src={pic} alt='Profile Picture' /><br></br>
  <div className='px-4 max-w-[700px]'>
    <p>
      I am a Computer Science graduate student at Clemson University, specializing in Data Science and Informatics. My journey as a highly motivated software engineer and data scientist has been defined by a strong passion for cutting-edge technologies, particularly machine learning and computer vision. During my tenure as an Application Development Associate at Accenture, I honed my skills in Salesforce Administration, gaining valuable insights into the software industry and real-time product development through agile methodologies. Through this portfolio, I invite you to explore my projects, experiences, and journey in the realm of technology and innovation.
    </p>
  </div>
</div>


      </div>
    </div>
);
};
export default About;
