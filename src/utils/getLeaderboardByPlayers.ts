const getLeaderboardByPlayers = (players: any) => {
  let playersArr: Array<any> = []
  Object.keys(players).forEach((player: any) => {
    if (players[player].rank) {
      playersArr.push({ ...players[player], id: player })
    }
  })

  playersArr.sort((playerA, playerB) => playerA.rank - playerB.rank)

  return playersArr;
}

export default getLeaderboardByPlayers;