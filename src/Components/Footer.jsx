import React, { memo } from 'react'

const Footer = () => {
  return (
    <footer className='w-full flex justify-between items-center px-10 md:px-24 sm:px-14 mobile:px-5 micro:px-3 overflow-hidden bg-[#0E0C16] py-2'>
      <div className='w-full relative flex justify-center sm:justify-between lgtab:justify-between items-center gap-x-10 gap-y-3 flex-wrap py-10'>
        <div className='text-[13px] font-["codePro"] text-center'><span className='scale-150 translate-y-[2px]'>©</span> 2024. All rights reserved.</div>
        <div className='flex justify-center items-center flex-wrap gap-x-3'>
          <div className='w-10 h-10 rounded-full bg-white bg-opacity-5 hover:bg-opacity-15 flex justify-center items-center'>
            <img src="/discordFooter.svg" alt="discord" />
          </div>
          <div className='w-10 h-10 rounded-full bg-white bg-opacity-5 hover:bg-opacity-15 flex justify-center items-center'>
            <img src="/insta.svg" alt="discord" />
          </div>
          <div className='w-10 h-10 rounded-full bg-white bg-opacity-5 hover:bg-opacity-15 flex justify-center items-center'>
            <img src="/twitter.svg" alt="discord" />
          </div>
          <div className='w-10 h-10 rounded-full bg-white bg-opacity-5 hover:bg-opacity-15 flex justify-center items-center'>
            <img src="/plane.svg" alt="discord" />
          </div>
          <div className='w-10 h-10 rounded-full bg-white bg-opacity-5 hover:bg-opacity-15 flex justify-center items-center'>
            <img src="/facebook.svg" alt="discord" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default memo(Footer)