import React from 'react'
import AboutMe from './Components/AboutMe/AboutMe'
import Header from './Components/Header/Header'
import ProjectSection from './Components/ProjectsSection/ProjectSection'

const HomePage = () => {


    return (
        <div>
            <div className='w-screen h-screen bg-gray-900'>
                <Header/>
            </div>
            <div className='w-screen h-screen '>
                <AboutMe />
            </div>
            <div className='w-screen h-screen'>
                <ProjectSection />
            </div>
        </div>
    )
}

export default HomePage
