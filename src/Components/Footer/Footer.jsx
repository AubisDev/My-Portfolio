import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { footerEffects } from '../../utils/gsapEffects.js'

const Footer = () => {

  useEffect(() => {
    footerEffects()
  }, []);
  
  const handleGoUpButton = () => {
    document.querySelector('#home').scrollIntoView({behavior: 'smooth'})
  }
  return (
    <div className='w-4/5 h-full m-auto flex flex-col justify-center items-center font-title text-xl font-semibold mt-32 text-white footer'>
        <p className='text-sm font-body font-light tracking-widest'>Thanks for visiting 😁</p>
        <button onClick={handleGoUpButton} type='button' className='flex flex-col mt-3 justify-center items-center text-base'>
            <FontAwesomeIcon icon={faArrowCircleUp} size='2x' /> 
            Go up
        </button>
    </div>
  )
};

export default Footer;
