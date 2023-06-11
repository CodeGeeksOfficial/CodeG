import Link from 'next/link'
import React from 'react'
import Robot404 from 'src/lib/assets/icons/robot-404.svg'

type Props = {}

const BattleNotFoundScreen = (props: Props) => {
  return (
    <div className='flex justify-between px-20 items-center h-screen'>
      <div>
        <p className='text-5xl leading-[60px] font-bold'>Page 404<br /> Not Found</p>
        <p className='opacity-70 pt-2'>You didn&#39;t break the internet. But we can&#39;t find what you&#39;re looking for.</p>
        <Link href='/battle' className='mt-10 px-6 py-2 rounded-lg bg-blue-700 flex w-fit'>Battle Home</Link>
      </div>
      <div className='w-2/5'>
        <Robot404 />
      </div>
    </div>
  )
}

export default BattleNotFoundScreen