import React, { useLayoutEffect, useState } from 'react';
import './ProjectSection.css'
import { getProjectInfo } from './ProjectsInfo';
import ProjectCard from './ProjectCard/ProjectCard';
import newID from '../../utils/createId';
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
        <div className='w-4/5 max-h-full flex flex-col pt-1 m-auto'>
        <p className='text-3xl font-semibold text-center py-10'>
            <span className='text-orange-600 tag'>{openTag}</span><span className="title text-sky-600">Projects </span><span className='text-orange-600 tag'>{closeTag}</span>
        </p>

        <div className='h-full w-full project-container'>
            {Projects.map( project => (
                <div key={ newID() } className='w-full h-full mb-16 project'>
                    <ProjectCard key={project.id} {...project} />
                </div>
            )  )}
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
        