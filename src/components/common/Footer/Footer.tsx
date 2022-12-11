import Link from 'next/link'
import React from 'react'
import { BsDiscord,BsTelegram, BsInstagram, BsFacebook, BsYoutube } from 'react-icons/bs'

type Props = {
  className: string
}

const Footer = (props: Props) => {
  return (
    <div className={props.className}>
      <div className='bg-[#4b4b4b] text-white rounded-t-lg mx-4 font-bold flex py-4 px-14 justify-between'>
        <ul className='flex gap-6'>
          <li>&#169; 2021 CodeG</li>
          <Link href="">Terms</Link>
          <Link href="">Privacy</Link>
          <Link href="">Contact</Link>
        </ul>
        <div className='flex items-center gap-4'>
          <Link href="https://discord.com/invite/bDnc3YHuzt"><BsDiscord className='h-5 w-auto'/></Link>
          <Link href="https://t.me/+Ng8agKRkV21jOWZl"><BsTelegram className='h-5 w-auto'/></Link>
          <Link href="https://www.instagram.com/codegofficial/"><BsInstagram className='h-5 w-auto'/></Link>
          <BsFacebook className='h-5 w-auto'/>
          <BsYoutube className='h-5 w-auto'/>
        </div>
      </div>
    </div>
  )
}

Footer.defaultProps = {
  className: ""
}

export default Footer