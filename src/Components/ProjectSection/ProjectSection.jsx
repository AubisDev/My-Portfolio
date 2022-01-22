import React from 'react';
import '@splidejs/splide/dist/css/splide.min.css';
import imgsrc from '../../img/project2-4.png'
import imgsrc2 from '../../img/project2-2png.png'
import imgsrc3 from '../../img/project2-3png.png'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './ProjectSection.css'


const ProjectSection = () => {
    

    const openTag = '<'
    const closeTag = '/>'
  return (
    <div className='w-full h-full text-slate-200'>
        <div className='w-4/5 h-full flex flex-col pt-14 m-auto'>
        <p className='text-3xl font-semibold text-center py-10'>
            <span className='text-orange-600 about'>{openTag}</span> <span className='text-sky-600 about'>P</span><span className="about2">rojects </span><span className="about2"> <span className='text-orange-600'>{closeTag}</span></span>
        </p>

        <div className='h-96 w-11/12 m-auto rounded-md shadow-lg shadow-gray-600 bg-sky-600 p-1'>
            <div className='w-full h-68'>
                <img src={imgsrc} alt='imagen1' className='' />  
            </div>

            <div className='w-full h-28 m-auto bg-gradient-to-r from-gray-800 to-gray-900  items-center justify-center flex flex-col font-body shadow-lg shadow-gray-800 '>
                <p className='text-center py-2 font-semibold   '>Bakery shop </p>
                <div className='flex flex-row justify-evenly'>
                    <button className='px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-500 hover:from-orange-600 hover:to-orange-700 shadow-lg'>
                       <FontAwesomeIcon icon={faGithub} />  Github 
                    </button>
                    <button className='px-4 py-2 bg-gradient-to-r from-sky-500 to-sky-600 shadow-lg'>
                        Go to page
                    </button>
                </div>
            </div>
        </div>

        {/* <div className='relative left-0 top-1/4 -mt-16 hover:m-auto w-32 hover:w-4/5 h-40 hover:h-72 bg-green-500 hover:scale-110 hover:z-30 duration-500'>
                </div>
                <div className='relative hover:left-0 left-1/3 top-1/4 -mt-16 hover:m-auto w-32 hover:w-4/5  h-40 hover:h-72 bg-red-600 hover:scale-110 duration-500 hover:z-30'>
                </div>
                <div className='relative hover:left-0 left-2/3 top-1/4 -ml-4 hover:ml-0 -mt-16 w-32 hover:w-full  h-40 hover:h-60 bg-yellow-300 hover:scale-110 duration-1000 hover:z-30'>
        </div> */}

       
 
        </div>


       
    </div>
  ) 

};

export default ProjectSection;
        