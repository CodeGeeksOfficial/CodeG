import Link from 'next/link'
import React from 'react'

type Props = {
  className: string
}

const Footer = (props: Props) => {
  return (
    <div className={props.className}>
      <div className='bg-[#4b4b4b] text-white rounded-t-lg sm:mx-2 lg:mx-4 font-bold flex py-4 px-14 justify-center lg:justify-between'>
        <ul className='flex gap-2 sm:gap-6 sm:text-base text-sm'>
          <Link href="" className='whitespace-nowrap'>&#169; 2021 CodeG</Link>
          <Link href="">Terms</Link>
          <Link href="">Privacy</Link>
          <Link href="">Contact</Link>
        </ul>
        <div className='hidden lg:flex items-center gap-4'>
          {/* <Link href="https://discord.com/invite/bDnc3YHuzt"><BsDiscord className='h-5 w-auto'/></Link>
          <Link href="https://t.me/+Ng8agKRkV21jOWZl"><BsTelegram className='h-5 w-auto'/></Link>
          <Link href="https://www.instagram.com/codegofficial/"><BsInstagram className='h-5 w-auto'/></Link>
          <BsFacebook className='h-5 w-auto'/>
          <BsYoutube className='h-5 w-auto'/> */}
        </div>
      </div>
    </div>
  )
}

Footer.defaultProps = {
  className: ""
}

export default Footer