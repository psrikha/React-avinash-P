import React from 'react';
import { data } from "../data/data.js";


const Projects = () => {

    // projects file
    const project = data;
    //setProject(data);
  
  return (
    // <div name='projects' className='w-full md:h-screen text-gray-300 bg-[black]'>
    <div name='projects' className='w-full py-36 text-gray-300 bg-[black]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-orange-700'>
            Projects
          </p>
          <p className='py-6'>// Check out some of my projects</p>
          <p className='text-2xl fond-bold inline text-gray-200'>Netflix Data Visualization </p><br></br>
          {/* <p className='fond-bold inline text-gray-300'>Tableau, JavaScript, D3.js, HTML, CSS</p> */}
          
          <p className='py-2'>•	Created an interactive web application leveraging HTML, CSS, and JavaScript to deliver impactful visualizations of Netflix's content library, encompassing 10k+ movies and TV shows, offering users country-specific insights, ratings, and user reviews<br></br>
•	Previsualized the data trends using Tableau creating charts and reports<br></br>
•	Embraced version control system practices for collaborative development and project management<br></br></p>
<div className='py-2 flex flex-wrap justify-start items-center px-10'>
          <p className='px-4 border-2 fond-bold inline-block text-orange-600 mr-4 mb-2 rounded-full'>Tableau</p>
          <p className='px-4 border-2 fond-bold inline-block text-orange-600 mr-4 mb-2 rounded-full'>JavaScript</p>
          <p className='px-4 border-2 fond-bold inline-block text-orange-600 mr-4 mb-2 rounded-full'>D3.js</p>
          <p className='px-4 border-2 fond-bold inline-block text-orange-600 mr-4 mb-2 rounded-full'>HTML</p>
          <p className='px-4 border-2 fond-bold inline-block text-orange-600 mr-4 mb-2 rounded-full'>CSS</p></div><br></br>
{/* <p className='text-2xl fond-bold inline text-gray-200'>Goodreads EDA (Exploratory Data Analysis) and Visualization </p><br></br>
          <p className='fond-bold inline text-gray-300'>Python, Matplotlib, Seaborn</p>
          <p className='py-2'>•	Conducted comprehensive exploratory data analysis and visualization on a data set of 6000 books from Goodreads using Python, alongside matplotlib and seaborn libraries<br></br>
•	Uncovered valuable insights on average user ratings and reviews, identifying key factors driving book ratings<br></br>
<br></br>
<br></br>
</p> */}
<p className='text-2xl fond-bold inline text-gray-200'>Text/Sign Board Reading Aid for Visually Challenged People</p><br></br>

          <p className='py-2'>•	Developed an image processing model to detect and recognize text from natural scenes and convert it into an audio/speech signal<br></br>
•	Implemented using  key Computer Vision algorithms, including Optical Character Recognition (OCR) and Stroke Width Transform through MATLAB, resulting in a 20% increase in detection accuracy compared to existing methods<br></br>
</p>
<div className='py-2 flex flex-wrap justify-start items-center px-10'>
          <p className='px-4 border-2 fond-bold inline-block text-orange-600 mr-4 mb-2 rounded-full'>MATLAB</p>
          <p className='px-4 border-2 fond-bold inline-block text-orange-600 mr-4 mb-2 rounded-full'>Image Processing</p>
          <p className='px-4 border-2 fond-bold inline-block text-orange-600 mr-4 mb-2 rounded-full'>Audio Signal Processing</p>
</div><br></br>

<p className='text-2xl fond-bold inline text-gray-200'>Video Caption Generation</p><br></br>
          {/* <p className='fond-bold inline text-gray-300'>Python, PyTorch, Machine Learning</p> */}
          <p className='py-2'>• Architected and executed the integration of an LSTM(Long Short-Term Memory) encoder-decoder framework for automatic video caption generation<br></br>
          • Utilized the MSVD dataset of 120k sentences and obtained a BLEU(Bilingual Evaluation Understudy) score metric of 0.610, indicating the similarity of the machine-translated text to a set of high-quality reference translations<br></br>
</p>
<div className='py-2 flex flex-wrap justify-start items-center px-10'>
          <p className='px-4 border-2 fond-bold inline-block text-orange-600 mr-4 mb-2 rounded-full'>PyTorch</p>
          <p className='px-4 border-2 fond-bold inline-block text-orange-600 mr-4 mb-2 rounded-full'>LSTM</p>
          <p className='px-4 border-2 fond-bold inline-block text-orange-600 mr-4 mb-2 rounded-full'>Machine Learning</p></div><br></br>


<p className='text-2xl fond-bold inline text-gray-200'>Pedestrian Detection using OpenCV</p><br></br>
          {/* <p className='fond-bold inline text-gray-300'>Python, Machine Learning and Computer Vision</p> */}
          <p className='py-2'>•	Designed an AI system through python utilizing Haar cascades from OpenCV which is pre-trained on linear SVM model to identify individuals based on geometric features, with applications in autonomous vehicles and surveillance cameras<br></br></p>
<div className='py-2 flex flex-wrap justify-start items-center px-10'>
          <p className='px-4 border-2 fond-bold inline-block text-orange-600 mr-4 mb-2 rounded-full'>Python</p>
          <p className='px-4 border-2 fond-bold inline-block text-orange-600 mr-4 mb-2 rounded-full'>Machine Learning</p>
          <p className='px-4 border-2 fond-bold inline-block text-orange-600 mr-4 mb-2 rounded-full'>AI</p>
          <p className='px-4 border-2 fond-bold inline-block text-orange-600 mr-4 mb-2 rounded-full'>Computer Vision</p>
          </div><br></br>

<p className='text-2xl fond-bold inline text-gray-200'>Fake Review Detection</p><br></br>
          {/* <p className='fond-bold inline text-gray-300'>Python, PyTorch, Machine Learning</p> */}
          <p className='py-2'>•	Constructed a robust machine learning model capable of predicting whether a given product review is deceptive or genuine, achieving an accuracy of over 85%<br></br>
•	Trained the model using a Dataset comprising more than 3000 reviews and implemented utilizing Naïve Bayes and Random Forest algorithms<br></br>
</p>
<div className='py-2 flex flex-wrap justify-start items-center px-10'>
          <p className='px-4 border-2 fond-bold inline-block text-orange-600 mr-4 mb-2 rounded-full'>PyTorch</p>
          <p className='px-4 border-2 fond-bold inline-block text-orange-600 mr-4 mb-2 rounded-full'>Machine Learning</p></div><br></br>
</div>

      </div>
    </div>
  );
};

export default Projects;