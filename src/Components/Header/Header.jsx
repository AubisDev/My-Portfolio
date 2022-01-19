import { faFileAlt, faArrowCircleDown, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect,} from 'react'
import { gsap } from "gsap";
import './Header.css';
import { Elastic} from 'gsap/all';



const Header = () => {

  


    const timeline = gsap.timeline({
        defaults:{
            opacity: 0,
            y:  50,
            duration : 0.5,
            ease: Elastic.easeInOut.config(2.5, 1)
        }
    })

  

    useEffect(() => {
        const Titulo = document.querySelector('.titulo');        
        const Titulo1 = document.querySelectorAll('.titulo1');
        const Titulo2 = document.querySelectorAll('.titulo2');
        const Titulo3 = document.querySelectorAll('.titulo3');
    
        timeline
            .from( Titulo, { y:-50, })
            .from( Titulo1, {x:-100, y:-50, stagger: 0.1   })
            .from( Titulo2, { x:100, y:50, stagger: 0.1  })
            .from( Titulo3, { y:100, stagger: 0.5 } )
        
    }, []);



    const titleStyles = 'font-title text-5xl text-slate-200 italic font-mediu'
    return (
        <div className='h-full w-full '>
            <div className='h-full w-4`/5 m-auto flex flex-col justify-center items-center rounded-md  z-50 '>
                <div className='flex flex-col mt-10 text-slate-400'>
                    <p className=' text-lg text-center font-title  mt-2 font-semibold titulo  text-orange-600'>Hi, I'm:</p>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='flex flex-row'>{ 'Aubis'.split('').map( letter => <span className='font-title text-6xl  text-slate-200 italic font-semibold titulo1'>{letter}</span> )}</div>
                        <div className='flex flex-row+'>{ 'Sanchez'.split('').map( letter => <span className='font-title text-6xl  text-slate-200 italic font-semibold titulo2'>{letter}</span> )}</div>
                    </div>  
                    <div className='flex flex-row text-3xl font-semibold text-center text-orange-600 md:text-xl font-title mt-2'>
                        <span className=' titulo3'>Front-</span>
                        <span className='titulo3 mr-2 align-center'>end</span>
                        <span className='titulo3'>Developer</span>
                    </div>
                </div>
                <FontAwesomeIcon icon={faArrowCircleDown} size='2x' className='text-slate-200 animate-bounce duration-1000 mt-12 bg-orange-600 rounded-full' />
            </div>

        {/* CV */}
          <div className='flex flex-row justify-between absolute top-0 left-0 py-6 px-2 text-slate-100 w-full z-50 '>
            <button
                    className=' rounded-full text-slate-400 mx-2 hover:scale-110 duration-300 group '
                >
                    <FontAwesomeIcon icon={faBars} size='2x' className=' ml-2 group-hover:shadow-md ' />
            </button>
            <button
                className='flex flex-row hover:text-amber-600 group duration-300'
            >
                Download CV <FontAwesomeIcon icon={faFileAlt} className='ml-2 group-hover:text-white group-hover:scale-y-110  ' style={{ fontSize: '20px'}} />
            </button>
          </div>
          <div className="area z-1" >
            <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
        </div>
    )
}

export default Header


