import { faFileAlt, faArrowCircleDown, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useLayoutEffect, useState} from 'react'
import './Header.css';
import BackgroundEffect from './BackgroundEffect';
import MenuResponsive from './MenuResponsive';
import { headerEffects } from '../../utils/gsapEffects';
import profilePicture from '../../img/profile.png'
import newID from '../../utils/createId';

const Header = () => {

    const [openMenu, setOpenMenu] = useState(false);

    useLayoutEffect(() => {
        headerEffects();
        
    }, []);

    const handleClick = (e) => {
        //If i click outside of the menu, it closes
        (e.target.id !== 'menu-container' && openMenu  && !e.target.className.includes('menu-item') && !e.target.className.includes('closeBtn'))  && setOpenMenu(false)
    }

    return (
        <div className='h-full w-full' onClick={ (e) => handleClick(e)} id='container'>

            <div className='w-full flex flex-row justify-between text-slate-100 z-50 '>

            <button
                className=' rounded-full text-slate-400 hover:scale-110 duration-300 group pl-4  z-50 '
                onClick={ () => setOpenMenu( true )}
            >
                    <FontAwesomeIcon icon={faBars} size='2x' className=' ml-2 group-hover:shadow-md block md:hidden' />
            </button>
            <a
                className='flex flex-row items-center hover:text-amber-600 group duration-300 p-8  z-50 sm:text-lg'
                download
                href='/src/files/Aubis_Resume.pdf'
            >
                Resume 
                <FontAwesomeIcon icon={faFileAlt} className='ml-2 group-hover:text-white group-hover:scale-y-110' style={{ fontSize: '20px'}} />
            </a>
            </div>


            {/* Name picture and description */}
            <div className='h-full w-4/5 m-auto flex flex-col justify-center items-center rounded-md  z-50 '  >

                <div className='flex flex-col -mt-32 text-slate-400'>

                    <p className=' text-lg md:text-2xl text-center font-title  mt-2 font-semibold titulo  text-orange-600'>Hi, I'm:</p>

                        {/* Name spliting for letters effects */}
                    <div className='flex flex-col justify-center items-center'>
                        <img src={profilePicture} alt='aubis sanchez perfil profile' className={`h-48 w-48 object-cover object-center my-4 rounded-full shadow-profile shadow-sky-900 border ${ openMenu ? 'z-50' : 'z-[100]' } photo `} />
                        <div className='flex flex-col md:px-4 md:flex-row md:justify-center md:items-center'>
                            <div className='flex flex-row justify-center'>{ 'Aubis'.split('').map( letter => <span key={newID()} className='font-title text-5xl md:text-6xl text-slate-200 italic font-semibold titulo1'>{letter}</span> )}</div>
                            <div className='flex flex-row pl-0 md:pl-4'>{ 'Sanchez'.split('').map( letter => <span key={newID()} className='font-title text-5xl md:text-6xl  text-slate-200 italic font-semibold titulo2'>{letter}</span> )}</div>

                        </div>
                    </div>
                        {/* Front end developer */}
                    <div className='flex flex-row text-3xl font-semibold justify-center text-orange-600 md:text-3xl font-title mt-2 '>
                       
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
          

          {/* Background squared Effect */}
          <BackgroundEffect/>
        
        {/* Menu Responsive  */}
        { openMenu && <MenuResponsive setOpenMenu={ setOpenMenu} />  }

        </div>
    )
}

export default Header


