import router from 'next/router';
import React, { useEffect, useState } from 'react'

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

    const userCurrentBattleIdRes = null;
    if (userCurrentBattleIdRes !== null && userCurrentBattleIdRes !== battleId) {
      router.push(`/battle/${userCurrentBattleIdRes}`)
      return;
    }
    setUserCurrentBattleId(userCurrentBattleIdRes);

    setBattleStatus({ status: null });

    setLoading(false);
  }

  useEffect(() => {
    fetchBattleAndUserDetails();
  }, [battleId])

  return { loading, battleStatus, userCurrentBattleId, battleId }
}

export default useBattleIdContainerHook
