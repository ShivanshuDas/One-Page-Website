import React from 'react'
import Banner from '../Components/Banner'
import HowWorks from '../Components/HowWorks'
import Application from '../Components/Application'
import Advantages from '../Components/Advantages'
import Platforms from '../Components/Platforms'
import Future from '../Components/Future'

const Home = () => {
    return (
        <>
            <div className='flex flex-col gap-[65px]'>
                <Banner />
                <div className='flex flex-col gap-[65px] lg:gap-[100px] xl:gap-[120px]'>
                    <HowWorks />
                    <Application />
                    <Advantages />
                    <Platforms />
                    <Future />
                </div>
            </div>
        </>
    )
}

export default Home
