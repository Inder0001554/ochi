import React from 'react'

function About() {
  return (
    <div className="w-full p-6 sm:p-10 md:p-16 lg:p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className='font-["Neue Montreal"] text-[6vw] sm:text-[5vw] md:text-[4.5vw] leading-[7vw] sm:leading-[5vw] md:leading-[4.5vw] tracking-tight'>
        Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
      </h1>

      <div className='w-full border-t-[2px] border-[#a1b562] mt-10 sm:mt-16 md:mt-20 pt-6 sm:pt-8 md:pt-10 flex flex-col lg:flex-row gap-10 lg:gap-0'>
        <div className='w-full lg:w-1/2'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Our approach:</h1>
          <button className='px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 bg-zinc-900 rounded-full text-white mt-6 sm:mt-8 md:mt-10 flex gap-4 sm:gap-6 md:gap-8 items-center'>
            Read More
            <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
          </button>
        </div>

        <div className='w-full lg:w-1/2 h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] rounded-3xl bg-[#b0c859]'>
          <img 
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" 
            alt="" 
            className='w-full h-full object-cover rounded-3xl' 
          />
        </div>
      </div>
    </div>
  )
}

export default About
