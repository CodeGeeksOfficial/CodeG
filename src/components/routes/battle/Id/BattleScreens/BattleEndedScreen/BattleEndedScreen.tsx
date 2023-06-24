import React from 'react'
import PersonCoding from 'src/lib/assets/icons/person-coding.svg'
// import { FaCrown } from 'react-icons/fa'
import useBattleEndedScreenHook from './useBattleEndedScreenHook'
import BattleListingCardSkeletonLoader from '../../../index/BattleListingCard/BattleListingCardSkeletonLoader'
import Image from 'next/image'
import { PacmanLoader } from 'react-spinners'

type Props = {
  battleData: any
}

const BattleEndedScreen = ({ battleData }: Props) => {

  const { loading, userDataMappedLeaderboard } = useBattleEndedScreenHook(battleData);

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
          {loading ? (<div className='flex justify-end items-center mr-10'>
            <PacmanLoader color='white' size={16} />
          </div>
          ) : (userDataMappedLeaderboard && userDataMappedLeaderboard.length > 0 && <div className='flex gap-2 justify-end items-center'>
            {/* <FaCrown color='yellow' size={30} className='mr-2' /> */}
            <div>{"👑"}</div>
            <Image src={userDataMappedLeaderboard[0].userData.photoUrl} alt='' width={50} height={50} className='w-6 h-6 rounded-full' />
            <p>{userDataMappedLeaderboard[0].userData.name}</p>
          </div>)}
        </div>
      </div>

      <div className='text-white'>
        <p className='font-medium text-gray-200'>Leaderboard:</p>
        <div className='flex py-2 px-4 bg-gray-800 rounded-lg my-2 font-medium'>
          <p className='w-[60%]'>Player</p>
          <p className='w-[20%]'>Rank</p>
          <p className='w-[20%]'>Score</p>
        </div>
        {loading ? <BattleListingCardSkeletonLoader /> : (
          userDataMappedLeaderboard.map((player: any, index: number) => <div className='flex py-2 px-4 bg-gray-700 rounded-lg my-2' key={index}>
            <p className='w-[60%]'>{player.userData.name}</p>
            <p className='w-[20%]'>{player.rank ? player.rank : "-"}</p>
            <p className='w-[20%]'>{player.score}</p>
          </div>))}
      </div>
    </div>
  )
}

export default BattleEndedScreen