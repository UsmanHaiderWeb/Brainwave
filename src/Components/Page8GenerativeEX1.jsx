import React, { memo } from 'react'
import AIisGenerating from './AIisGenerating'

const Page8GenerativeEX1 = () => {
  return (
    <div className='w-full xl:h-[750px] h-[650px] overflow-hidden flex justify-end mobile:justify-center micro:justify-center sm:justify-between items-center sm:pr-16 relative z-[9] rounded-[20px] border-[1px] border-[#dadada] border-opacity-15'>
        <div className='w-full sm:w-[calc(100%-310px)] h-full absolute sm:relative z-[9] overflow-hidden rounded-[20px] sm:bg-transparent bg-black bg-opacity-30'>
            <img src="/service-1-bvSONSha.webp" alt="Smart AI" className='w-full h-full object-cover object-right-top relative z-[9]' />
        </div>
        <div className='absolute top-0 left-0 w-full h-full z-[8] overflow-hidden md:-translate-x-24 sm:-translate-x-80'>
            <img src="/gradientBG.webp" alt="Gradient BG" className='w-full h-full object-contain object-left'/>
        </div>
        <div className='sm:w-[310px] w-[350px] mobile:w-[90%] micro:w-full relative z-[10] sm:mr-0 mobile:mr-0 micro:mx-3 mr-10'>
            <h1 className='text-[30px]'>Smartest AI</h1>
            <p className='opacity-45 mb-14 pr-5'>Brainwave unlocks the potential of AI-powered applications</p>
            <div>
                {['Photo generating', ' Photo enhance', 'Seamless integration'].map((i, idx) => (
                    <div className='flex justify-start items-center border-t-[1px] border-[#dadada] border-opacity-35 py-4 gap-x-3' key={i}>
                        <div>
                            <img src="/tick.svg" alt="tickSVG" />
                        </div>
                        <h3 className='opacity-75'>{i}</h3>
                    </div>
                ))}
            </div>
        </div>
        <AIisGenerating bottom="bottom-16" />
    </div>
  )
}

export default memo(Page8GenerativeEX1)