import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUp } from "react-icons/fa6";

function LandingPage() {
    return (
      <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen  pt-1 bg-zinc-900 overflow-hidden'>
            <div className='textstructure mt-54 px-20'>
                {["we create", "eye opening", "presentations"].map((item, index) => {
                  return (
                    <div className='masker font-["Neue Montreal"]' key={index}>
                      <div className='w-fit flex items-center'>
                        {index === 1 && (<motion.div initial={{ width: 0 }} animate={{ width: "9vw" }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 1}} className='mr-[1vw] rounded-md w-[9vw] h-[5.5vw] mt-[12.5px] relative'>
                          <img className='w-full h-full ' src='https://imgs.search.brave.com/w32qKa12A_ybrav3axi3Au3__NEkltEwTltCCDi4y5k/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvY3JlZGl0X2Nh/cmQvY3JlZGl0X2Nh/cmRfUE5HMjQucG5n'></img>
                        </motion.div>)}
                      <h1 className="uppercase text-[7.5vw] leading-[7vw] tracking-tighter font-['Founders Grotesk x Condensed'] font-bold ">
                          {item}
                      </h1>
                      </div>
                    </div>
                  )
                })}
            </div>
            <div className='border-t-[2px] border-zinc-800 mt-5 flex justify-between items-center py-5 px-20'>
              {["for public and private companies", "for the first pitch to IPO",].map((item, index) => {
                return (
                  <p className='text-md font-light tracking-tight leading-none' key={index}>
                    {item}
                  </p>
                )
              })}
              <div className='start flex items-center gap-5'>
                <div className='px-5 py-2 border-[1px] border-zinc-400 rounded-full font-light text-md uppercase'>start the project</div>
            <div className='w-10 h-10 rounded-full  border-[1px] border-zinc-500 flex items-center justify-center '>
              <span className='rotate-[45deg]'>
                  <FaArrowUp />
              </span>
                </div>
              </div>
            </div>
        </div>
    );
}


export default LandingPage;
