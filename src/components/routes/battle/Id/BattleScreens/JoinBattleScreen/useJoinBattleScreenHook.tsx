import { useToast } from '@chakra-ui/react'
import router from 'next/router'
import React, { useState } from 'react'
import { apiCall } from 'src/core/api-requests/axios'

const useJoinBattleScreenHook = () => {

  const [joiningBattleLoader, setJoiningBattleLoader] = useState(false)
  const battleId = router.query.id;
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

  return { joiningBattleLoader, onJoinClick }
}

export default useJoinBattleScreenHook
