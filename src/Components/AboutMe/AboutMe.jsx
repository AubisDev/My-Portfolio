import React, { useLayoutEffect } from 'react'
import TypeIt from "typeit-react";
import { aboutmeEffects } from "../../utils/gsapEffects";

const AboutMe = () => {
    const openTag = '<';
    const closeTag = ' />';

    useLayoutEffect(() => {
        aboutmeEffects();
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
                    I'm 25 years old. I'm from Venezuela, an electronic engineering student and selftaught developer who loves IT World & Tech. Always trying to learn new thing to increase my knowledge and be a better developer.
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
                        I'm a person who gives a high effort to my activities and responsibilities. As a selft taught developer, i'm always willing to learn.
                    </span>
                </TypeIt>
            </div>
        </div>
    )
}

export default AboutMe
