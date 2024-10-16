import React, { memo } from 'react'
import GetStartedBTNcomp from './GetStartedBTNcomp'

const PricingSection = (i) => {
  return (
    <div className='w-[90%] micro:w-[95%] xl:w-[385px] lg:w-[340px] sm:w-[370px] border-[1px] border-[#dadada] border-opacity-15 rounded-[30px] mini:rounded-[23px] mobile:rounded-[15px] micro:rounded-[15px] px-7 mobile:px-5 micro:px-3 py-5'>
        <h2 className={`${i.headColor} text-[35px] my-4`}>{i.title}</h2>
        <p className='max-w-[250] w-[80%] mobile:w-[85%] micro:w-[90%] opacity-35'>{i.headCon}</p>
        <div className='flex justify-start items-center'>
            {i.price && <> 
                <div className='text-[35px] font-medium'>$</div>
                <div className='text-[90px] font-medium'>{i.price}</div>
            </>}
        </div>
        <GetStartedBTNcomp link="#" />
        <div>
            {i.content.map((j, idx) => (
                <div key={`${j} ${idx}`} className='w-full flex justify-start items-start gap-x-3 border-t-[1px] border-t-[#dadada] border-opacity-35 py-4'>
                    <div className='w-[30px]'>
                        <img src="tick.svg" alt="tickSVG" width={30} />
                    </div>
                    <p className='micro:text-[14px]'>{j}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default memo(PricingSection)