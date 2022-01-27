import { gsap } from "gsap";
import { Elastic, Power2, Power3, Power4} from 'gsap/all';
import React, { lazy, useEffect, useState } from 'react'
import TypeIt from "typeit-react";

const AboutMe = () => {
    const openTag = '<';
    const closeTag = ' />';

    const timeline = gsap.timeline({
        defaults:{
            opacity: 0,
            duration: 0.5,
        }
    })

    useEffect(() => {
        const aboutTitle = document.querySelectorAll('.about');
        const aboutRest = document.querySelectorAll('.about2');
        const text = document.querySelector('.aboutText')
        const text2 = document.querySelector('.aboutText2')

         timeline
            .from( aboutTitle,{ x: -500, stagger: 0.05, })
            .from( aboutRest, { x: -500 , stagger: 0.05,  ease: Elastic.easeInOut.config(1, 0.3),},   )
            .from( text, { x: -100, y:50, ease: Power2.easeIn,  })
            .from( text2, { x: 100, y:50, ease: Power3.easeIn,  })
            
    }, [])

    const SuperStrong = ({ children }) => {
        return <span className='text-lg text-orange-500 font-medium'>{children}</span>;
      };
    return (
        <div className='w-4/5  m-auto  text-white font-body container'>
            {/* About me title */}
            <div className='w-full pt-14 '>
                <p className='text-3xl font-semibold text-center py-3'>
                <span className='text-orange-600 about'>{openTag}</span> <span className='text-sky-600 about'>A</span><span className="about2">bout </span><span className="about2">me <span className='text-orange-600'>{closeTag}</span></span>
                </p>
                    {/* About me text  */}
                <p className='text-justify text-sm mt-2 p-3 border-2 border-orange-500 shadow-neon2 rounded-t-md leading-6  hover:bg-orange-300/20 duration-300 aboutText'>
                    I'm 25 years old. I'm from Venezuela, an electronic engineering student and selftaught developer who loves IT World & Tech. Always trying to learn new thing to increase my knowledge and give a higher quality code.
                </p>
            </div>

            {/* Typing effect text */}
            
            <div className='mt-10 text-justify h-[215px] shadow-neon bg-opacity-0 border-2 border-sky-400 p-3   rounded-t-md leading-8  hover:bg-orange-300/20 duration-300 aboutText2'>
                <TypeIt 
                    options={{
                        speed: 35,
                        startDelay: 3000
                    }}
                >
                    <span className='text-justify italic font-light  bg-opacity-0 '>
                        I'm a person who gives a high effort to my activities and responsibilities. Even as a selftaught developer, i can work with a team and i'm always willing to learn.
                    </span>
                </TypeIt>
            </div>
        </div>
    )
}

export default AboutMe
