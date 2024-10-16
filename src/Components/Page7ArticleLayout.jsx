import React from 'react'

const Page7ArticleLayout = (i) => {
  return (
    <div className='sm:w-[45vw] lgtab:w-[80%] tablet:w-[80%] w-[90%] micro:w-[95%] mx-auto p-[1px] rounded-[30px] overflow-hidden border-[1px] border-[#dadada] border-opacity-15'>
        <div className='w-full h-full bg-[#0E0C16] rounded-[30px] overflow-hidden py-12'>
            <div className='bg-[url("/gridBG.webp")] bg-contain'>
                <div className='flex justify-between items-center micro:items-start micro:flex-col gap-y-3 pl-14 pr-20 md:pr-20 sm:pr-10 mini:px-10 mobile:px-7 micro:px-5'>
                    <div className='text-[12px] font-["codePro"] font-semibold'>[  MAY 2024  ]</div>
                    <div className='flex justify-center items-center micro:self-end gap-x-2 py-[2px] px-4 bg-white rounded-md'>
                        <img src={i.loadingState} alt="releasingState" />
                        <div className='text-black font-["codePro"] text-[14px]'>{i.releasingCon}</div>
                    </div>
                </div>
                <div className='mt-10'>
                    <img src={i.image} />
                </div>
            </div>
            <div className='px-5 xl:px-16 md:px-10 sm:px-8 lgtab:px-14 mini:px-8 md:pb-10 sm:pb-0'>
                <h1 className='text-[35px] leading-[40px] sm:text-[30px] sm:leading-[37px] mobile:text-[30px] mobile:leading-[37px] micro:text-[25px] micro:leading-[30px] my-5'>{i.title}</h1>
                <p className='md:text-[17px] leading-[23px] mobile:text-[15px] mobile:leading-[21px] micro:text-[14px] micro:leading-[20px] opacity-30'>{i.content}</p>
            </div>
        </div>
    </div>
  )
}

export default Page7ArticleLayout