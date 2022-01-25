import React from 'react';

const ContactSection = () => {


    const openTag = '<';
    const closeTag = '/>';
    const inputStyles = 'mt-1 p-2 bg-transparent border border-sky-700 w-4/5 rounded-md  ';
    const labelStyles = 'flex flex-col w-full my-4 ml-8'
    return (
        <div className='w-4/5 h-auto m-auto font-body border border-white   relative top-1/2 transform -translate-y-1/2'>
            <div className='w-full h-full m-auto  text-slate-200 '>
                <h3 className=' text-3xl text-center'>Contact</h3>
                <div className='w-full h-full  '>
                    <h4 className='text-center w-4/5 m-auto mt-4 text-sm'> Please fill this form and i'll reply as soon as i can</h4>
                    <label className={labelStyles}>
                        Name:
                        <input
                            className={inputStyles}
                        />
                    </label>

                    <label
                        className={labelStyles}
                    >
                        Subject:
                        <input
                            className={inputStyles}                        />
                    </label>
                    <label
                        className={labelStyles}
                    >
                        Your Email:
                        <input
                            className={inputStyles}                        />
                    </label>
                    <label
                        className={labelStyles}
                    >
                        Message:
                        <textarea
                            className={`${inputStyles} h-28 overflow-scoll`}                        />
                    </label>       
                    <button
                        type='submit'
                         className='w-3/5 mt-1 mb-4 relative left-1/4 -ml-3 py-2  bg-gradient-to-r from-sky-500 to-sky-600 hover:from-blue-600 hover:to-blue-700 rounded-lg '
                    >
                        Send
                    </button>             

                </div>


            </div>

        </div>
    )
};

export default ContactSection;
