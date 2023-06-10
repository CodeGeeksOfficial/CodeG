import React from 'react'
import useBattleIdContainerHook from './useBattleIdContainerHook'
import FullScreenLoader from 'src/components/common/Loaders/FullScreenLoader';
import BattleNotFoundScreen from './BattleScreens/BattleNotFoundScreen/BattleNotFoundScreen';
import BattleEndedScreen from './BattleScreens/BattleEndedScreen/BattleEndedScreen';
import LiveBattleContainer from './BattleScreens/LiveBattleContainer/LiveBattleContainer';
import JoinBattleScreen from './BattleScreens/JoinBattleScreen/JoinBattleScreen';
import BattleAlreadyStartedScreen from './BattleScreens/BattleAlreadyStartedScreen/BattleAlreadyStartedScreen';

type Props = {}

const BattleIdContainer = (props: Props) => {

  const { loading, battleStatus, userCurrentBattleId, battleId } = useBattleIdContainerHook();

  if (loading) {
    return <FullScreenLoader isOpen />
  }

  if (battleStatus.status === null) {
    return <BattleNotFoundScreen />
  }

  if (battleStatus.status === "completed") {
    return <BattleEndedScreen />
  }

  if ((battleStatus.status === "arena" || battleStatus.status === "lobby") && userCurrentBattleId === battleId) {
    return <LiveBattleContainer />
  }

  if (battleStatus.status === "lobby" && userCurrentBattleId === null) {
    return <JoinBattleScreen />
  }

  if (battleStatus.status === "arena") {
    return <BattleAlreadyStartedScreen />
  }


  return (
    <div>

    </div>
  )
}

export default BattleIdContainer