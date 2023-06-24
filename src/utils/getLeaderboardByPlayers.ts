const getLeaderboardByPlayers = (players: any) => {
  let rankedPlayersArr: Array<any> = []
  let unrankedPlayersArr: Array<any> = []

  Object.keys(players).forEach((player: any) => {
    if (players[player].rank) {
      rankedPlayersArr.push({ ...players[player], id: player })
    } else {
      unrankedPlayersArr.push({ ...players[player], id: player })
    }
  })

  rankedPlayersArr.sort((playerA, playerB) => playerA.rank - playerB.rank)

  return [...rankedPlayersArr, ...unrankedPlayersArr];
}

export default getLeaderboardByPlayers;