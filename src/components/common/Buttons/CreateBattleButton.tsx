import { useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react'
import CreateBattleFormModal from '../Modals/CreateBattleFormModal';
import FullScreenLoader from '../Loaders/FullScreenLoader';
import { apiCall } from 'src/core/api-requests/axios';
import { useRouter } from 'next/router';
import Button from '../Button/Button';

type Props = {}

const CreateBattleButton = (props: Props) => {
  const [loading, setLoading] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter()

  const checkUserBattleStatus = async () => {
    setLoading(true)
    await apiCall({
      key: 'get_battle_id'
    }).then((res: any) => {
      let battleId: string = res.data
      if (res.data) {
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
        loading={loading}
        loaderColor='black'
        className='text-sm sm:text-base bg-[#00ffc3] py-2 w-28 sm:w-36 flex justify-center rounded-md text-[#303136] hover:shadow-lg hover:shadow-[#00ffc35f] ease-in duration-150'
        onClick={checkUserBattleStatus}
      >
        Create Battle
      </Button>
      <CreateBattleFormModal isOpen={isOpen} onClose={onClose} />
    </div>
  )
}

export default CreateBattleButton