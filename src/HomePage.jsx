import React from 'react'
import AboutMe from './Components/AboutMe/AboutMe'
import Header from './Components/Header/Header'

const HomePage = () => {


    return (
        <div>
            <div className='w-screen h-screen bg-gray-900'>
                <Header/>
            </div>
            <div className='w-screen h-screen '>
                <AboutMe />
            </div>
        </div>
    )
}

export default HomePage
