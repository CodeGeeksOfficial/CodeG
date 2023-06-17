import React from 'react'
import Button from 'src/components/common/Button/Button'
import PeopleCoding from 'src/lib/assets/icons/people-coding.svg'
import useJoinBattleScreenHook from './useJoinBattleScreenHook'
import BattleListingCardSkeletonLoader from '../../../index/BattleListingCard/BattleListingCardSkeletonLoader'
import Image from 'next/image'

type Props = {}

const JoinBattleScreen = (props: Props) => {

  const { joiningBattleLoader, onJoinClick, usersLoading, usersData, battleData } = useJoinBattleScreenHook();

  return (
    <div className='py-10 px-20 space-y-4'>
      <div className='w-full flex justify-between items-center bg-zinc-800 rounded-xl px-10'>
        <div className='space-y-6'>
          <div className='space-y-2'>
            <p className='text-white font-bold text-3xl leading-[40px]'>
              Join {battleData.name}<br /> Conquer and Prevail!
            </p>
            <p className='text-white opacity-60'>Rise to the Challenge, Test Your Skills, and Claim Victory!</p>
          </div>
          <div className='flex gap-2'>
            <p className='rounded-full py-1 px-3 bg-orange-700 font-semibold'>
              {battleData.questions.length} questions
            </p>
            <p className='rounded-full py-1 px-3 bg-blue-700 font-semibold'>
              {battleData.timeValidity} minutes
            </p>
          </div>
        </div>
        <PeopleCoding className="w-96" />
      </div>

      <div className='text-white'>
        <Button loading={joiningBattleLoader} onClick={onJoinClick} className='flex py-3 px-4 bg-gray-700 text-lg hover:bg-gray-600 duration-200 rounded-lg mb-6 font-bold justify-center w-full'>Join Battle</Button>

        <p className='font-medium text-gray-200'>Current Participants:</p>

        {usersLoading ? <BattleListingCardSkeletonLoader /> : (usersData.map((userData: any, index: number) => <div key={index} className='flex gap-4 items-center py-4 px-6 bg-gray-800 rounded-lg my-2 font-medium'>
          <Image src={userData.photoUrl} alt='' width={50} height={50} className='w-8 h-8 rounded-full' />
          <p className=''>{userData.name}</p>
        </div>))
        }

      </div>
    </div>
  )
}

export default JoinBattleScreen