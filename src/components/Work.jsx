import React from 'react';
import { data } from "../data/data.js";
import clemson from '../assets/clemson.png';
import ACN from '../assets/ACN.png';
import si from '../assets/si.png';
import is from '../assets/is.png';


const Work = () => {

    // projects file
    const project = data;
    //setProject(data);
  
  return (
    // <div name='work' className='w-full md:h-screen text-gray-300 bg-[black]'>
    <div name='work' className='w-full text-gray-300 bg-[black]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-orange-700'>
            Work Experience
          </p>
          <p className='py-6'>// Check out some of my recent work</p>
          <div className='flex items-center justify-start px-6'>
        <div className='px-4 shadow-md shadow-[#040c16] hover:scale-125 duration-300'><a href ="https://www.clemson.edu/index.html"><img className='w-16 md:mr-6' src={clemson} alt='clemson' /></a></div>
        <div className='px-4 shadow-md shadow-[#040c16] hover:scale-125 duration-300'><a href ="https://www.accenture.com"><img className='w-16 md:mr-6' src={ACN} alt='accenture' /></a></div>
        <div className='px-4 shadow-md shadow-[#040c16] hover:scale-125 duration-300'><a href ="https://www.indianservers.com"><img className='w-16 md:mr-6' src={is} alt='indian servers' /></a></div>
        <div className='px-4 shadow-md shadow-[#040c16] hover:scale-125 duration-300'><a href ="https://www.smartinternz.com"><img className='w-16 md:mr-6' src={si} alt='smart internz' /></a></div>
        </div>
<br></br>

        <p className='text-2xl fond-bold inline text-gray-200'>Clemson University</p><br></br>
        <p className='fond-bold inline text-orange-600'>Graduate Academic Assistant (Feb 2023 - present)</p>
        <p className='py-2'>Offering Academic and Lab assistance in MATLAB programming, Engineering Physics and Statistics<br></br>
</p>
        <p className='text-2xl fond-bold inline text-gray-200'>Accenture Solutions Pvt Ltd.</p><br></br>
        <p className='fond-bold inline text-orange-600'>Application Development Associate (Sept 2021 - July 2022)</p>
        <p className='py-2'>•	Spearheaded the development and implementation of Tableau dashboards, applications, and interactive reports for Salesforce CRM infrastructure to align with the business requirements<br></br>
•	Streamlined user data optimization through ETL operations, leveraging Dataloader.io and SOQL for extracting and transforming data from the client's Salesforce org<br></br>
•	Achieved a significant reduction in data retrieval time by 30%, enhancing the speed and accuracy of Salesforce analytics processes<br></br>
•	Optimized data analytics user flows and crafted user centric wireframes for General Electric (GE) Healthcare's Salesforce platform, resulting in a 40% increase in actionable insights<br></br>
•	Collaborated with cross-functional teams to identify and prioritize automation opportunities and provided valuable administrative support to the team<br></br>

</p>
<p className='text-2xl fond-bold inline text-gray-200'>Indian Servers</p><br></br>
          <p className='fond-bold inline text-orange-600'>Machine Learning Intern (Sept 2020 - Nov 2020)</p>
          <p className='py-2'>•	Developed and deployed an AI solution utilizing the K-Nearest Neighbor(KNN) ML algorithm to detect music genres, which achieved a recognition accuracy of 95%<br></br>
•	Applied data science and machine learning algorithms to tackle intricate challenges in areas such as predictive modeling and recommendation systems using pandas, NumPy and Pytorch resulting with a notable 15% improvement in efficiency<br></br>
</p>
<p className='text-2xl fond-bold inline text-gray-200'>Smart Bridge</p><br></br>
          <p className='fond-bold inline text-orange-600'>Web Development and IoT Intern (May 2020 - June 2020)</p>
          <p className='py-2'>•	Engineered a user-friendly web application utilizing Python and Flask to deliver real-time visualizations of soil and weather conditions to farmers<br></br>
•	Leveraged IBM Watson Studio to create impactful data visualization charts, such as line and gauge charts, enabling farmers to analyze and interpret the data
</p>

          
        </div>


      </div>
    </div>
  );
};

export default Work;
