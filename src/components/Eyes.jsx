import React, { useEffect, useState } from 'react'

function Eyes() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const deltaX = mouseX - window.innerWidth / 2;
      const deltaY = mouseY - window.innerHeight / 2;

      const angle = Math.atan2(deltaX, deltaY) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className='eyes w-full h-screen overflow-hidden'>
      <div
        data-scroll
        data-scroll-speed="-.7"
        className='relative w-full h-full bg-[url(https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg)] bg-cover bg-center'
      >
        <div className='absolute flex flex-col sm:flex-row gap-6 sm:gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
          
          {/* Left Eye */}
          <div className='flex items-center justify-center w-[35vw] h-[35vw] sm:w-[20vw] sm:h-[20vw] md:w-[15vw] md:h-[15vw] bg-zinc-100 rounded-full'>
            <div className='relative flex items-center justify-center w-2/3 h-2/3 bg-zinc-900 rounded-full'>
              <div
                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                className='mt-4 ml-10 sm:ml-14 md:ml-16 line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-8'
              >
                <div className='w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-zinc-100 rounded-full'></div>
              </div>
            </div>
          </div>

          {/* Right Eye */}
          <div className='flex items-center justify-center w-[35vw] h-[35vw] sm:w-[20vw] sm:h-[20vw] md:w-[15vw] md:h-[15vw] bg-zinc-100 rounded-full'>
            <div className='relative flex items-center justify-center w-2/3 h-2/3 bg-zinc-900 rounded-full'>
              <div
                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                className='mt-4 ml-10 sm:ml-14 md:ml-16 line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-8'
              >
                <div className='w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-zinc-100 rounded-full'></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Eyes
