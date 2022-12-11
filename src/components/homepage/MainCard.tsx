import React from 'react'
import Logo from 'src/lib/assets/logo.svg'

type Props = {}

const MainCard = (props: Props) => {
  return (
    <div className='flex flex-col lg:flex-row bg-[#303136] text-white pt-6 pb-40 items-center justify-center' style={{ background: "radial-gradient(1100px 100px at bottom,#ffffff 99%,#303136 100%)" }}>
      <div className='lg:w-1/2 px-auto lg:px-16 py-10 flex flex-col'>
        <div>
          <p className='text-[140px] leading-10 font-bold'>Code</p>
          <p className='text-[128px]'>Geeks</p>
          <p className='text-2xl md:text-3xl font-light'>Code your way to success !</p>
        </div>
        <div className='flex gap-4 pt-4 font-semibold text-lg'>
          <button className='border-2 py-2 px-8 rounded-md hover:bg-[#00ffc3] hover:text-[#303136] ease-in duration-100'>CodeG IDE</button>
          <button className='bg-[#00ffc3] py-2 px-8 rounded-md text-[#303136] hover:shadow-xl'>Join Clubs</button>
        </div>
      </div>
      <div className='hidden overflow-hidden sm:flex items-center justify-center lg:w-1/2'>
        <div className='relative border-2 rounded-full p-2'>
          <div className='p-16 rounded-full animate-[spin_20s_linear_infinite]' style={{ background: "linear-gradient(to left, #00ffc3 50%, transparent 50%)" }}>
            <div className='bg-[#363940] p-16 rounded-full shadow-xl w-80 h-80'>
            </div>
          </div>
          <Logo className='absolute top-32 left-32 w-52 h-52' />
        </div>
      </div>
    </div>
  )
}

export default MainCard