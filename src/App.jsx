import LocomotiveScroll from 'locomotive-scroll';
import React, { memo, useState } from 'react'
import Header from './Components/Header'
import MainContent from './Components/MainContent'
import Loader from './Components/Loader'
import Footer from './Components/Footer'
import Sidebar from './Components/Sidebar';

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  const [isSideBarOpen, toggleSideBar] = useState(false);
  

  return (
    <div data-scroll-container className='bg-black w-full h-[max-content]'>
      <Header isSideBarOpen={isSideBarOpen} toggleSideBar={toggleSideBar} />
      <Sidebar isSideBarOpen={isSideBarOpen} />
      <MainContent isSideBarOpen={isSideBarOpen} />
      <Footer />
    </div>
  )
}

export default memo(App)