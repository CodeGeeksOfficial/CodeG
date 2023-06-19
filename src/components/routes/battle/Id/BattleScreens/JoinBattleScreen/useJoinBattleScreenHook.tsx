import { useToast } from '@chakra-ui/react'
import router from 'next/router'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { apiCall } from 'src/core/api-requests/axios'

const useJoinBattleScreenHook = () => {

  const [usersLoading, setUsersLoading] = useState(true);
  const [usersData, setUsersData] = useState<any>([]);
  const [joiningBattleLoader, setJoiningBattleLoader] = useState(false);

  const battleId = router.query.id;

  const battleData = useSelector((state: any) => state.battle);

  const toast = useToast();

  const onJoinClick = () => {
    setJoiningBattleLoader(true)
    apiCall({
      key: 'join_battle',
      params: {
        battle_id: battleId
      }
    }).then((res: any) => {
      if (res.data) {

        //TODO: IMPORTANT => Change this
        router.reload()
        // router.push('/battle/' + battleId)
        toast({
          title: 'Joined Battle successfully',
          description: "We've redirected you to your battle. Happy coding!",
          status: 'success',
          duration: 5000,
          isClosable: true,
          position: 'top'
        });
      }
      setJoiningBattleLoader(false)
    }).catch((error) => {
      toast({
        title: 'Unexpected Error',
        description: "Something wrong has happened",
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top'
      });
      console.log('Error: ', error?.response?.data)
      setJoiningBattleLoader(false)
    })
  }

  const getPlayersData = async () => {
    let usersData: any = battleData.activeUsers.map(async (user_id: any) => {
      const userData = (await apiCall({ key: "get_user_details_by_id", params: { user_id: user_id } }) as any).data
      return userData
    })

    usersData = await Promise.all(usersData);
    setUsersData(usersData);
    setUsersLoading(false);

  }

  useEffect(() => {
    getPlayersData();
  }, [])

  return { joiningBattleLoader, onJoinClick, usersLoading, usersData, battleData }
}

export default useJoinBattleScreenHook
