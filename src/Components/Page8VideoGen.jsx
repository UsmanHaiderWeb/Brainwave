import React, { memo } from 'react'
import Page8SVGcomp from './Page8SVGcomp'

const Page8VideoGen = () => {
  return (
    <div className='w-[96%] sm:w-[45vw] md:h-[700px] lgtab:h-[700px] h-[600px] micro:h-[550px] relative rounded-[30px] overflow-hidden bg-[#15131D] p-4 flex justify-between items-center flex-col'>
        <div className='w-full lg:px-12 md:px-6 lgtab:px-12 sm:px-3 tablet:px-5'>
            <h1 className='md:text-[33px] sm:text-[27px] text-[33px] mobile:text-[30px] micro:text-[27px] micro:leading-[30px] md:pt-14 pt-5 pb-3'>Video generation</h1>
            <p className='lgtab:w-[500px] tablet:w-[80%] md:text-[17px] mobile:text-[15px] micro:text-[14px] opacity-55 md:mb-10 mb-8 micro:mb-6'>The world's most powerful AI photo and video art generation engine. What will you create?</p>
            <div className='w-full lgtab:w-[500px] tablet:w-[80%] flex justify-between items-center'>
                <Page8SVGcomp link="/sound.svg" />
                <Page8SVGcomp link="/sound2.svg" />
                <Page8SVGcomp link="/disc.svg" />
                <Page8SVGcomp link="/network.svg" />
                <Page8SVGcomp link="/change.svg" />
            </div>
        </div>
        <div className='relative w-full md:h-[350px] lgtab:h-[400px] h-[300px] micro:h-[285px] rounded-2xl overflow-hidden flex justify-between py-5 px-3 items-start flex-col'>
            <div className='relative z-[13] flex justify-between items-start flex-col h-[65px] w-[250px] bg-[#252134] py-2 px-5 rounded-t-xl rounded-b-xl ml-10 mt-5 micro:scale-[0.65] origin-left'>
                <span className='text-[14px] font-["codePro"]'>Video generated!</span>
                <span className='self-end text-[10px] font-["coderPro"] opacity-55 tracking-widest'>JUST NOW</span>
                <svg className="absolute right-full bottom-0 -scale-x-100" xmlns="http://www.w3.org/2000/svg" width="26" height="37"><path className="fill-[#252134]" d="M21.843 37.001c3.564 0 5.348-4.309 2.829-6.828L3.515 9.015A12 12 0 0 1 0 .53v36.471h21.843z"></path></svg>
                <div className='absolute bottom-0 left-5 w-10 p-1 translate-y-1/2 bg-[#AC6AFF] bg-opacity-55 rounded-xl'>
                    <img src="/logo.svg" alt="logo" />
                </div>
            </div>
            <div className='w-full relative z-[13] px-3 flex justify-center items-center gap-x-3'>
                <div>
                    <img src="/play.svg" alt="playicon" width={30} />
                </div>
                <div className='w-full h-[2px] bg-white opacity-65'></div>
            </div>
            <div className='w-full h-full absolute z-[12] top-0 left-0 overflow-hidden bg-[#0E0C15]'>
                <img src="/service-3-CruucQ7U.webp" alt="backgroundImg" className='w-full mobile:h-full micro:h-full object-center object-cover' />
            </div>
        </div>
    </div>
  )
}

export default memo(Page8VideoGen)