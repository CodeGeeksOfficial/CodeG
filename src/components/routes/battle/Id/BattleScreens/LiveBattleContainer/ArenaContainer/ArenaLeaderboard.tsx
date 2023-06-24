import { PresentationChartBarIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import getLeaderboardByPlayers from 'src/utils/getLeaderboardByPlayers'

type Props = {}

const ArenaLeaderboard = (props: Props) => {

  const battle = useSelector((state: any) => state.battle)
  const [leaderboardVisible, setLeaderboardVisible] = useState(false);

  return (
    <div className='relative' onMouseLeave={() => { setLeaderboardVisible(false) }}>
      {leaderboardVisible && <div className={`duration-150 bg-[#cbd5e1] text-black absolute bottom-10 left-1 px-4 py-2 divide-y divide-gray-300 rounded-lg text-sm`}>
        {getLeaderboardByPlayers(battle.players).map((player: any, index: number) => <div key={index} className={`${player.rank ? "" : "opacity-50"} py-2 flex items-center justify-between gap-2 w-64`}>
          <div className={`flex gap-2 items-center`}>
            <p className='font-bold'>{player.rank ? `${player.rank}.` : "-"}</p>
            <Image
              src={battle?.usersData[player?.id]?.photoUrl}
              alt=''
              width={50}
              height={50}
              className='rounded-full w-7 h-7'
            />
            <p className='font-medium'>{battle?.usersData[player?.id]?.name}</p>
          </div>
          {player.score > 0 && <p className='font-bold'>{player.score}</p>}
        </div>)}
      </div>}
      <PresentationChartBarIcon width={30} className='cursor-help' onMouseEnter={() => { setLeaderboardVisible(true) }} />
    </div>
  )
}

export default ArenaLeaderboard