import React from 'react'
import BglineComponent from './BglineComponent';

const Sidebar = (i) => {
return (
    <div className={`${i.isSideBarOpen ? "block": "hidden"} w-full h-screen relative z-[90] bg-[#0E0C16] overflow-hidden`}>
        <div className='w-full h-full relative z-[14] flex justify-center items-center flex-col text-[35px] micro:text-[30px] pt-14'>
            {["FEATURES", "PRICING", "HOW TO USE", "ROADMAP", "SIGN UP"].map((val, vdx) => {
                return <a href='#' key={val} className='opacity-70 hover:opacity-100 hover:font-extrabold duration-200 cursor-pointer'>{val}</a>
            })}
        </div>
        <BglineComponent />
        <div className='absolute top-0 left-0 z-[13] w-full h-full md:h-full flex justify-center items-center'>
            <img src="dotsBG.svg" alt="Dotted Background" className='sm:w-[70%] w-full h-full object-contain sm:scale-100 scale-150' />
        </div>
    </div>
  )
}

export default Sidebar