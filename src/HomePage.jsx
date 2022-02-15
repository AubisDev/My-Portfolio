import React, { useEffect, useState } from 'react'
import AboutMe from './Components/AboutMe/AboutMe'
import ContactSection from './Components/ContactSection/ContactSection'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import ProjectSection from './Components/ProjectSection/ProjectSection'
import SkillsSection from './Components/SkillsSection/SkillsSection'

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
        let showAboutMeHeight = 400;
        let showSkillsHeight = 960;
        let showProjectsHeight = 1600;
        let showContactHeight = 2600;
        let showFooterHeight = 3000;
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
        <div className='w-screen '>
            <header className='w-full h-screen ' id='home'>
                <Header/>
            </header>
           
            <main>
                <section className='w-full h-screen ' id='about'>
                    {aboutMeVisible && <AboutMe /> }
                </section>
        
                <section className='wfull h-screen' id='skills'>
                    { SkillsVisible &&  <SkillsSection /> }
                </section>
                <section className={`w-full ${ projectsVisible ? 'h-auto' : 'h-screen' }`} id='projects'>
                    { projectsVisible && <ProjectSection/> }
                </section>
                <section className='w-full h-screen ' id='contact'>
                    { contactVisible && <ContactSection/> }
                </section>
            </main>
            <section className='w-full h-[20vh] bg-sky-900'>
                { footerVisible && <Footer/> }
            </section>
        </div>
    )
}

export default HomePage
