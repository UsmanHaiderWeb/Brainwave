import React, { memo, useEffect } from 'react'
import { motion } from 'framer-motion'

const Loader = (i) => {
  useEffect(() => {
    let interval = setTimeout(() => {
      i.hidingLoader(false)
    }, 8000)
  })

  return (
    <motion.div animate={{opacity: 0, transition: {delay: 8.5, duration: 0.12}}} className='w-full h-screen flex justify-center items-center relative z-[110] bg-[#000000] pointer-events-none'>
      <img src="/logo.svg" className='w-20 pointer-events-none' />
    </motion.div>
  )
}

export default memo(Loader)