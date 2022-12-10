import Link from 'next/link'
import React from 'react'
import Logo from 'src/lib/assets/logo.svg'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='sticky top-0 grid grid-flow-col grid-cols-2 text-[#00ffc2] bg-[#303136] text-xl py-4 px-8'>
      <ul className='flex gap-4'>
        <button>Home</button>
        <button>About</button>
        <button>Team</button>
        <button>Practice</button>
      </ul>
      <Link href="/" className='text-4xl flex font-semibold'>
        <Logo className="w-10 h-10 mr-2"/>
        <span className='text-white'>Code</span><span>G</span>
      </Link>
      <div className='flex gap-2'>
        <button className='px-4 hover:underline'>Sign In</button>
        <button className='border-2 px-4 rounded-md hover:bg-[#00ffc3] hover:text-[#303136] ease-in duration-100'>Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar