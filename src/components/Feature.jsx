import { motion, useAnimation } from 'framer-motion'
import React from 'react'

function Feature() {
  const cards = [useAnimation(), useAnimation()]

  const handleHover = (index) => {
    cards[index].start({ y: "0" })
  }
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" })
  }

  return (
    <div className='w-full py-10 sm:py-16 md:py-20'>
      {/* Header */}
      <div className='w-full px-6 sm:px-10 border-b border-zinc-700 pb-10 sm:pb-16 md:pb-20'>
        <h1 className='text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-["Neue Montreal"] tracking-tight'>
          Feature Project
        </h1>
      </div>

      {/* Cards Section */}
      <div className='px-6 sm:px-10'>
        <div className='cards w-full flex flex-col lg:flex-row gap-8 sm:gap-10 mt-10'>

          {/* CARD 1 */}
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className='cardcontainer relative w-full lg:w-1/2 h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[75vh] rounded-xl overflow-hidden'
          >
            <h1 className='absolute flex left-full -translate-x-1/2 top-1/2 ml-3 sm:ml-5 -translate-y-1/2 text-[#c8ff03] z-[9] text-4xl sm:text-5xl md:text-6xl font-bold leading-none tracking-tighter overflow-hidden'>
              {"FYDE".split('').map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                  className='inline-block'
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className='card w-full h-full overflow-hidden rounded-xl'>
              <img
                className='w-full h-full object-cover bg-cover'
                src='https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-1326x1101.png'
                alt=''
              />
            </div>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className='cardcontainer relative w-full lg:w-1/2 h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[75vh] rounded-xl overflow-hidden'
          >
            <div className='card w-full h-full overflow-hidden rounded-xl'>
              <h1 className='absolute flex overflow-hidden right-full translate-x-1/2 top-1/2 mr-3 sm:mr-5 -translate-y-1/2 text-[#c8ff03] z-[9] text-4xl sm:text-5xl md:text-6xl font-bold leading-none tracking-tighter'>
                {"VISE".split('').map((item, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: "100%" }}
                    animate={cards[1]}
                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                    className='inline-block'
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <img
                className='w-full h-full object-cover bg-cover'
                src='https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-1326x1101.png'
                alt=''
              />
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}

export default Feature

