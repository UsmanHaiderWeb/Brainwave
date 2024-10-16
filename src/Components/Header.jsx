import React, { memo } from 'react'
import SignupBTNcomponent from './SignupBTNcomponent'
import NavLinkComponent from './NavLinkComponent'
import Menu from './Menu'

const Header = (i) => {
  return (
    <header className={`${i.isSideBarOpen ? "fixed" : "absolute"} top-0 left-0 w-full z-[100]`}>
        <nav className='py-5 px-10 mobile:px-3 micro:px-3 flex justify-between items-center backdrop-blur-[2px] border-b border-b-[#dadada] border-opacity-15'>
            <div className='flex justify-center items-center gap-x-3 micro:gap-x-2'>
                <div>
                    <img src="/logo.svg" className='micro:w-10' />
                </div>
                <div className='text-[25px] micro:text-[20px] font-bold'>Brainwave</div>
            </div>
            <div className='hidden md:flex justify-center items-center lg:gap-x-9 md:gap-x-5'>
                <NavLinkComponent name="FEATURES" link="#" />
                <NavLinkComponent name="PRICING" link="#" />
                <NavLinkComponent name="HOW TO USE" link="#" />
                <NavLinkComponent name="ROADMAP" link="#" />
            </div>
            <div className='hidden md:flex justify-center items-center gap-x-5'>
                <NavLinkComponent name="NEW ACCOUNT" link="#" />
                <SignupBTNcomponent text="Sign up" />
            </div>
            <Menu isSideBarOpen={i.isSideBarOpen} toggleSideBar={i.toggleSideBar} />
        </nav>
    </header>
  )
}

export default memo(Header)