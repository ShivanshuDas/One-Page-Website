import React from "react";
import img from "../Assets/img.png"
const HowWorks = () => {
    return (
        <>
            <div className='lg:flex items-center space-y-6 lg:space-y-0 lg:gap-14 2xl:gap-28 mx-auto max-w-[400px] md:max-w-[600px] lg:max-w-[1150px] xl:max-w-[1330px] 2xl:max-w-[1420px] px-4 lg:px-2 2xl:px-1'>
                <img src={img} alt="" className='lg:w-[500px] xl:w-[650px]' />
                <div className='space-y-5 xl:space-y-12'>
                    <h1 className='text-white font-["Roboto"] lg:pl-3 text-[24px] font-bold tracking-[3px] text-center lg:text-[44px] lg:text-start xl:text-[56px]'>INTRODUCTION</h1>
                    <p className='leading-[22px] font-light text-[#989898] font-["Montserrat"] text-sm lg:text-[15px] xl:text-lg xl:leading-7'>In today's interconnected world, cybersecurity is more crucial than ever. As individuals, businesses, and governments increasingly rely on digital platforms for communication, commerce, and information storage, the threat of cyberattacks continues to grow. Cybersecurity involves protecting networks, devices, and data from unauthorized access, cyberattacks, and other malicious activities. With threats like hacking, data breaches, ransomware, and phishing attacks becoming more sophisticated, robust security measures are essential. Effective cybersecurity strategies not only safeguard sensitive information but also ensure the continuity of services and protect users from financial and reputational damage. As cyber threats evolve, staying ahead with proactive security solutions is vital to maintaining trust and minimizing risks in the digital landscape.</p>
                </div>
            </div>
        </>
    )
}

export default HowWorks
