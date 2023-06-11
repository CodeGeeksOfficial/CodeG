import React from 'react'
import PersonGaming from 'src/lib/assets/icons/person-gaming.svg'
import { useSelector } from 'react-redux'

type Props = {}

const LobbyContainer = (props: Props) => {

  const battle = useSelector((state: any) => state.battle)

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
        <div className='flex py-2 px-4 bg-gray-800 rounded-lg my-2 font-medium'>
          <p className=''>Photo</p>
          <p className=''>Name</p>
        </div>
      </div>
    </div>
  )
}

export default LobbyContainer