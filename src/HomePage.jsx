import gsap from 'gsap/all'
import React from 'react'
import AboutMe from './Components/AboutMe/AboutMe'
import ContactSection from './Components/ContactSection/ContactSection'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import ProjectSection from './Components/ProjectSection/ProjectSection'
import TechSection from './Components/TechSection/TechSection'

const HomePage = () => {


    return (
        <div>
            <section className='w-screen h-screen '>
                <Header/>
            </section>
            <section className='w-screen h-screen '>
                <AboutMe />
            </section>
            <section className='w-screen h-screen'>
                <TechSection />
            </section>
            <section className='w-screen h-auto '>
                <ProjectSection/>
            </section>
            <section className='w-screen h-screen '>
                <ContactSection/>
            </section>
            <section className='w-screen h-[30vh] bg-sky-900'>
                <Footer/>
            </section>
        </div>
    )
}

export default HomePage
