import React, { memo } from 'react'

const Page8SVGcomp = (i) => {
  return (
    <div className='bg-[#252134] w-14 h-14 mobile:w-11 mobile:h-11 micro:w-9 micro:h-9 flex justify-center items-center rounded-xl'>
        <img src={i.link} alt="svg" className='micro:w-5' />
    </div>
  )
}

export default memo(Page8SVGcomp)