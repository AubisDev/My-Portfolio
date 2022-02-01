import gsap from 'gsap/all'
import React, { useEffect, useState } from 'react'
import AboutMe from './Components/AboutMe/AboutMe'
import ContactSection from './Components/ContactSection/ContactSection'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import ProjectSection from './Components/ProjectSection/ProjectSection'
import TechSection from './Components/TechSection/TechSection'

const HomePage = () => {

    const [aboutMeVisible, setAboutMeVisible] = useState(false);
    const [SkillsVisible, setSkillVisible] = useState(false);
    const [projectsVisible, setprojectsVisible] = useState(false);
    const [contactVisible, setContactVisible] = useState(false);
    const [footerVisible, setFooterVisible] = useState(false);
    
    const [height, setHeight] = useState(0);
    


    useEffect(() => {   
        window.addEventListener("scroll", listenToScroll);
        return () => 
           window.removeEventListener("scroll", listenToScroll); 
      }, [])


      const listenToScroll = () => {
        let showAboutMeHeight = 350;
        let showSkillsHeight = 960;
        let showProjectsHeight = 1600;
        let showContactHeight = 2600;
        let showFooterHeight = 3250;
        const winScroll = document.body.scrollTop || 
            document.documentElement.scrollTop;
        setHeight(winScroll);
    
        if ( winScroll > showAboutMeHeight) {  
            setAboutMeVisible(true)

        }
        if ( winScroll > showSkillsHeight) {  
            setSkillVisible(true)
        }
        if ( winScroll > showProjectsHeight) {  
            setprojectsVisible(true)
        }
        if ( winScroll > showContactHeight) {  
            setContactVisible(true)
        }
        if( winScroll > showFooterHeight ){
            setFooterVisible( true )
        }
      }


    return (
        <div>
            <section className='w-screen h-screen '>
                <Header/>
            </section>
           
               
            <section className='w-screen h-screen '>
                {aboutMeVisible && <AboutMe />
                }
            </section>
    
            <section className='w-screen h-screen'>
                { SkillsVisible &&  <TechSection /> }
            </section>
            <section className={`w-screen ${ projectsVisible ? 'h-auto' : 'h-screen' } `}>
                { projectsVisible && <ProjectSection/> }
            </section>
            <section className='w-screen h-screen '>
                { contactVisible && <ContactSection/> }
            </section>
            <section className='w-screen h-[30vh] bg-sky-900'>
                { footerVisible && <Footer/> }
            </section>
        </div>
    )
}

export default HomePage
