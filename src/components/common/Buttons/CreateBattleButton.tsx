import { useDisclosure, useToast } from '@chakra-ui/react';
import React, { useState } from 'react'
import CreateBattleFormModal from '../Modals/CreateBattleFormModal';
import { apiCall } from 'src/core/api-requests/axios';
import { useRouter } from 'next/router';
import Button from '../Button/Button';

type Props = {}

const CreateBattleButton = (props: Props) => {
  const [loading, setLoading] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter()
  const toast = useToast();

  const checkUserBattleStatus = async () => {
    setLoading(true)
    await apiCall({
      key: 'get_battle_id'
    }).then((res: any) => {
      let battleId: any = res.data
      if (battleId) {
        toast({
          title: 'You already are in a battle',
          description: "We've redirected you to your battle. Happy coding!",
          status: 'info',
          duration: 5000,
          isClosable: true,
          position: 'top'
        });
        router.push('/battle/' + battleId)
      } else {
        onOpen();
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
        className='text-sm sm:text-base font-medium bg-[#00ffc3] border-[#00ffc3] border-2 py-2 w-28 sm:w-36 flex justify-center rounded-md text-[#303136] hover:shadow-lg duration-200'
        onClick={checkUserBattleStatus}
      >
        Create Battle
      </Button>
      <CreateBattleFormModal isOpen={isOpen} onClose={onClose} />
    </div>
  )
}

export default CreateBattleButton