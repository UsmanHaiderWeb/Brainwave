import React, { memo } from 'react'
import SignupBTNcomponent from './SignupBTNcomponent'
import LandingPage from './LandingPage'
import Page2 from './Page2'
import ServeringInCompanies from './ServeringInCompanies'
import BglineComponent from './BglineComponent'
import Page3 from './Page3'
import Page4 from './Page4'
import Page6 from './Page6'
import Page9 from './Page9'
import Page7 from './Page7'
import Page8 from './Page8'

const MainContent = (i) => {
  return (
    <main className={`w-full ${i.isSideBarOpen ? "hidden": "flex"} justify-center items-center flex-col overflow-hidden`}>
      <div className='w-full relative bg-cover min-h-screen'>
        <div className='block w-full h-full absolute z-[2] top-0 left-0'>
          <img src="/BG1.webp" alt="Background Robot Image" className='w-full h-full object-cover lg:object-[center_10%] object-center' />
        </div>
        <BglineComponent />
        <LandingPage />
        <Page2 />
        <ServeringInCompanies />
      </div>
      <div data-scroll-section className='w-full relative z-[10] pt-20 bg-[#0E0C16]'>
        <Page3 />
      </div>
      <div className='relative z-[11] w-full bg-[#0E0C16] pt-20 lg:px-28 md:px-10 px-8 micro:px-3 mobile:px-5'>
        <Page4 />
      </div>
      <div className='relative z-[13] w-full bg-[#0E0C16]'>
        <Page6 />
      </div>
      <div className='relative z-[14] w-full bg-[#0E0C16]'>
        <Page7 />
      </div>
      <div className='relative z-[16] w-full bg-[#0E0C16]'>
        <Page8 />
      </div>
      <div className='relative z-[16] w-full bg-[#0E0C16]'>
        <Page9 />
      </div>
    </main>
  )
}

export default memo(MainContent)