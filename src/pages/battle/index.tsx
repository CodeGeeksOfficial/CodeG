import React from 'react'
import { withFullScreenAuth } from 'src/components/common/Modals/Auth'
import Navbar from 'src/components/common/Navbar/Navbar'
import BattleContainer from 'src/components/routes/battle/BattleContainer'

type Props = {}

const battle = (props: Props) => {

  return (
    <div className='h-screen bg-[#141519]'>
      <Navbar/>
      <BattleContainer/>
    </div>
  )
}

export default withFullScreenAuth(battle)