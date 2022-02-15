import React, { useEffect,  useLayoutEffect, useState } from 'react';
import './ProjectSection.css'
import { getProjectInfo } from './ProjectsInfo';
import ProjectCard from './ProjectCard/ProjectCard';
import { projectsEffects } from '../../utils/gsapEffects';

const ProjectSection = () => {
    
    const [Projects, setProjects] = useState([]);

    useEffect(() => {
      
        setProjects( getProjectInfo );

    }, [setProjects]);


    useLayoutEffect(() => {
        projectsEffects()
    }, [])
                                                    
    const openTag = '<'; 
    const closeTag = '/>';
  return (
    <div className='w-full h- text-slate-200'>
        <div className='w-4/5  max-h-full flex flex-col pt-1 m-auto'>
        <p className='text-3xl font-semibold text-center py-10'>
            <span className='text-orange-600 tag'>{openTag}</span><span className="title text-sky-600">P</span>roject<span className='text-orange-600 tag'>{closeTag}</span>
        </p>

        <div className=' w-full mt-10 grid grid-cols-1  md:grid-cols-2 2xl:grid-cols-3 gap-5 project-container'>
            {Projects.map( project => (
                    <ProjectCard key={project.id} {...project} />
            )  )}
        </div>

        </div>


       
    </div>
  ) 

};

export default ProjectSection;
        