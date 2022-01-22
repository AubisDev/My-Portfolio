import gsap from 'gsap/all'
import React from 'react'
import AboutMe from './Components/AboutMe/AboutMe'
import Header from './Components/Header/Header'
import ProjectSection from './Components/ProjectSection/ProjectSection'
import TechSection from './Components/TechSection/TechSection'

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
                <TechSection />
            </div>
            <div className='w-screen h-screen bg-gray-900'>
                <ProjectSection/>
            </div>
        </div>
    )
}

export default HomePage
