import gsap from 'gsap/all'
import React from 'react'
import AboutMe from './Components/AboutMe/AboutMe'
import ContactSection from './Components/ContactSection/ContactSection'
import Header from './Components/Header/Header'
import ProjectSection from './Components/ProjectSection/ProjectSection'
import TechSection from './Components/TechSection/TechSection'

const HomePage = () => {


    return (
        <div>
            <section className='w-screen h-screen bg-gray-900'>
                <Header/>
            </section>
            <section className='w-screen h-screen '>
                <AboutMe />
            </section>
            <section className='w-screen h-screen'>
                <TechSection />
            </section>
            <section className='w-screen h-auto bg-gray-900'>
                <ProjectSection/>
            </section>
            <section className='w-screen h-screen bg-gray-900'>
                <ContactSection/>
            </section>
        </div>
    )
}

export default HomePage
