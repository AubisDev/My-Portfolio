import React, { useLayoutEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { SendEmail } from '../../utils/FormEmailSend';
import { contactEffects } from '../../utils/gsapEffects';
import 'sweetalert2/dist/sweetalert2.min.css';




const ContactSection = () => {

    const schema = yup.object().shape({
        name: yup.string().min(2).required(),
        subject: yup.string().min(2).required(),
        email: yup.string().email().required(),
        message: yup.string().min(3).required()
    }).required();
      
    
    const { register, handleSubmit, reset } = useForm({
        resolver: yupResolver(schema),
      });

      useLayoutEffect(() => {

      contactEffects();
    }, []);
    
    
    const handleSendFormEmail = (formData) => { 
       SendEmail(formData)
       reset();
    }


    const inputStyles = 'mt-1 p-2 bg-transparent border border-sky-700 w-4/5 rounded-md shadow-sm shadow-sky-700 focus:shadow-sky-300 outline-none focus:border-sky-300 mb-4 ';
    const labelStyles = 'flex flex-col w-full ml-8 ';
    const btnStyles = 'w-3/5 mt-1 mb-4 py-2  bg-gradient-to-r from-sky-500 to-sky-600 hover:from-blue-600 hover:to-blue-700 rounded-lg cursor-pointer';
    return (
        <div className='w-4/5 md:w-3/5 lg:w-2/5 h-auto m-auto font-body   relative top-1/2 transform -translate-y-1/2 contact-container'>
            <div className='w-full h-full m-auto  text-slate-200 '>
                <h3 className=' text-3xl text-center'>Contact</h3>
                <div className='w-full h-full  '>
                    <h4 className='text-center w-4/5 m-auto mt-4 '> Please fill this form and i'll reply as soon as i can 😄</h4>
                    <form onSubmit={handleSubmit(formData => handleSendFormEmail(formData))} className='flex flex-col justify-center items-center mt-8 border-white'>
                        <label className={labelStyles}>Name:</label>
                        <input {...register("name")} className={inputStyles} autoComplete='off' />
                        <label className={labelStyles}>Subject:</label>
                        <input {...register("subject")} className={inputStyles} autoComplete='off'  />
                        <label className={labelStyles}>Your email:</label>
                        <input type='email' {...register("email")} className={inputStyles}  autoComplete='off' />
                        <label className={labelStyles}>Message:</label>
                        <textarea  {...register("message")} className={`${inputStyles} `} style={{ minHeight:'8rem', maxHeight:'10rem', height:'8rem' }} />
                        <input type="submit" value='Send'  className={btnStyles} />
                    </form>

                </div>


            </div>

        </div>
    )
};

export default ContactSection;
