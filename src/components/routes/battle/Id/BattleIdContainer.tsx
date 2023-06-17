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

  const { loading, battleData, userCurrentBattleId, battleId, setUserCurrentBattleId } = useBattleIdContainerHook();

  if (loading) {
    return <FullScreenLoader isOpen />
  }

  if (battleData === null) {
    return <BattleNotFoundScreen />
  }

  if (battleData.status === "completed") {
    return <BattleEndedScreen battleData={battleData} />
  }

  if ((battleData.status === "arena" || battleData.status === "lobby") && userCurrentBattleId === battleId) {
    return <LiveBattleContainer />
  }

  if (battleData.status === "lobby" && userCurrentBattleId === null) {
    return <JoinBattleScreen />
  }

  if (battleData.status === "arena") {
    return <BattleAlreadyStartedScreen />
  }


  return (
    <div>
      Something went wrong!
    </div>
  )
}

export default BattleIdContainer