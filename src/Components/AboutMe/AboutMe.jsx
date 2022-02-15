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
        <div className='w-4/5 h-full sm:w-3/5 lg:w-2/5 m-auto  text-white font-body container flex flex-col justify-evenly'>
            {/* About me title */}
            <div className='w-full pt-14 '>
                <p className='text-3xl sm:text-4xl font-semibold text-center py-3'>
                <span className='text-orange-600 about'>{openTag}</span> <span className='text-sky-600 about'>A</span><span className="about2">bout </span><span className="about2">me <span className='text-orange-600'>{closeTag}</span></span>
                </p>
                    {/* About me text  */}
               
            </div>
            <div className=''>
                <p className='text-justify text-sm sm:text-base md:text-xl mt-2 p-6 border-2 border-orange-500 shadow-neon2 leading-6  hover:bg-orange-300/20 duration-300 aboutText'>
                    I'm 25 years old. I'm from Venezuela, an electronic engineering student and selftaught developer who loves IT World and Tech. Always trying to learn new thing to increase my knowledge and be a better developer.
                </p>
            </div>
            {/* Typing effect text */}
            
            <div className='mt-10 text-justify  text-sm sm:text-base md:text-xl h-[215px] shadow-neon bg-opacity-0 border-2 border-sky-400 px-6 py-3 tracking-wide sm:tracking-normal leading-6  hover:bg-orange-300/20 duration-300 aboutText2'>
                <TypeIt 
                    options={{
                        speed: 35,
                        startDelay: 3000
                    }}
                >
                    <span className='text-justify    '>
                        I'm a person who gives a high effort to my activities and responsibilities. As a selft taught developer, i'm always willing to learn and trying new technologies. I'm looking forward to have an opportunity so i can gain experience and grow as a dev.
                    </span>
                </TypeIt>
            </div>
        </div>
    )
}

export default AboutMe
