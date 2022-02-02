import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import gsap, { Power2 } from 'gsap/all';
import React, { useEffect } from 'react';
import newID from '../../utils/createId';

const MenuResponsive = ({ setOpenMenu }) => {


    const closeMenu = () => {
        setOpenMenu( false )
    }


    useEffect(() => {
        const MobileMenu = document.querySelector('.menu-responsive');        
        gsap.fromTo( MobileMenu, { x:-100, opacity: 0}, { x:0, opacity: 1, ease:Power2, duration: 0.5} )

    }, []);

 
    
  return (
    <div 
        className='fixed h-screen w-4/5 top-0 bg-black/80 z-50 text-slate-200 flex justify-center items-center menu-responsive'
        id='menu-container'
    >        

        <button 
            className='absolute top-0 right-0 p-6 closeBtn'
            onClick={ closeMenu }
        >
            <FontAwesomeIcon icon={faTimes} size='2x'/>
        </button>

        <ul className='w-full'>
            {['About me', 'Skills','Projects','Contact'].map( section => (
                <li key={ newID() } className='w-full py-8 text-center text-xl font-body hover:bg-sky-600 menu-item'>{section}</li>
            ) )}
        </ul>
    </div>
  );
};

export default MenuResponsive;


