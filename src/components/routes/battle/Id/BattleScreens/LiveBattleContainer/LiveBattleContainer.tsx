import React from 'react'
import useLiveBattleContainerHook from './useLiveBattleContainerHook'
import FullScreenLoader from 'src/components/common/Loaders/FullScreenLoader';
import LobbyContainer from './LobbyContainer/LobbyContainer';
import ArenaContainer from './ArenaContainer/ArenaContainer';

type Props = {}

const LiveBattleContainer = (props: Props) => {

  const { battle } = useLiveBattleContainerHook();

  if (!battle) {
    return <FullScreenLoader isOpen />
  } else if (battle.startedAt) {
    return <ArenaContainer />
  } else {
    return <LobbyContainer />
  }
}

export default LiveBattleContainer