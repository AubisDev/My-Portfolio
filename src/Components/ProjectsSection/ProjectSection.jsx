
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import gsap, { Power2 } from 'gsap/all';
import React, { useEffect, useState } from 'react';
import {getTechs} from './TechLogos'




const ProjectSection = () => {

    const timeline = gsap.timeline({
        defaults:{
            y: 100,
            x: -100,
            duration: 0.5,
            opacity:0

        }
    })


    const [ Technologies, setTechnologies ] = useState([]);


    useEffect(() => {
        setTechnologies( getTechs() );
        const techItems = document.querySelectorAll('.item');

        gsap.from(techItems, { ease:Power2.easeInOut, stagger: 0.2, y: 100,
            x: -100,
            duration: 0.5,
            opacity:0 } )


    }, [setTechnologies]);
    

  return (
    <div className='w-full h-full bg-gray-900'>
        <div className='w-4/5 text-slate-200 m-auto'>
            <p className='text-center text-3xl font-body font-semibold pt-14'><span className='text-orange-600'>T</span>echnologies</p>
            <div className='w-full grid grid-cols-3 gap-5 m-auto mt-10'>
                    {Technologies.map( tech => (
                        
                        
                        <div key={tech.id} className='w-full h-full flex-col m-2 flex items-center group item'>
                                
                                {(tech.name === 'Tailwind CSS' || tech.name === 'TypeScript') ? <img src={tech.image} alt={tech.name} className='h-12 w-12 drop-shadow-items-logo'/> : <FontAwesomeIcon icon={tech.image} size='3x' className={`${ tech.color } sm:grayscale sm:hover:grayscale-0 drop-shadow-items-logo`} />
                                }
                                <p className='text-xs  sm:group-hover:text-gray-600 font-semibold pt-2 text-gray-300 sm:text-gray-900  '>{tech.name}</p>
                        </div>
                    ) )}
            </div>

        </div>
    </div>
  )
};

export default ProjectSection;
