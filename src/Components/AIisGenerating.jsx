import React, { memo } from 'react'

const AIisGenerating = (i) => {
  return (
    <div className={`sm:w-[500px] w-[80%] absolute z-[9] ${i.bottom} left-1/2 -translate-x-1/2 flex justify-start items-center sm:gap-x-6 gap-x-3 pl-5 py-3 rounded-[50px] bg-zinc-900 bg-opacity-80`}>
        <div>
            <img src="loader.webp" alt="articleLogoImage" className='sm:w-10 w-6' />
        </div>
        <div className='font-["codePro"] sm:text-[16px] text-[13px] font-semibold'>AI is generating</div>
    </div>
  )
}

export default memo(AIisGenerating)