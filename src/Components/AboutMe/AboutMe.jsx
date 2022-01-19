import React, { useEffect, useState } from 'react'
import TypeIt from "typeit-react";


const AboutMe = () => {


    const [shadowEffect, setShadowEffect] = useState(false);


    useEffect(() => {
        () =>{
            setTimeout(() => {
                setShadowEffect( !shadowEffect )
            }, 10000);
        }
    }, [setShadowEffect])

    const SuperStrong = ({ children }) => {
        return <span className='text-lg text-orange-500 font-medium'>{children}</span>;
      };
    return (
        <div className='w-4/5  m-auto  text-gray-300 font-body'>
            {/* About me title */}
            <div className='w-full pt-10 '>
                <p className='text-3xl font-semibold text-center py-3 '>
                    <span className='text-orange-600'>A</span>bout<span className='text-orange-600'>_</span>me
                </p>
                    {/* About me text  */}
                <p className='text-justify text-sm  p-3 border-2 border-orange-500 shadow-neon2 rounded-t-md leading-6  hover:bg-orange-300/20 duration-300'>
                    I'm 25 years old. I'm from  
                    {/* Venezuela with colors */}
                    <span className='text-yellow-300'> Ven</span><span className=" text-blue-500">ezu</span><span className='text-red-500'>ela </span> 
                    and an electronic engineering student who loves IT World & Tech. Wandering through internet find out about Web Development, and loved it. Ever since I've been learning new things everyday so i can add my grain of sand to future project which i'll be part of 
                </p>
            </div>

            {/* Typing effect text */}
            
            <div className='mt-10 text-justify  shadow-neon h-full bg-opacity-0  p-3 border-2 border-sky-300 rounded-t-md leading-6  hover:bg-orange-300/20 duration-300'>
                <TypeIt 
                    options={{
                        speed: 50
                    }}
                >
                    <span className='text-justify italic font-light font-body '>
                        As a web developer, i want  <SuperStrong>your</SuperStrong> business to <SuperStrong>grow</SuperStrong> in visualization, getting more reach to <SuperStrong>  increase </SuperStrong> earnings  by creating a <SuperStrong>dynamic</SuperStrong>,  <SuperStrong>friendly</SuperStrong> and  <SuperStrong>attractive</SuperStrong> web page that <SuperStrong>will </SuperStrong> caught your clients attention.
                    </span>
                </TypeIt>
            </div>
        </div>
    )
}

export default AboutMe
