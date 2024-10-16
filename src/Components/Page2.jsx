import React, { memo } from 'react'
import AIisGenerating from './AIisGenerating'

const Page2 = () => {
  return (
    <div className='w-full flex justify-center items-center relative z-[6]'>
        <div className='md:w-[72%] h-[580px] sm:w-[80%] lgtab:w-[90%] tablet:w-[90%] tablet:h-[500px] mini:w-[90%] mini:h-[430px] mobile:w-[95%] mobile:h-[400px] micro:w-[95%] micro:h-[380px] relative flex justify-center items-start rounded-xl overflow-hidden p-[2px]' style={{background: "conic-gradient(from 225deg,#ffc876,#79fff7,#9f53ff,#ff98e2,#ffc876)"}}>
          <div className='w-full h-[calc(92%-30px)] bg-[#43435C] relative z-[8] rounded-xl'>
            <div className='relative z-[8] w-full h-full sm:translate-y-[30px] translate-y-5 rounded-b-xl overflow-hidden'>
              <img src="/robot-idimR07Z.webp" alt="Robot" className='w-full h-full object-[80%_38%] scale-150 sm:scale-100 lgtab:scale-110 tablet:object-[center_20%] mini:object-[center_20%] mobile:object-[center_20%] micro:object-[center_20%] object-cover' />
            </div>
          </div>
          <div className='absolute z-[7] top-0 left-1/2 -translate-x-1/2 w-[90%] sm:h-[95.5%] h-[94.5%] rounded-xl bg-[#1B1B2E]'>
          </div>
          <div className='absolute z-[6] top-0 left-1/2 -translate-x-1/2 w-[80%] h-[99%] rounded-xl bg-[#5C4949]'>
          </div>
            <AIisGenerating bottom="bottom-20 micro:bottom-14" width="" />
        </div>
        <ul data-scroll data-scroll-speed="-0.15" className='sm:flex hidden absolute z-[9] top-1/2 left-0 translate-x-[30%] justify-center items-center gap-x-12 p-8 rounded-2xl bg-zinc-700 backdrop-blur-[5px] bg-opacity-50'>
          <li>
            <img src="/sound.svg" alt="plusicon" />
          </li>
          <li>
            <img src="/playlistIcon.svg" alt="playlisicon" />
          </li>
          <li>
            <img src="/searchIcon.svg" alt="searchicon" />
          </li>
          <li>
            <img src="/plusIcon.svg" alt="plusicon" />
          </li>
        </ul>
        <div data-scroll data-scroll-speed="-0.22" className='sm:flex hidden absolute z-[9] top-[30%] right-0 -translate-x-[30%] justify-center items-center gap-x-5 p-5 rounded-2xl bg-zinc-700 backdrop-blur-[5px] bg-opacity-50'>
          <div>
            <img src="bg.webp" alt="articlemainImg" className='rounded-xl w-16' />
          </div>
          <div>
            <h4 className=' font-semibold'>Code generation</h4>
            <div className='flex justify-between items-center gap-x-7 mt-1'>
              <div className='flex justify-center items-center gap-x-1'>
                <img src="articleIMG1.png" alt="articleIMG1" className='rounded-full w-6' />
                <img src="articleIMG2.png" alt="articleIMG2" className='rounded-full w-6' />
                <img src="articleIMG3.png" alt="articleIMG3" className='rounded-full w-6' />
              </div>
              <div className='text-[14px] font-["codePro"] font-semibold opacity-50'>1m ago</div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default memo(Page2)