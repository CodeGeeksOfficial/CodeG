import React, { useEffect, useState } from 'react'
import { apiCall } from 'src/core/api-requests/axios';

const useBattleRouteContainerHook = () => {

  const [loadingPublicBattles, setLoadingPublicBattles] = useState(true);
  const [publicBattles, setPublicBattles] = useState<any>([])

  const fetchPublicBattles = async () => {

    const publicBattlesRes: any = await apiCall({
      key: "get_public_battles"
    })

    const ongoingPublicBattles = publicBattlesRes.data.filter((battle:any) => {
      return !battle.startedAt
    })
    
    setPublicBattles(ongoingPublicBattles);
    setLoadingPublicBattles(false);
  }

  useEffect(() => {
    fetchPublicBattles();
  }, [])


  return { loadingPublicBattles, publicBattles }
}

export default useBattleRouteContainerHook