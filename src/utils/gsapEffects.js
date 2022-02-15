import gsap,{ Power1, Power2, Power3, Elastic } from "gsap/all";


export function contactEffects () { 
    const Contactcontainer = document.querySelector('.contact-container');
    gsap.fromTo( Contactcontainer, { x:-100, opacity: 0}, {x:0, opacity: 1, duration: 0.5} )
    return
}

export function footerEffects () { 
    const FooterContainer = document.querySelector('.footer');
    gsap.fromTo( FooterContainer, { y:50, opacity: 0}, {y:0, opacity: 1, duration: 0.5, ease: Power2.easeIn}) 
    return
}

export function aboutmeEffects () {
    const timeline = gsap.timeline({
        defaults:{
            opacity: 0,
            duration: 0.5,
        }
    })

    const aboutTitle = document.querySelectorAll('.about');
    const aboutRest = document.querySelectorAll('.about2');
    const text = document.querySelector('.aboutText')
    const text2 = document.querySelector('.aboutText2')
    timeline
        .from( aboutTitle,{ x: -100, stagger: 0.1, })
        .from( aboutRest, { x: -100 , stagger: 0.1,  ease: Power2.easeIn,},   )
        .fromTo( text, { x: -100, y:50, ease: Power2.easeIn},{ x:0, y:0, opacity: 1 })
        .fromTo( text2, { x: 100, y:50, ease: Power3.easeIn},{ x:0, y:0, opacity: 1 })
 
    return
}

export function projectsEffects() { 

    
    const timeline = gsap.timeline({
        defaults:{
            opacity: 0,
            duration: 0.3,
        }
    })

    const projectContainer = document.querySelector('.project-container');
    const Tags = document.querySelectorAll('.tag');
    const SectionTitle = document.querySelector('.title');
    const Projects = document.querySelectorAll('.project');

     timeline
        .from( Tags,{ x: -500, stagger: 0.05, })
        .from( SectionTitle, { x: -500 , stagger: 0.05,  ease: Power2.easeIn},   )
        .from( projectContainer, { ease: Power1.easeIn, } )
        .from( Projects, { x: -100, y:50, ease: Power2.easeIn,  })
    
    return
}

export function headerEffects(){

    const timeline = gsap.timeline({
        defaults:{
            opacity: 0,
            
            ease: Elastic.easeInOut.config(2.5, 1)
        }
    })
    const Titulo = document.querySelector('.titulo');        
    const Titulo1 = document.querySelectorAll('.titulo1');
    const Titulo2 = document.querySelectorAll('.titulo2');
    const Titulo3 = document.querySelectorAll('.titulo3');
    const Menu = document.querySelectorAll('.menu');
    const CV = document.querySelectorAll('.download-cv');
    const aboutSection = document.querySelector('.about-section');


    timeline
        .fromTo( Menu, { x:0},{ x:-100, opacity: 1, ease: Power2.easeInOut, duration : 0.5, })
        .fromTo( CV, { x:0},{ x:70, opacity: 1, ease: Power1.easeInOut, duration : 0.5, }, "-=0.5")
        .from( Titulo, { y:-50, y:  50, duration : 0.5, })
        .from( Titulo1, {x:-100, y:-50, stagger: 0.05, y:  50, duration : 0.5,  })
        .from( Titulo2, { x:100, y:50, stagger: 0.05, y:  50, duration : 0.5,  })
        .from( Titulo3, { y:100, stagger: 0.1, y:  50, duration : 0.5, } )
        .from( aboutSection, { y:100, ease: Power1.easeIn, duration : 1.5, } )

    return
}

export function skillsEffects () {
    const timeline = gsap.timeline({
        defaults:{
            duration: 0.5,
            opacity:0,
        }
    })

    const techItems = document.querySelectorAll('.item');
    const Subtitle = document.querySelectorAll('.subtitle');
    const Title = document.querySelectorAll('.title');
    const Title2 = document.querySelectorAll('.title2');

    timeline
        .from( Title, { stagger: 0.2, y:-100 } )
        .from( Title2, { stagger: 0.2, y:-100  } )
        .from( Subtitle, { stagger: 0.3, x:-100 } )
        .from( techItems, { stagger: 0.2, ease:Power2.easeIn, x: -100, y: 100  })
    
    return
}
