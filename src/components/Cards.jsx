import React from 'react'

function Cards() {
  return (
    <div className='w-full min-h-screen flex flex-col lg:flex-row gap-5 items-center px-6 sm:px-10 md:px-16 lg:px-24 bg-zinc-900 py-10 lg:py-0'>
      
      {/* Left Card */}
      <div className='cardcontainer w-full lg:w-1/2 h-[40vh] sm:h-[45vh] md:h-[50vh]'>
        <div className='card relative w-full h-full rounded-xl bg-[#004D43] flex items-center justify-center'>
          <img className='w-24 sm:w-28 md:w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg' alt='' />
          <button className='absolute left-5 sm:left-8 bottom-5 sm:bottom-8 px-4 sm:px-5 py-1 border border-white rounded-full text-xs sm:text-sm'>&copy;2025-2026</button>
        </div>
      </div>

      {/* Right Cards */}
      <div className='cardcontainer flex flex-col sm:flex-row gap-5 w-full lg:w-1/2 h-[40vh] sm:h-[45vh] md:h-[50vh]'>
        
        <div className='card relative w-full sm:w-1/2 h-full rounded-xl bg-[#192826] flex items-center justify-center'>
          <img className='w-24 sm:w-28 md:w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo002.svg' alt='' />
          <button className='absolute left-5 sm:left-8 bottom-5 sm:bottom-8 px-3 sm:px-4 py-1 text-xs sm:text-sm border border-white rounded-full capitalize'>Rating 5.0</button>
        </div>

        <div className='card relative w-full sm:w-1/2 h-full rounded-xl bg-[#192826] flex items-center justify-center'>
          <img className='w-24 sm:w-28 md:w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo003.png' alt='' />
          <button className='absolute left-5 sm:left-8 bottom-5 sm:bottom-8 px-3 sm:px-4 py-1 text-xs sm:text-sm border border-white rounded-full capitalize'>2025-2026</button>
        </div>
      </div>
    </div>
  )
}

export default Cards

export default Cards
