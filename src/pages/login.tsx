import React from 'react'
import Logo from 'src/lib/assets/logo.svg'
import { BsDiscord, BsTelegram, BsInstagram, BsFacebook, BsYoutube, BsGoogle } from 'react-icons/bs'
import Link from 'next/link'

type Props = {}

const login = (props: Props) => {
  return (
    <div className='h-screen flex bg-[#f5f5f5]'>
      <div className='w-[70%] h-full'>
        <Link href='/' className='fixed flex p-6 text-3xl items-center text-gray-700 font-semibold'>
          <Logo className="w-10 h-10 mr-2" />
          CodeG
        </Link>
        <div className='flex flex-col w-full h-full gap-8 justify-center items-center'>
          <h1 className='font-bold text-5xl'>Login to your account</h1>
          <div className='flex flex-col gap-8 w-full max-w-lg justify-center items-center px-4'>
            {/* <h5 className='text-[#555a59] text-xl'>Login using social networks</h5>
            <div>
              <BsGoogle className='h-5 w-auto' />
            </div> */}
            <div className='flex flex-col gap-4 w-full'>
              <input type="email" placeholder='Email' className='font-semibold bg-[#e0eae6] px-5 py-3 w-full rounded-2xl' />
              <input type="password" placeholder='Password' className='font-semibold bg-[#e0eae6] px-5 py-3 w-full rounded-2xl' />
            </div>
            <button className='text-white px-24 mx-4 py-3 font-semibold rounded-full bg-[#3cc6a5]'>Sign In</button>
          </div>
        </div>
      </div>
      <div className='w-[30%] bg-black h-full'></div>
    </div>
  )
}

export default login