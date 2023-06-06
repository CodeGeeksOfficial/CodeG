import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import FullScreenLoader from 'src/components/common/Loaders/FullScreenLoader'

type Props = {}

const LiveBattleContainer = (props: Props) => {
  const router = useRouter()
  const battleId = router.query.battleId
  useEffect(()=>{
    // setInterval
  },[])
  return (
    <div className='w-full p-5 text-white'>
      {battleId}
    </div>
  )
}

export default LiveBattleContainer