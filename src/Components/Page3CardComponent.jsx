import React from 'react'

const Page3CardComponent = (i) => {
  return (
    <div className='relative rounded-lg overflow-hidden' style={{boxShadow: "0px 0px 100px 0px #120E22"}}>
        <div className='absolute top-0 left-0 w-full h-full'>
            <img src={i.bgImgLink} alt="Page3ArticleBG" className='w-full h-full object-cover' />
        </div>
        <div className='sm:w-[350px] lgtab:w-[44vw] tablet:w-[44vw] mini:w-[80vw] mobile:w-[86vw] w-[90vw] h-[360px] tablet:h-[340px] mobile:h-[340px] micro:h-[320px] flex justify-between items-start flex-col px-5 py-10 relative bg-[#0E0D14] hover:bg-opacity-65 duration-200'>
            <div>
                <h1 className='text-[25px] leading-[33px] micro:text-[20px] micro:leading-[27px] mb-5'>{i.title}</h1>
                <p className='opacity-70 sm:text-[16px] lgtab:text-[16px] mini:text-[16px] text-[14px]'>{i.con}</p>
            </div>
            <div className='w-full flex justify-between items-center'>
                <div>
                    <img src={i.svg} alt="comment SVG" className='micro:w-10' />
                </div>
                <a href={i.link} className='flex justify-center items-center gap-x-3'>
                    <div className='font-["codePro"] text-[13px] font-semibold'>EXPLORE MORE</div>
                    <div>
                        <svg width="24" height="24" fill='white'>
                            <path d="M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414z"></path>
                        </svg>
                    </div>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Page3CardComponent