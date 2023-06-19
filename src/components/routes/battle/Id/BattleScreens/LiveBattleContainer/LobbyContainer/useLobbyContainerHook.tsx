import router from 'next/router';
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { apiCall } from 'src/core/api-requests/axios';
import { useAuth } from 'src/utils/auth';

const useLobbyContainerHook = () => {

  const battle = useSelector((state: any) => state.battle)
  const { currentUser } = useAuth()

  const [startBattleButtonLoading, setStartBattleButtonLoading] = useState(false);
  const [leaveBattleButtonLoading, setLeaveBattleButtonLoading] = useState(false);

  const battleId = router.query.id

  const startBattleHandler = async () => {
    setStartBattleButtonLoading(true);
    try {
      await apiCall({ key: "start_battle", params: { "battle_id": battleId } })
    } catch (err) {
      setStartBattleButtonLoading(false);
    }
  }
  const handleLeaveBattle = async () => {
    setLeaveBattleButtonLoading(true)
    try{
      await apiCall({ key: "leave_battle", params: { "battle_id": battleId,"user_id": currentUser?.uid } })
    }catch{
    setLeaveBattleButtonLoading(false)
    }
  }
  return { battle, startBattleButtonLoading, startBattleHandler, leaveBattleButtonLoading, handleLeaveBattle }
}

export default useLobbyContainerHook
