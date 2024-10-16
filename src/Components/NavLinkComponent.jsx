import React, { memo } from 'react'

const NavLinkComponent = (i) => {
  return (
    <a href={i.link} className='text-[12px] font-extrabold font-["codePro"] opacity-55 hover:opacity-100 p-4'>{i.name}</a>
  )
}

export default memo(NavLinkComponent)