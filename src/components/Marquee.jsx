import React from 'react'
import {motion} from 'framer-motion'

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-20 overflow-hidden rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
      <div className='text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap'>
        <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "linear", duration: 5}} className='text-[17vw] leading-none font-["Founders Grotesk"] font-bold uppercase pt-10 mb-[7vw]'>we are ochi </motion.h1>
        <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "linear", duration: 5}} className='text-[17vw] leading-none font-["Founders Grotesk"] font-bold uppercase pt-10 mb-[7vw]'>we are ochi </motion.h1>
      </div>
  </div>
  ) 
}

export default Marquee;
