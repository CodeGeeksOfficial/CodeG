import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import FullScreenLoader from 'src/components/common/Loaders/FullScreenLoader'
import { withFullScreenAuth } from 'src/components/common/Modals/Auth'
import Navbar from 'src/components/common/Navbar/Navbar'
import LiveBattleContainer from 'src/components/routes/battle/LiveBattleContainer'
import { apiCall } from 'src/core/api-requests/axios'
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { firebaseApp } from 'src/firebase/firebase.config'
type Props = {}

const BattleWithId = (props: Props) => {
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const battleId = router.query.battleId

  let verifyBattleAndUser = async () => {
    const db = getFirestore(firebaseApp);
    const docRef = doc(db, "battles", `${battleId}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      await apiCall({
        key:'get_battle_id'
      }).then((res:any)=>{
        let userCurrentBattleId:string = res.data
        if(userCurrentBattleId){
          if(userCurrentBattleId === battleId){
            console.log("Welcome Back player:", docSnap.data());
          }else{
            router.push('/battle/' + userCurrentBattleId)
          }
          setLoading(false)
        }else{
          // Check battle status
          // if not started (i.e lobby) then ask userif he/she wants to join this battle
          // if started then show message and redirect to /battle
          if(docSnap.data().startedAt){
            console.log('Battle already started')
            router.push('/battle')
          }else{
            // directly join battle 
            apiCall({
              key:'join_battle',
              params:{
                battle_id:battleId
              }
            }).then((res:any)=>{
              console.log('Successfully joined battle')
              console.log(res.data);
              setLoading(false)
            }).catch((error)=>{
              console.log(error)
              setLoading(false)
            })
          }
        }
      }).catch((error)=>{
        console.log(error)
      })
    } else {
      // docSnap.data() will be undefined in this case
      console.log("Invalid Battle Id !");
      router.push('/battle')
    }
  }
  useEffect(()=>{
    verifyBattleAndUser()
  },[])

  return (
    <div className='h-screen w-screen bg-[#141519]'>
      <Navbar/>
      { loading ? 
        <FullScreenLoader isOpen={loading}/>
        :
        <div>
          <LiveBattleContainer/>
        </div>
      }
    </div>
  )
}

export default withFullScreenAuth(BattleWithId)