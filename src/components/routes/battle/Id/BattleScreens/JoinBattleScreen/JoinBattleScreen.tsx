import React from 'react'
import Button from 'src/components/common/Button/Button'
import PeopleCoding from 'src/lib/assets/icons/people-coding.svg'
import useJoinBattleScreenHook from './useJoinBattleScreenHook'

type Props = {}

const JoinBattleScreen = (props: Props) => {

  const { joiningBattleLoader, onJoinClick } = useJoinBattleScreenHook();

  return (
    <div className='py-10 px-20 space-y-4'>
      <div className='w-full flex justify-between items-center bg-zinc-800 rounded-xl px-10'>
        <div className='space-y-6'>
          <div className='space-y-2'>
            <p className='text-white font-bold text-3xl leading-[40px]'>
              Join Area 51<br /> Conquer and Prevail!
            </p>
            <p className='text-white opacity-60'>Rise to the Challenge, Test Your Skills, and Claim Victory!</p>
          </div>
          <div className='flex gap-2'>
            <p className='rounded-full py-1 px-3 bg-orange-700 font-semibold'>
              3 questions
            </p>
            <p className='rounded-full py-1 px-3 bg-blue-700 font-semibold'>
              90 minutes
            </p>
          </div>
        </div>
        <PeopleCoding className="w-96" />
      </div>

      <div className='text-white'>
        <Button loading={joiningBattleLoader} onClick={onJoinClick} className='flex py-3 px-4 bg-gray-700 text-lg hover:bg-gray-600 duration-200 rounded-lg mb-6 font-bold justify-center w-full'>Join Battle</Button>
        <p className='font-medium text-gray-200'>Current Participants:</p>
        <div className='flex py-2 px-4 bg-gray-800 rounded-lg my-2 font-medium'>
          <p className=''>Photo,</p>
          <p className=''>Name</p>
        </div>
      </div>
    </div>
  )
}

export default JoinBattleScreen