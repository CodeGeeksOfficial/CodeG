import React, { useEffect, useState } from 'react'
import { apiCall } from 'src/core/api-requests/axios';
import getLeaderboardByPlayers from 'src/utils/getLeaderboardByPlayers'

const useBattleEndedScreenHook = (battleData: any) => {

  const [loading, setLoading] = useState(true);
  const [userDataMappedLeaderboard, setUserDataMappedLeaderboard] = useState<any>([]);
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



  return { loading, userDataMappedLeaderboard }
}

export default useBattleEndedScreenHook
