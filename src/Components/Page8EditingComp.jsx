import React, { memo } from 'react'

const Page8EditingComp = () => {
  return (
    <div className='lgtab:hidden tablet:hidden w-[96%] sm:w-[45vw] md:h-[700px] h-[600px] micro:h-[550px] relative border-[1px] border-[#dadada] border-opacity-15 rounded-[30px] overflow-hidden'>
        <div className='w-full h-full absolute z-[10] top-0 left-0'>
            <img src="/service-2-C-pPDQl7.webp" alt="BackgroundPhoto" className='w-full h-full object-cover' />
        </div>
        <div className='relative z-[11] w-full h-full flex justify-between items-start flex-col pb-10 md:pb-20 sm:pb-14 pt-16 px-5 md:pl-14 md:pr-20 sm:px-10 bg-gradient-to-b from-transparent to-[#0E0C16] bg-opacity-35'>
          <div className='self-center relative w-[250px] mobile:w-[220px] micro:w-[200px] h-[80px] bg-black flex items-center px-5 micro:px-3 rounded-t-lg rounded-l-lg'>
            <span className='text-[13px] font-["codePro"] pr-10 mobile:pr-6 micro:pr-2'>Hey brainwave, enhance this photo</span>
            <svg className="absolute left-full bottom-0" xmlns="http://www.w3.org/2000/svg" width="26" height="37">
              <path fill='black' d="M21.843 37.001c3.564 0 5.348-4.309 2.829-6.828L3.515 9.015A12 12 0 0 1 0 .53v36.471h21.843z"></path>
            </svg>
          </div>
          <div>
            <h1 className='text-[33px] mobile:text-[30px] micro:text-[25px] mb-5'>Photo editing</h1>
            <p className='text-[17px] mobile:text-[16px] micro:text-[14px] opacity-55'>Automatically enhance your photos using our AI app's photo editing feature. Try it now!</p>
          </div>
        </div>
    </div>
  )
}

export default memo(Page8EditingComp)