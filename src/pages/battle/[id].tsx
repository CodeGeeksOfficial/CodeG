import React from 'react'
import { withFullScreenAuth } from 'src/components/common/Modals/Auth'
import Navbar from 'src/components/common/Navbar/Navbar'
import BattleIdContainer from 'src/components/routes/battle/Id/BattleIdContainer'

type Props = {}

const Index = (props: Props) => {
  return (
    <div className='bg-[#141519] h-screen text-white'>
      <BattleIdContainer />
    </div>
  )
}

export default withFullScreenAuth(Index)