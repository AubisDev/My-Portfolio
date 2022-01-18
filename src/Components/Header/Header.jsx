import { faFileAlt, faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'


const Header = () => {

    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
        strings: ["Front End Web Developer"], // Strings to display
        // Speed settings, try diffrent values untill you get good results
        startDelay: 300,
        typeSpeed: 50,
        backSpeed: 100,
        backDelay: 200,
        loop: true,
        showCursor: true
        });

        // Destropying
        return () => {
        typed.destroy();
        };
    }, []);

    const titleStyles = 'font-title text-6xl text-slate-200 italic'
    return (
        <div className='h-full w-full '>
            <div className='h-full w-4/5 m-auto flex flex-col items-center rounded-md   '>
                <div className='flex flex-col mt-10 text-slate-400'>
                    <p className=' text-sm text-center font-title  mt-2 font-semibold  '>Welcome, I'm:</p>
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className={titleStyles} >Aubis </h1>
                        <h1 className={`${titleStyles}`} >Sanchez</h1>
                    </div>  
                    <span className='text-md font-semibold text-center md:text-xl font-title mt-2' ref={el}></span>
                </div>
                <div className=' mt-8 h-64 w-64 rounded-full bg-profile bg-center shadow-lg shadow-gray-700'>
                </div>
                <FontAwesomeIcon icon={faArrowCircleDown} size='2x' className='text-white animate-bounce duration-1000 mt-12' />
            </div>
        
        {/* CV */}
          <div className='flex flex-col absolute top-0 right-0 py-6 px-2'>
            <button
                    className=' rounded-full text-slate-400 mx-2 hover:scale-110 duration-300 group '
                >
                    <FontAwesomeIcon icon={faFileAlt} size='2x' className='text-white ml-2 group-hover:shadow-md group-hover:shadow-gray-400' />
                    <p>My CV</p>
                </button>
          </div>
        </div>
    )
}

export default Header


