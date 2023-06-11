import { InformationCircleIcon } from '@heroicons/react/20/solid'
import React from 'react'
import { ClockLoader } from 'react-spinners'
import CreateBattleButton from 'src/components/common/Buttons/CreateBattleButton'
import JoinBattleButton from 'src/components/common/Buttons/JoinBattleButton'
import PeopleBattle from 'src/lib/assets/icons/people-battle.svg'
import useBattleAlreadyStartedScreenHook from './useBattleAlreadyStartedScreenHook'

type Props = {}

const BattleAlreadyStartedScreen = ({ }: Props) => {

  const { battleData, remainingTime } = useBattleAlreadyStartedScreenHook()

  return (
    <div className='py-10 px-20 space-y-10'>
      <div className='w-full flex justify-between items-center bg-emerald-900 rounded-xl px-10 p-2'>
        <div className='space-y-6'>
          <div className='space-y-2'>
            <p className='text-white font-bold text-3xl leading-[40px]'>
              Battle Already Started<br /> Enjoy Spectating
            </p>
            <p className='text-white opacity-60'>Get Inspired: Witness the Intense Battle or Create Your Own!</p>
          </div>
          <div className='flex gap-4'>
            <div className='bg-amber-800 flex gap-2 items-center rounded-full py-2 px-5 w-fit'>
              <ClockLoader color='white' size={24} speedMultiplier={0.1} />
              <p>{remainingTime} mins left</p>
            </div>
            <div className='bg-amber-700 font-semibold flex gap-2 items-center rounded-full py-2 px-5 w-fit'>
              <p>{battleData.questions.length} Questions</p>
            </div>
          </div>
        </div>
        <PeopleBattle className="w-60 mr-10" />
      </div>

      <div className='border-[1.5px] border-dashed border-gray-600 px-8 py-4 flex gap-4 rounded-lg'>
        <div className='w-1/2'>
          <p className='text-4xl font-semibold'>Forge a New Battle</p>
          <p className='opacity-50 pt-1 pb-6'>Ignite Your Creativity and Challenge Fellow Coders!</p>

          <CreateBattleButton />
        </div>
        <div className='w-1/2'>
          <p className='text-4xl font-semibold'>Have a Battle ID?</p>
          <p className='opacity-50 pt-1 pb-6'>Join the Action-Packed Battle and Prove Your Skills!</p>

          <JoinBattleButton />
        </div>
      </div>

      <div className='text-white'>
        <p className='font-medium text-gray-200'>Current Leaderboard:</p>
        <div className='flex py-2 px-4 bg-gray-800 rounded-lg my-2 font-medium'>
          <p className='w-[80%]'>Name</p>
          <p className='w-[20%]'>Score</p>
        </div>
        {Object.keys(battleData.players).map((player: any, index: number) =>
          <div key={index} className='flex py-2 px-4 bg-gray-800 rounded-lg my-2 font-medium'>
            <p className='w-[80%]'>Name</p>
            <p className='w-[20%]'>{battleData.players[player].score}</p>
          </div>)}
        <div className='flex gap-2'>
          <div className='w-5'>
            <InformationCircleIcon />
          </div>
          <p className='text-sm'>This leaderboard is not real-time. This does not gets updated automatically</p>
        </div>
      </div>
    </div>
  )
}

export default BattleAlreadyStartedScreen