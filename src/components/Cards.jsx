import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen flex gap-5 items-center px-25 bg-zinc-900'>
          <div className='cardcontainer w-1/2 h-[50vh]'>
              <div className='card relative w-full h-full rounded-xl bg-[#004D43] flex items-center justify-center'>
                  <img className='w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg' />
                  <button className='absolute left-10 bottom-10 px-5 py-1 border-1 rounded-full'>&copy;2025-2026</button>
          </div>
      </div>
          <div className='cardcontainer flex gap-5 w-1/2 h-[50vh]'>
              <div className='card relative w-1/2 h-full rounded-xl bg-[#192826] flex items-center justify-center'>
                  <img className='w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo002.svg' />
                  <button className='absolute left-10 bottom-10 px-2 py-1 ml-3 text-sm border-1 rounded-full capitalize'>Rating 5.0 </button>
              </div>
              <div className='card relative w-1/2 hfull rounded-xl bg-[#192826] flex items-center justify-center'>
                  <img className='w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo003.png'/>
          <button className='absolute left-10 bottom-10 px-2 py-1 text-sm border-1 rounded-full capitalize'>2025-2026</button>
                  </div>
          </div>
    </div>
  )
}

export default Cards
