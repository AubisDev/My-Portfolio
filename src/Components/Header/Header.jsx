import { faFileAlt, faArrowCircleDown, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useLayoutEffect, useState} from 'react'
import './Header.css';
import BackgroundEffect from './BackgroundEffect';
import MenuResponsive from './MenuResponsive';
import { headerEffects } from '../../utils/gsapEffects';
import profilePicture from '../../img/profile.png'
import newID from '../../utils/createId';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);

    useLayoutEffect(() => {
        headerEffects();
        
    }, []);

    const handleClick = (e) => {
        //If i click outside of the menu, it closes
        (e.target.id !== 'menu-container' && openMenu  && !e.target.className.includes('menu-item') && !e.target.className.includes('closeBtn'))  && setOpenMenu(false)
    }

    const handleNavClick = (section) => {
        document.querySelector(`#${section.toLowerCase()}`).scrollIntoView({behavior: 'smooth'})
    }

    return (
        <div className='h-full w-full' onClick={ (e) => handleClick(e)} id='container'>

            {/* Container for mobile-tablet icon and menu */}
            <div className='w-full flex flex-row justify-between text-slate-100 z-50 '>

                <button
                    className=' rounded-full text-slate-400 hover:scale-110 duration-300 group pl-4 -mt-14 z-50 '
                    onClick={ () => setOpenMenu( true )}
                >
                        <FontAwesomeIcon icon={faBars} size='2x' className=' ml-2 group-hover:shadow-md block md:hidden' />
                </button>
                <div className='flex flex-col justify-center items-center p-8 md:hidden'>
                    <a
                        className='w-full flex flex-row justify-end items-center -ml-4 hover:text-amber-600 group duration-300 z-50 sm:text-lg '
                        download
                        href='/src/files/Aubis_Resume.pdf'
                    >
                        Resume 
                        <FontAwesomeIcon icon={faFileAlt} className='ml-2 group-hover:text-white group-hover:scale-y-110' style={{ fontSize: '20px'}} />
                    </a>
                    <div className=' w-full flex flex-col justify-center items-center mt-2 z-50'>
                        <a target='_blank' href='www.linkedin.com/in/aubis-sanchez-torres' className='w-full flex justify-end items-center'><FontAwesomeIcon icon={faGithub} size='2x' className='z-50  lg:translate-x-40 lg:-translate-y-52 px-1 text-white hover:text-gray-400' /></a>
                        <a target='_blank' href='https://github.com/AubisDev' className='w-full flex justify-end items-center'><FontAwesomeIcon icon={faLinkedinIn} size='2x' className='z-50 flex justify-center items-center lg:translate-x-40 lg:-translate-y-52 px-1 text-white hover:text-sky-600'/></a>
                    </div>
                </div>
            </div>

            <div className='text-slate-200  w-full m-auto justify-center items-center p-2 hidden md:flex md:flex-row '>
                {['ABOUT', 'SKILLS', 'PROJECTS','CONTACT'].map( menuItem => (
                    <button onClick={() => handleNavClick( menuItem )} className={`px-3 z-50 duration-300  text-lg hover:text-sky-600 cursor-pointer ${menuItem !== 'CONTACT' && 'border-r-2 border-sky-600'}`}>{menuItem}</button>
                ))}
            </div>

            {/* Name picture and description */}
             <div className='h-full w-4/5 m-auto flex flex-col justify-center items-center rounded-md  z-50 '  >
               
                <div className='flex flex-col -mt-52 text-slate-400 md:pt-40 lg:pt-68' >
                   
                    <div className='lg:translate-x-40 lg:translate-y-20'>
                        <h5 className=' text-lg md:text-2xl text-center font-title mt-2 duration-300 titulo text-orange-600'>Hi, I'm:</h5>
                    </div>

                        {/* Name spliting for letters effects */}
                    <div className='flex flex-col justify-center items-center'>
                        <img src={profilePicture} alt='aubis sanchez perfil profile' className={`h-48 w-48 object-cover object-center my-4 rounded-full shadow-profile shadow-sky-900 border ${ openMenu ? 'z-50' : 'z-[100]' } photo lg:-translate-x-80 lg:w-64 lg:h-64 first-letter`} />
                        <div className='flex flex-col md:px-4 md:flex-row md:justify-center md:items-center lg:translate-x-40 lg:-translate-y-52'>
                            <div className='flex flex-row justify-center'>{ 'Aubis'.split('').map( letter => <span key={newID()} className='font-title text-5xl md:text-6xl text-slate-200 italic font-semibold titulo1'>{letter}</span> )}</div>
                            <div className='flex flex-row pl-0 md:pl-4'>{ 'Sanchez'.split('').map( letter => <span key={newID()} className='font-title text-5xl md:text-6xl  text-slate-200 italic font-semibold titulo2'>{letter}</span> )}</div>

                        </div>  
                    </div>
                        {/* Front end developer */}
                    <div className='flex flex-row text-2xl  justify-center text-orange-600 md:text-2xl font-title  mt-2 duration-300 lg:translate-x-40 lg:-translate-y-52'>
                       
                        <span className=' titulo3'>Front-</span>
                        <span className='titulo3 mr-2 align-center'>end</span>
                        <span className='titulo3'>Developer</span>
                    
                    </div>
                    

                    {/* Resume + links to LinkedinIn and Github for large-size+ screen  */}
                    <a
                        className='w-1/3 hidden md:flex md:flex-row m-auto justify-center items-center mt-2 lg:mt-10  group duration-300 p-8  z-50 sm:text-lg text-slate-100 py-2 rounded-lg border-2 border-sky-600 hover:bg-sky-600  lg:translate-x-40 lg:-translate-y-52'
                        download
                        href='/src/files/Aubis_Resume.pdf'
                    >
                        Resume 
                        <FontAwesomeIcon icon={faFileAlt} className='ml-2 group-hover:text-white group-hover:scale-y-110' style={{ fontSize: '20px'}} />
                    </a>
                    <div className='hidden md:flex md:flex-row justify-center items-center mt-2 z-50'>
                        <a target='_blank' href='www.linkedin.com/in/aubis-sanchez-torres'><FontAwesomeIcon icon={faGithub} size='2x' className='z-50 duration-300 lg:translate-x-40  lg:-translate-y-52 pr-2 text-white hover:text-gray-400' /></a>
                        <a target='_blank' href='https://github.com/AubisDev'><FontAwesomeIcon icon={faLinkedinIn} size='2x' className='z-50 duration-300 lg:translate-x-40 lg:-translate-y-52 pl-2 text-white hover:text-sky-600'/></a>
                    </div>

                </div>

                <div className='about-section flex flex-col justify-center items-center sm:hidden -mt-10'>
                
                    <p className='text-sm font-body italic text-gray-400 mt-20 font-semibold'>About me</p>
                    <FontAwesomeIcon icon={faArrowCircleDown} size='2x' className='text-slate-200 animate-bounce duration-1000 mt-2 bg-sky-600 rounded-full' />
                
                </div>
                
            </div>

            {/* CV and Menu Button */}

          {/* Background squared Effect */}
          <BackgroundEffect/>
        
        {/* Menu Responsive  */}
        { openMenu && <MenuResponsive setOpenMenu={ setOpenMenu} />  }

        </div>
    )
}

export default Header


