import { faFacebook, faInstagram, faInstagramSquare, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
faInstagramSquare

const socialStyles = 'hover:scale-110 duration-300 drop-shadow-social  ';
const Footer = () => {
  return (
    <div className='w-4/5 h-full m-auto flex flex-col justify-center items-center font-title text-xl font-semibold mt-32 text-white'>
        <h3>Follow me on my social media</h3>
        <div className='py-8'>
            <a href='https://www.instagram.com/aubis96/' target='_blank'><FontAwesomeIcon icon={faInstagram} size='2x' className={socialStyles} /></a>
            <a href='#'><FontAwesomeIcon icon={faLinkedinIn} size='2x' className={`mx-8 ${socialStyles}`} /></a>
            <a href='https://www.facebook.com/aubisst' target='_blank'><FontAwesomeIcon icon={faFacebook} size='2x' className={socialStyles} /> </a>
        </div>
        <p className='text-sm font-body font-light tracking-widest'>Thanks for visiting 😁</p>
    </div>
  )
};

export default Footer;
