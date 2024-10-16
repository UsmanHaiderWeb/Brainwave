import React, { memo } from 'react'

const Page6 = () => {
  return (
    <div className='w-full h-[660px] relative'>
        <div className='w-full h-full flex justify-center items-center relative z-[14]'>
            <img src="sprinkle.webp" alt="Sprinkle" className='w-[260px]' />
        </div>
        <div className='absolute top-0 left-0 z-[13] w-full h-[700px] md:h-full flex justify-center items-center'>
            <img src="dotsBG.svg" alt="Dotted Background" className='sm:w-[70%] w-full h-full object-contain sm:scale-100 scale-150' />
        </div>
    </div>
  )
}

export default memo(Page6)