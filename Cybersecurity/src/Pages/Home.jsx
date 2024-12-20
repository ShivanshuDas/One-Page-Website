import React from 'react'
import Banner from '../Components/Banner'
import HowWorks from '../Components/HowWorks'
import Matters from '../Components/Matters'
import Threats from '../Components/Threats'
import StaySafe from '../Components/StaySafe'
import Footer from '../Components/Footer'

const Home = () => {
    return (
        <>
            <div className='bg-[#090909] flex flex-col gap-[94px] xl:gap-[150px]'>
                <Banner />
                <HowWorks />
                <Matters />
                <Threats />
                <StaySafe />
                <Footer />
            </div>

        </>
    )
}

export default Home
