import { motion, useAnimation } from 'framer-motion'
import React, { useState } from 'react'

function Feature() {

  const cards = [useAnimation(), useAnimation()]

    const handleHover = (index) => {
       cards[index].start({ y: "0" })
    }
    const handleHoverEnd = (index) => {
        cards[index].start({ y: "100%" })
    }

    
    return (
        <div className='w-full py-20 '>
            <div className='w-full px-10 border-b-[1px] pb-20 border-zinc-700'>
                <h1 className='text-8xl font-["Neue Montreal"] tracking-tight '>Feature Project</h1>

            </div>
            <div className='px-10'>
                <div className='cards w-full flex gap-10 mt-10 '>
                    <motion.div onHoverStart={() => handleHover(0)} onHoverEnd={() => handleHoverEnd(0)} className='cardcontainer relative w-1/2 h-[75vh] rounded-xl'>
                    <h1 className='absolute flex left-full -translate-x-1/2 top-1/2 ml-5 -translate-y-1/2 text-[#c8ff03] z-[9] text-5xl font-bold leading-none tracking-tighter overflow-hidden'>
                            {"FYDE".split('').map((item, index) => <motion.span initial={{y: "100%"}} animate={cards[0]} transition={{ease: [0.22, 1, 0.36, 1], delay: index*.1}} className='inline-block'>{item}</motion.span>)}
                    </h1>
                        <div className='card w-full h-full  overflow-hidden  rounded-xl'>
                            <img className='w-full h-fullbg-cover' src='https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-1326x1101.png' alt='' />
                        </div>
                    </motion.div>
                    <motion.div onHoverStart={() => handleHover(1)} onHoverEnd={() => handleHoverEnd(1)} className='cardcontainer relative w-1/2 h-[75vh] rounded-xl \'>
                        <div className='card w-full h-full  overflow-hidden  rounded-xl'>
                        <h1 className='absolute flex overflow-hidden right-full translate-x-1/2 top-1/2 mr-5 -translate-y-1/2 text-[#c8ff03] z-[9] text-5xl font-bold leading-none tracking-tighter'>
                                {"VISE".split('').map((item, index) => <motion.span initial={{ y: "100%" }} animate={cards[1]} transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .1 }} className='inline-block'>{item}</motion.span>)}
                        </h1>
                            <img className='w-full h-fullbg-cover' src='https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-1326x1101.png' alt='' />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Feature
