
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useLayoutEffect, useState } from 'react';
import { skillsEffects } from '../../utils/gsapEffects';
import {getOthersTechs, getTechs} from './TechLogos'




const SkillsSection = () => {

    const [ Technologies, setTechnologies ] = useState([]);
    const [ studyingTechs, setStudyingTechs ] = useState([]);
    const openTag = '<';
    const closeTag = ' />';

    useLayoutEffect(() => {
        setTechnologies( getTechs() );
        setStudyingTechs( getOthersTechs() );
        skillsEffects();


    }, [setTechnologies]); 
    

  return (
    <div className='w-full h-full bg-gray-900'>

        <div className='w-4/5 text-slate-200 m-auto'>

            <p className='text-center text-3xl font-body font-semibold pt-14 pb-6'>
                <span className='text-sky-600 title2'> <span className='text-orange-600 title'>{openTag}</span> S</span><span className='title2'>kills</span><span className='text-orange-600 title'>{closeTag}</span>
            </p>
            <p className='text-sm  font-body pt-2 text-gray-400 flex justify-center subtitle '>Currently working with</p>

            <div className='w-full grid grid-cols-3 gap-5 m-auto pt-3  '>

                {Technologies.map( tech => (    
                    
                    <div key={tech.id} className='w-full h-full flex-col m-2 flex items-center justify-center group item'>
                            
                            {(tech.name === 'Tailwind CSS' || tech.name === 'TypeScript') ? <img src={tech.image} alt={tech.name} className='h-12 w-12 drop-shadow-items-logo'/> : <FontAwesomeIcon icon={tech.image} size='3x' className={`${ tech.color } sm:grayscale sm:hover:grayscale-0 drop-shadow-items-logo`} />
                            }
                            <p className='text-xs  sm:group-hover:text-gray-600 font-semibold pt-2 text-gray-300 sm:text-gray-900  '>{tech.name}</p>
                    </div>
                ) )}

            </div>
            
            <p className='text-sm font-body pt-10 text-gray-400 flex justify-center subtitle'>Currently learning</p>

            <div className='w-full grid grid-cols-3 gap-5 m-auto pt-5'>

                {studyingTechs.map( tech => (    
                    
                    <div key={tech.id} className='w-full h-full flex-col m-2 flex items-center group item'>
                            
                            {(tech.name === 'Tailwind CSS' || tech.name === 'TypeScript') ? <img src={tech.image} alt={tech.name} className='h-12 w-12  '/> : <FontAwesomeIcon icon={tech.image} size='3x' className={`${ tech.color } sm:grayscale sm:hover:grayscale-0 `} />
                            }
                            <p className='text-xs  sm:group-hover:text-gray-600 font-semibold pt-2 text-gray-300 sm:text-gray-900  '>{tech.name}</p>
                    </div>
                ) )}

            </div>

        </div>
    </div>
  )
};

export default SkillsSection