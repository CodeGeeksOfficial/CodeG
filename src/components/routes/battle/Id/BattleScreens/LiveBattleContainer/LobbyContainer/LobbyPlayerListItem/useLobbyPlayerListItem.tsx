import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { apiCall } from 'src/core/api-requests/axios';
import { setCurrentBattleState } from 'src/core/redux/reducers/battleSlice';
import { useAuth } from 'src/utils/auth';

const useLobbyPlayerListItem = (userId: any) => {

  const battle = useSelector((state: any) => state.battle)
  const [removeFromBattleButtonLoading, setRemoveFromBattleButtonLoading] = useState(false)

  let isListPlayerAdmin = false;

  if (battle && battle.activeUsers && battle.activeUsers.length > 0 && battle.activeUsers[0] === userId) {
    isListPlayerAdmin = true;
  }

  if (battle && battle.activeUsers && battle.activeUsers.length > 0 && battle.activeUsers[0] === userId) {
    isListPlayerAdmin = true;
  }

  const handleRemoveFromBattle = async () => {
    setRemoveFromBattleButtonLoading(true)
    try{
      await apiCall({ key: "leave_battle", params: { "battle_id": battle?.id,"user_id":userId } })
    }catch{
    setRemoveFromBattleButtonLoading(false)
    }
  }
  return { battle, isListPlayerAdmin, removeFromBattleButtonLoading, handleRemoveFromBattle }
}

export default useLobbyPlayerListItem
