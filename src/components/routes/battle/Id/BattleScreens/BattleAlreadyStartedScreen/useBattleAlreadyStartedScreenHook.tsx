import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { apiCall } from 'src/core/api-requests/axios';
import getLeaderboardByPlayers from 'src/utils/getLeaderboardByPlayers';

const useBattleAlreadyStartedScreenHook = () => {

  const [loading, setLoading] = useState(true);
  const [userDataMappedLeaderboard, setUserDataMappedLeaderboard] = useState<any>([]);

  const battleData = useSelector((state: any) => state.battle);
  const currentTimeStamp = new Date().getTime();
  const startedAtTimeStamp = new Date(battleData.startedAt).getTime();

  const validity = battleData.timeValidity * 60 * 1000;
  const willFinishAt = startedAtTimeStamp + validity;
  const remainingTime = Math.floor((willFinishAt - currentTimeStamp) / 60000);

  let leaderboard = getLeaderboardByPlayers(battleData.players)

  const getPlayersData = async () => {
    let usersData: any = leaderboard.map(async (player: any) => {
      const userData = (await apiCall({ key: "get_user_details_by_id", params: { user_id: player.id } }) as any).data

      return ({ ...player, userData })
    })

    usersData = await Promise.all(usersData);
    setUserDataMappedLeaderboard(usersData);
    setLoading(false);
  }

  useEffect(() => {
    getPlayersData();
  }, [])



  return { battleData, remainingTime, loading, userDataMappedLeaderboard }
}

export default useBattleAlreadyStartedScreenHook
