import Link from 'next/link'
import React from 'react'
import Logo from 'src/lib/assets/logo.svg'

type Props = {}

const MainCard = (props: Props) => {
  return (
    <div className='flex flex-col lg:flex-row text-white pt-6 pb-52 items-center justify-center' style={{ background: "radial-gradient(1100px 100px at bottom,#f0f0f0 99%,#141519 100%)" }}>
      <div className='lg:w-1/2 px-auto lg:px-16 py-10 flex flex-col'>
        <div className='flex flex-col sm:items-start items-center'>
          <p className='text-[90px] sm:text-[140px] leading-10 font-bold'>Code</p>
          <p className='text-[84px] sm:text-[128px]'>Geeks</p>
          <p className='text-xl sm:text-3xl font-light'>Code your way to success !</p>
        </div>
        {/* <Link href={'/battle'} className='w-[260px] sm:w-[345px] font-semibold mt-4 text-sm sm:text-base bg-[#00ffc3] py-2 px-4 sm:px-8 rounded-md text-[#303136] hover:shadow-xl'>Code Battle</Link> */}
        <div className='flex gap-4 pt-4 font-semibold text-lg justify-center sm:justify-start'>
          <Link
            className='text-sm sm:text-base border-2 hover:border-transparent py-2 px-4 sm:px-8 rounded-md hover:bg-[#00ffc3] hover:text-[#303136] ease-in duration-100'
            target='_blank'
            href={'/ide'}
          >
            CodeG IDE
          </Link>
          <Link
            className='text-sm sm:text-base bg-[#00ffc3] py-2 px-4 sm:px-8 rounded-md text-[#303136] hover:shadow-xl'
            target='_blank'
            href={'/practice'}
          >
            Problem Solving
          </Link>
        </div>
      </div>
      <div className='hidden overflow-hidden sm:flex items-center justify-center lg:w-1/2'>
        <div className='relative border-2 rounded-full p-2'>
          <div className='p-16 rounded-full animate-[spin_20s_linear_infinite]' style={{ background: "linear-gradient(to left, #00ffc3 50%, transparent 50%)" }}>
            <div className='bg-[#1E1F25] p-16 rounded-full shadow-xl w-80 h-80'>
            </div>
          </div>
          <Logo className='absolute top-32 left-32 w-52 h-52' />
        </div>
      </div>
    </div>
  )
}

export default MainCard