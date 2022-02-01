import { faFileAlt, faArrowCircleDown, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState} from 'react'
import './Header.css';
import BackgroundEffect from './BackgroundEffect';
import MenuResponsive from './MenuResponsive';
import { headerEffects } from '../../utils/gsapEffects';

const Header = () => {

    const [openMenu, setOpenMenu] = useState(false);

    useEffect(() => {
        headerEffects();
        
    }, []);

    const handleClick = (e) => {
        //If i click outside of the menu, it close
        (e.target.id !== 'menu-container' && openMenu  && !e.target.className.includes('menu-item')) && setOpenMenu(false)
    }

    return (
        <div className='h-full w-full' onClick={ (e) => handleClick(e)} id='container'>

            {/* Name picture and description */}
            <div className='h-full w-4`/5 m-auto flex flex-col justify-center items-center rounded-md  z-50 '  >

                <div className='flex flex-col mt-10 text-slate-400'>

                    <p className=' text-lg text-center font-title  mt-2 font-semibold titulo  text-orange-600'>Hi, I'm:</p>
                        {/* Name spliting for letters effects */}
                    <div className='flex flex-col justify-center items-center'>

                        <div className='flex flex-row'>{ 'Aubis'.split('').map( letter => <span className='font-title text-6xl  text-slate-200 italic font-semibold titulo1'>{letter}</span> )}</div>
                        <div className='flex flex-row+'>{ 'Sanchez'.split('').map( letter => <span className='font-title text-6xl  text-slate-200 italic font-semibold titulo2'>{letter}</span> )}</div>

                    </div>
                        {/* Front end developer */}
                    <div className='flex flex-row text-3xl font-semibold text-center text-orange-600 md:text-xl font-title mt-2'>
                       
                        <span className=' titulo3'>Front-</span>
                        <span className='titulo3 mr-2 align-center'>end</span>
                        <span className='titulo3'>Developer</span>
                    
                    </div>

                </div>

                <div className='about-section flex flex-col justify-center items-center'>
                
                    <p className='text-sm font-body italic text-gray-400 mt-20 font-semibold'>About me</p>
                    <FontAwesomeIcon icon={faArrowCircleDown} size='2x' className='text-slate-200 animate-bounce duration-1000 mt-2 bg-sky-600 rounded-full' />
                
                </div>
                
            </div>

            {/* CV and Menu Button */}
          <div className='flex flex-row justify-center absolute top-0 left-0 py-6 px-2 text-slate-100 w-full z-50 '>

            <button
                className=' rounded-full text-slate-400 mx-2 hover:scale-110 duration-300 group menu'
                onClick={ () => setOpenMenu( true )}
            >
                    <FontAwesomeIcon icon={faBars} size='2x' className=' ml-2 group-hover:shadow-md ' />
            </button>
            <a
                className='flex flex-row hover:text-amber-600 group duration-300 mt-2 download-cv'
                download
                href='/src/files/Aubis_Resume.pdf'
            >
                Resume 
                <FontAwesomeIcon icon={faFileAlt} className='ml-2 group-hover:text-white group-hover:scale-y-110' style={{ fontSize: '20px'}} />
            </a>
          </div>

          {/* Background squared Effect */}
          <BackgroundEffect/>
        
        {/* Menu Responsive  */}
        { openMenu && <MenuResponsive setOpenMenu={ setOpenMenu} />  }

        </div>
    )
}

export default Header


