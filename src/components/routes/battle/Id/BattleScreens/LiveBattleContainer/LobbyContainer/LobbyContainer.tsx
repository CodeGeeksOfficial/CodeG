import React from 'react'
import PersonGaming from 'src/lib/assets/icons/person-gaming.svg'
import { useSelector } from 'react-redux'
import LobbyPlayerListItem from './LobbyPlayerListItem/LobbyPlayerListItem'
import Image from 'next/image'
import Button from 'src/components/common/Button/Button'
import useLobbyContainerHook from './useLobbyContainerHook'

type Props = {}

const LobbyContainer = (props: Props) => {

  const { battle, startBattleButtonLoading, startBattleHandler, leaveBattleButtonLoading, handleLeaveBattle } = useLobbyContainerHook();

  return (
    <div className='py-10 px-20 space-y-10'>
      <div className='w-full flex justify-between items-center bg-zinc-800 rounded-xl px-10'>

        <div className='space-y-6'>
          <div className='space-y-2'>
            <p className='text-white font-bold text-3xl leading-[40px]'>
              Welcome to the Lobby<br />Where Excitement and Possibilities Await!
            </p>
            <p className='text-white opacity-60'>Invite Your Friends to Join the Lobby and Amplify the Fun!</p>
          </div>

          <div>
            <p></p>
          </div>

        </div>
        <PersonGaming className="w-60" />
      </div>

      <div className='text-white'>
        <p className='font-medium text-gray-200'>Players in Lobby:</p>
        {battle?.activeUsers.map((userId: any, index: number) => <LobbyPlayerListItem isUserAdmin={battle?.isUserAdmin} userId={userId} key={index} />)}
      </div>

      {battle?.isUserAdmin && <Button
        loading={startBattleButtonLoading}
        onClick={startBattleHandler}
        className='flex py-3 px-4 bg-gray-700 text-lg hover:bg-gray-600 duration-200 rounded-lg mb-6 font-bold justify-center w-full'
      >
        Start Battle
      </Button>}
      <Button
        loaderColor='red'
        loading={leaveBattleButtonLoading}
        className='flex w-full justify-center text-red-500 font-normal tracking-wide '
        onClick={handleLeaveBattle}
      >
        Leave Battle
      </Button>

    </div>
  )
}

export default LobbyContainer