import React, { memo } from 'react'
import Page4LineSVG from './Page4LineSVG'

const Page4 = () => {
  return (
    <div className='flex sm:justify-between justify-center items-center sm:flex-row flex-col relative gap-y-32 sm:pb-0 pb-10'>
        <div>
            <h1 className='md:w-[400px] sm:w-[45vw] text-[40px] leading-[48px] mini:text-[35px] mini:leading-[42px] mobile:text-[30px] mobile:leading-[37px] micro:text-[27px] micro:leading-[34px] mb-10'>AI Chat App for seamless collaboration</h1>
            <div className='flex justify-start items-center gap-x-4 mb-3 mt-7'>
                <div>
                    <img src="tick.svg" />
                </div>
                <h5>Seamless Integration</h5>
            </div>
            <p className='opacity-55 ml-10 micro:ml-3 text-[17px] mobile:text-[16px] micro:text-[15px] w-[350px] mobile:w-[80%] micro:w-[95%]'>With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.</p>
            <div className='flex justify-start items-center gap-x-4 mb-3 mt-7'>
                <div>
                    <img src="tick.svg" />
                </div>
                <h5>Smart Automation</h5>
            </div>
            <p className='opacity-55 ml-10 micro:ml-3 text-[17px] mobile:text-[16px] micro:text-[15px] w-[350px] mobile:w-[80%] micro:w-[95%]'>The app uses natural language processing to understand user's queries andprovide accurate and relevant responses.</p>
            <div className='flex justify-start items-center gap-x-4 mb-3 mt-7'>
                <div>
                    <img src="tick.svg" />
                </div>
                <h5>Top-notch Security</h5>
            </div>
        </div>
        <div className='rounded-full w-[350px] h-[350px] md:w-[350px] md:h-[350px] sm:w-[40vw] sm:h-[40vw] mobile:w-[80vw] mobile:h-[80vw] micro:w-[80vw] micro:h-[80vw] border-[1px] border-[#dadada] border-opacity-15 flex justify-center items-center p-12 micro:p-10 lg:mr-20 md:mr-28 mr-5 relative'>
            <div className='rounded-full w-full h-full border-[1px] border-[#dadada] border-opacity-15 flex justify-center items-center p-12 micro:p-6'>
                <div className='hello rounded-full w-[70%] h-[70%] flex justify-center items-center p-1' style={{background: "conic-gradient(from 225deg,#ffc876,#79fff7,#9f53ff,#ff98e2,#ffc876)"}}>
                    <div className='w-full h-full bg-[#0E0C16] rounded-full flex justify-center items-center'>
                        <img src="/logo.svg" alt="logo" className='w-[50%]' />
                    </div>
                </div>
            </div>
            <div className='absolute w-full h-full rounded-full top-0 left-0'>
                <Page4LineSVG imgPath="/discord.png" rotate="rotate-[0deg]" rotateIMG="rotate-[-0deg]"/>
                <Page4LineSVG imgPath="/notion.png" rotate="rotate-[45deg]" rotateIMG="rotate-[-45deg]"/>
                <Page4LineSVG imgPath="/figma.png" rotate="rotate-[90deg]" rotateIMG="rotate-[-90deg]"/>
                <Page4LineSVG imgPath="/cloud.png" rotate="rotate-[135deg]" rotateIMG="rotate-[-135deg]"/>
                <Page4LineSVG imgPath="/lightning.webp" rotate="rotate-[180deg]" rotateIMG="rotate-[-180deg]"/>
                <Page4LineSVG imgPath="/firebase.webp" rotate="rotate-[225deg]" rotateIMG="rotate-[-225deg]"/>
                <Page4LineSVG imgPath="/photoshop.png" rotate="rotate-[270deg]" rotateIMG="rotate-[-270deg]"/>
                <Page4LineSVG imgPath="/newApp.png" rotate="rotate-[315deg]" rotateIMG="rotate-[-315deg]"/>
            </div>
        </div>
        <div className='hidden md:block absolute top-1/2 right-0 lg:translate-x-[70%] md:translate-x-[50%]'>
            <img src="curve.svg" alt="curveLine" />
        </div>
    </div>
  )
}

export default memo(Page4)