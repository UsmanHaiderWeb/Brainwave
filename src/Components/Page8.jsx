import React, { memo } from 'react'
import PageHeadingLines from './PageHeadingLines'
import Page8GenerativeEX1 from './Page8GenerativeEX1'
import Page8EditingComp from './Page8EditingComp'
import Page8VideoGen from './Page8VideoGen'

const Page8 = () => {
  return (
    <div className='my-28'>
        <PageHeadingLines line="[  Brainwave unlocks the potential of AI-powered applications  ]" title="World of Generative AI" />
        <div className='w-full mt-20 sm:px-14 px-4 micro:px-2 overflow-hidden'>
            <Page8GenerativeEX1 />
        </div>
        <div className='w-full flex justify-center items-center sm:flex-nowrap flex-wrap gap-5 mt-5'>
          <Page8EditingComp />
          <Page8VideoGen />
        </div>
    </div>
  )
}

export default memo(Page8)