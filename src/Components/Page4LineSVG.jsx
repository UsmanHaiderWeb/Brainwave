import React, { memo } from 'react'

const Page4LineSVG = (i) => {
return (
    <div className={`absolute top-1/2 -translate-y-1/2 left-1/2 w-1/2 origin-left ${i.rotate} flex justify-end items-center`}>
        <div className={`flex justify-center items-center p-1 border-[1px] border-[#dadada] border-opacity-35 rounded-lg overflow-hidden w-12 h-11 bg-[#15131D] translate-x-1/2 ${i.rotateIMG}`}>
            <img src={i.imgPath} className='w-full h-full object-contain' />
        </div>
    </div>
)}

export default memo(Page4LineSVG)