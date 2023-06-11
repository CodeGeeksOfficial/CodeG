import React from 'react'
import { useSelector } from 'react-redux';

const useBattleAlreadyStartedScreenHook = () => {

  const battleData = useSelector((state: any) => state.battle);
  const currentTimeStamp = new Date().getTime();
  const startedAtTimeStamp = new Date(battleData.startedAt).getTime();

  const validity = battleData.timeValidity * 60 * 1000;
  
  const willFinishAt = startedAtTimeStamp + validity;


  const remainingTime = Math.floor((willFinishAt - currentTimeStamp)/60000);

  return { battleData, remainingTime }
}

export default useBattleAlreadyStartedScreenHook
