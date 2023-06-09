import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import CreateBattleButton from 'src/components/common/Buttons/CreateBattleButton'
import JoinBattleButton from 'src/components/common/Buttons/JoinBattleButton'
import FullScreenLoader from 'src/components/common/Loaders/FullScreenLoader'
import { apiCall } from 'src/core/api-requests/axios'

type Props = {}

const BattleRouteContainer = (props: Props) => {
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  useEffect(()=>{
    setLoading(true)
    apiCall({
      key:'get_battle_id'
    }).then((res:any)=>{
      let battleId:string = res.data
      if(res.data){
        // router.push('/battle/' + battleId)
        setLoading(false) 
      }else{
        setLoading(false)
      }
    }).catch((error)=>{
      console.log(error)
      setLoading(false)
    })
  },[])

  return (
    <div className='flex-1 mt-5'>
      <div className='flex w-full py-10 items-center gap-5 justify-center'>
        <JoinBattleButton/>
        <CreateBattleButton/>
      </div>
      <FullScreenLoader isOpen={loading}/>
    </div>
  )
}

export default BattleRouteContainer