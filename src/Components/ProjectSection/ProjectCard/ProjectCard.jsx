import React from 'react';import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
const ProjectCard = ({ name, imageUrl, githubUrl, liveUrl}) => {


    const cardContentContainer = 'h-3/5 w-11/12 m-auto rounded-md shadow-md shadow-sky-500 bg-gradient-to-tl via-purple-600 from-sky-600 to-orange-700 p-1 group transition ease-in-out'
    const cardContentStyles = 'w-full h-1/4 opacity-0 flex flex-col bg-black/90  items-center justify-center  font-body -mt-[80px] relative bottom-0  rounded-t-lg group-hover:opacity-90 group-hover:duration-300 group-hover:transition group-hover:ease-in-out ';


    return (
        <div className={cardContentContainer}>
            <div className='w-full h-full '>
                <img src={imageUrl} alt='imagen1' className='max-h-full w-full grayscale group-hover:grayscale-0 ' /> 
                <div className={cardContentStyles}>
                    <p className='text-center py-2 font-semibold  '>{name} </p>
                    <div className='flex flex-row justify-evenly  bottom-0'>
                        <a href={githubUrl} target='_blank' className='px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg t'>
                        <FontAwesomeIcon icon={faGithub} />  Github 
                        </a>
                        <a
                            href={liveUrl}
                            className='px-4 py-2 bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 shadow-lg '
                            target='_blank'    
                        >
                            Live <FontAwesomeIcon icon={faDesktop} /> 
                        </a>
                    </div>
                </div> 
            </div>
        </div>
    )
};

export default ProjectCard;
