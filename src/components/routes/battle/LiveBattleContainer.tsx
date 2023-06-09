import React from 'react'
import { useRouter } from 'next/router'
type Props = {}

const LiveBattleContainer = (props: Props) => {
  const router = useRouter()
  const battleId = router.query.battleId

  return (
    <div className='w-full p-5 text-white'>
      {battleId}
    </div>
  )
}

export default LiveBattleContainer