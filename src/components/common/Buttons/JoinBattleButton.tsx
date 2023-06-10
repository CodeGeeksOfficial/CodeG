import { useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react'
import JoinBattleFormModal from '../Modals/JoinBattleFormModal';
import FullScreenLoader from '../Loaders/FullScreenLoader';
import { apiCall } from 'src/core/api-requests/axios';
import { useRouter } from 'next/router';
import Button from '../Button/Button';

type Props = {}

const JoinBattleButton = (props: Props) => {
  const [loading, setLoading] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter()

  const checkUserBattleStatus = async () => {
    setLoading(true)
    await apiCall({
      key: 'get_battle_id'
    }).then((res: any) => {
      let battleId: string = res.data
      if (battleId) {
        // router.push('/battle/' + battleId)
      } else {
        onOpen()
      }
      setLoading(false)
    }).catch((error) => {
      console.log(error)
      setLoading(false)
    })
  }

  return (
    <div>
      <Button
        className='text-sm sm:text-base text-white border-2 hover:border-transparent py-2 w-28 sm:w-36 flex justify-center rounded-md hover:bg-[#00ffc3] hover:text-[#303136] ease-in duration-100'
        onClick={checkUserBattleStatus}
        loading={loading}
        loaderColor={"white"}
      >
        Join Battle
      </Button>
      <JoinBattleFormModal isOpen={isOpen} onClose={onClose} />
    </div>
  )
}

export default JoinBattleButton