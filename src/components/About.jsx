import React from 'react'

function About() {
  return (
    <div className="width-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className='font-["Neue Montreal"] text-[4.5vw] leading-[4.5vw] tracking-tight'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
      <div className='w-full border-t-[2px] border-[#a1b562] mt-20 pt-10 flex'>
        <div className='w-1/2'>
        <h1 className='text-7xl'>Our approach:</h1>
        <button className='px-10 py-6 bg-zinc-900 rounded-full text-white mt-10 flex gap-8 items-center'>Read More
          <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
        </button>
        </div>
        <div className='w-1/2 h-[70vh] rounded-3xl bg-[#b0c859]'>
          <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" className='w-full h-full object-cover rounded-3xl' />
        </div>
      </div>
    </div>
  )
}

export default About
