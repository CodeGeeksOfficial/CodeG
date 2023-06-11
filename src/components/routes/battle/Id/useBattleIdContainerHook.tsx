import router from 'next/router';
import React, { useEffect, useState } from 'react'
import { apiCall } from 'src/core/api-requests/axios';

const useBattleIdContainerHook = () => {

  const [loading, setLoading] = useState(true);
  const [battleStatus, setBattleStatus] = useState<any>();
  const [userCurrentBattleId, setUserCurrentBattleId] = useState<any>();

  // If userCurrentBattleId!==null and userCurrentBattleId!==battleId, redirect to his ongoing battle and show a toast message.
  // If Battle status is null => show BattleNotFoundScreen
  // If battle is in completed state => show BattleEndedScreen
  // If battle is in lobby or arena state and userCurrentBattleId===battleId => show LiveBattleContainer
  // If battle is in lobby state and userCurrentBattleId===null => show JoinBattleButton
  // If battle is in arena state and userCurrentBattleId===null => show BattleAlreadyStartedScreen

  const battleId: any = router.query.id;

  const fetchBattleAndUserDetails = async () => {

    const userCurrentBattleIdProcess: any = apiCall({ key: "get_battle_id" });
    const battleStatusProcess: any = apiCall({ key: "battle_status", params: { battle_id: battleId } });

    const userCurrentBattleIdRes = (await userCurrentBattleIdProcess).data;
    const battleStatusRes = (await battleStatusProcess).data

    if (userCurrentBattleIdRes !== null && userCurrentBattleIdRes !== battleId) {
      router.push(`/battle/${userCurrentBattleIdRes}`)
      return;
    }

    setUserCurrentBattleId(userCurrentBattleIdRes);
    setBattleStatus(battleStatusRes);

    setLoading(false);
  }

  useEffect(() => {
    fetchBattleAndUserDetails();
  }, [battleId])

  return { loading, battleStatus, userCurrentBattleId, battleId }
}

export default useBattleIdContainerHook
