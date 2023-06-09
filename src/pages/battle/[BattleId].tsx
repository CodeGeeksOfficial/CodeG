import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import FullScreenLoader from 'src/components/common/Loaders/FullScreenLoader'
import { withFullScreenAuth } from 'src/components/common/Modals/Auth'
import Navbar from 'src/components/common/Navbar/Navbar'
import LiveBattleContainer from 'src/components/routes/battle/LiveBattleContainer'
import { apiCall } from 'src/core/api-requests/axios'
import { getFirestore, doc, getDoc, onSnapshot } from "firebase/firestore";
import { firebaseApp } from 'src/firebase/firebase.config'
import { useDispatch } from 'react-redux'
import { useAuth } from 'src/utils/auth'
import { setCurrentBattleState } from 'src/core/redux/reducers/battleSlice'
type Props = {}

const BattleWithId = (props: Props) => {
  const [loading, setLoading] = useState(true)
  const { currentUser } = useAuth()
  const dispatch = useDispatch()
  const router = useRouter()
  const battleId = router.query.battleId
  const db = getFirestore(firebaseApp);
  const battleDocRef = doc(db, "battles", `${battleId}`);

  let verifyBattleAndUser = async () => {
    const docSnap = await getDoc(battleDocRef);
    if(docSnap.exists()) {
      let res:any = await apiCall({key:'get_battle_id'})
      let userCurrentBattleId:string = res.data
      if(userCurrentBattleId){
        if(userCurrentBattleId === battleId){
          console.log("Welcome Back player:", docSnap.data());
          return true
        }else{
          console.log("User already in battle id: ", userCurrentBattleId);
          return false
        }
      }else{
        if(docSnap.data().startedAt){
          console.log('Battle already started')
          return false
        }else{
          // directly join battle 
          await apiCall({
            key:'join_battle',
            params:{
              battle_id:battleId
            }
          })
          return true
        }
      }
    }else {
      // docSnap.data() will be undefined in this case
      console.log("Invalid Battle Id !");
      return false
    }
  }

  const fetchPlayerData = async (usersArray:{}[]) => {
    const promises = usersArray.map(async (playerBattleData:any) => {
      const playerProfileData:any = await apiCall({
        key:'get_details_by_id',
        params:{
          user_id:playerBattleData?.id
        }
      })
      return {
          id:playerBattleData?.id,
          score:playerBattleData?.score,
          name:playerProfileData.data.name,
          email:playerProfileData.data.email,
          photoUrl:playerProfileData.data.photoUrl,
        }
    });
    return Promise.all(promises);
  }

  useEffect(()=>{
    let unsubscribe = () => {};
    verifyBattleAndUser().then(async (isVerifiedUser:boolean) => {
      if(isVerifiedUser){
        console.log('isVerifiedUser: ',isVerifiedUser)
        console.log("Subscribed")
        unsubscribe = onSnapshot(battleDocRef,async (doc) => {
          let docData = doc.data()
          console.log('docData: ',docData)

          // Check if user still participant or left or removed by admin (live)
          let battleData
          if(docData?.users.includes(currentUser.uid)){
            let playersData = await fetchPlayerData(docData?.players)

            battleData = {
              id: battleId,
              battlename:docData?.name,
              isAdmin:docData?.users[0] === currentUser.uid,
              createdAt:docData?.createdAt?.toDate().toString() || '',
              startedAt:docData?.startedAt ? docData?.startedAt?.toDate().toString() : '',
              players:playersData,
              isPrivate:docData?.isPrivate,
              timeValidityInMinutes:docData?.timeValidityInMinutes
            }
            dispatch(setCurrentBattleState({...battleData}))
            setLoading(false)
          }else{
            // remove user and send to '/battle'
            battleData = {
              id: "",
              battlename:"",
              isAdmin:false,
              createdAt:'',
              startedAt:'',
              players:[],
              isPrivate:false,
              timeValidityInMinutes:0
            }
            // show pop up ki tujhko bhagaya jata hai abhi ke abhi .......
            console.log("Get out")
            dispatch(setCurrentBattleState({...battleData}))
            router.push('/battle')
          }
        })
      }else{
        router.push('/battle')
      }
    })

    return () => {
      console.log("Unsubscribed")
      unsubscribe()
    }
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