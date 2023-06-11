import React from 'react'
import PersonCoding from 'src/lib/assets/icons/person-coding.svg'
import { FaCrown } from 'react-icons/fa'

type Props = {
  battleData: any
}

const BattleEndedScreen = ({ battleData }: Props) => {
  return (
    <div className='py-10 px-20 space-y-4'>
      <div className='w-full flex justify-between items-center bg-zinc-800 rounded-xl px-10'>
        <PersonCoding className="w-96" />
        <div className='space-y-6 text-right'>
          <div className='space-y-2'>
            <p className='text-white font-bold text-3xl leading-[40px]'>
              Battle Concluded<br /> See Who Emerged Victorious!
            </p>
            <p className='text-white opacity-60'>Discover the Champions of the Epic Coding Battle!</p>
          </div>
          <div className='flex gap-2 justify-end items-center'>
            <FaCrown color='yellow' size={30} />
            Image, Name
          </div>
        </div>
      </div>

      <div className='text-white'>
        <p className='font-medium text-gray-200'>Leaderboard:</p>
        <div className='flex py-2 px-4 bg-gray-800 rounded-lg my-2 font-medium'>
          <p className='w-[60%]'>Player</p>
          <p className='w-[20%]'>Rank</p>
          <p className='w-[20%]'>Score</p>
        </div>
      </div>
    </div>
  )
}

export default BattleEndedScreen