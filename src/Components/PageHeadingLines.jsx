import React from 'react'

const PageHeadingLines = (i) => {
  return (<>
        <h4 className='text-center text-[14px] font-["codePro"] font-semibold uppercase opacity-50 my-10 mobile:px-5 micro:px-3'>{i.line}</h4>
        <h1 className="w-full tablet:w-[70%] mini:w-[75%] mobile:w-[80%] micro:w-[90%] mx-auto text-center md:text-[50px] md:leading-[60px] text-[45px] leading-[55px] mobile:text-[37px] mobile:leading-[48px]  micro:text-[30px] micro:leading-[40px]">{i.title}</h1>
  </>)
}

export default PageHeadingLines