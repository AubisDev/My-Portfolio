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
            .from( aboutTitle,{ x: -500, stagger: 0.2, })
            .from( aboutRest, { x: -500 , stagger: 0.5,  ease: Elastic.easeInOut.config(1, 0.3),},   )
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
                    I'm 25 years old. I'm from  
                    {/* Venezuela with colors */}
                    <span className='text-yellow-300'> Ven</span><span className=" text-blue-500">ezu</span><span className='text-red-500'>ela </span> 
                    and an electronic engineering student who loves IT World & Tech. Wandering through internet find out about Web Development, and loved it. Ever since I've been learning new things everyday so i can add my grain of sand to future project which i'll be part of 
                </p>
            </div>

            {/* Typing effect text */}
            
            <div className='mt-10 text-justify h-[220px] shadow-neon bg-opacity-0 border-2 border-sky-400 p-3   rounded-t-md leading-6  hover:bg-orange-300/20 duration-300 aboutText2'>
                <TypeIt 
                    options={{
                        speed: 50,
                        startDelay: 3000
                    }}
                >
                    <span className='text-justify italic font-light font-body bg-opacity-0 '>
                        As a web developer, i want  <SuperStrong>your</SuperStrong> business to <SuperStrong>grow</SuperStrong> in visualization, getting more reach to <SuperStrong>  increase </SuperStrong> earnings  by creating a <SuperStrong>dynamic</SuperStrong>,  <SuperStrong>friendly</SuperStrong> and  <SuperStrong>attractive</SuperStrong> web page that <SuperStrong>will </SuperStrong> caught your clients attention.
                    </span>
                </TypeIt>
            </div>
        </div>
    )
}

export default AboutMe
