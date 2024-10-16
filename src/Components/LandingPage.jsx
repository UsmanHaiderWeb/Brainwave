import React, { memo } from 'react'
import GetStartedBTNcomp from './GetStartedBTNcomp'

const LandingPage = () => {
  return (
    <div className='relative z-[4] w-full flex justify-center items-center flex-col pt-44 pb-20 micro:pb-10 mobile:pb-12 mini:pb-14 tablet:pb-16'>
        <div className='w-full flex justify-center items-center flex-col'>
          <h1 className='md:w-[800px] sm:w-[90%] lgtab:w-[90%] mini:w-[99%] mobile:w-[96%] micro:w-[98%] sm:text-[50px] sm:leading-[60px] lgtab:text-[45px] lgtab:leading-[55px] tablet:text-[40px] tablet:leading-[50px] mini:text-[35px] mini:leading-[40px] mobile:text-[34px] mobile:leading-[37px] mobile:px-[10vw] micro:text-[33px] micro:leading-[37px] font-semibold text-center'>
              Explore the Possibilities <br /> of AI Chatting with &nbsp;
              <span className='bg-[url("/line.webp")] bg-contain bg-no-repeat bg-bottom pb-3'>Brainwave</span>
          </h1>
          <p className='sm:w-[700px] w-[80%] mobile:w-[93%] micro:w-[95%] text-center sm:text-[20px] lgtab:text-[18px] micro:text-[13px] my-4 opacity-70'>Unleash the power of AI within Brainwave. Upgrade your productivity with Brainwave, the open AI chat app.</p>
          <div className='w-[150px] my-5'>
            <GetStartedBTNcomp link="#" />
          </div>
        </div>
        <div className='absolute top-0 left-0 w-full h-full z-[3] translate-y-[15%]'>
          <img src="/dotsBG.svg" alt="Dotted BG" className='w-full h-full object-cover' />
        </div>
    </div>
  )
}

export default memo(LandingPage)