import router from 'next/router';
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { apiCall } from 'src/core/api-requests/axios';

const useLobbyContainerHook = () => {

  const battle = useSelector((state: any) => state.battle)

  const [startBattleButtonLoading, setStartBattleButtonLoading] = useState(false);

  const battleId = router.query.id

  const startBattleHandler = async () => {
    setStartBattleButtonLoading(true);
    try {
      await apiCall({ key: "start_battle", params: { "battle_id": battleId } })
    } catch (err) {
      setStartBattleButtonLoading(false);
    }
  }

  return { battle, startBattleButtonLoading, startBattleHandler }
}

export default useLobbyContainerHook
