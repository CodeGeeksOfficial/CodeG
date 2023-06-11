import React from 'react'
import { withFullScreenAuth } from 'src/components/common/Modals/Auth'
import Navbar from 'src/components/common/Navbar/Navbar'
import BattleRouteContainer from 'src/components/routes/battle/BattleRouteContainer'

type Props = {}

const battle = (props: Props) => {

  return (
    <div className='bg-[#141519] min-h-screen'>
      <Navbar />
      <BattleRouteContainer />
    </div>
  )
}

export default withFullScreenAuth(battle)