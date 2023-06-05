import { useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react'
import CreateBattleFormModal from '../Modals/CreateBattleFormModal';
import FullScreenLoader from '../Loaders/FullScreenLoader';
import { apiCall } from 'src/core/api-requests/axios';

type Props = {}

const CreateBattleButton = (props: Props) => {
  const [loading, setLoading] = useState(false)
  const {isOpen, onOpen, onClose} = useDisclosure();

  const checkUserBattleStatus = async () => {
    setLoading(true)
    await apiCall({
      key:'get_battle_id'
    }).then((res)=>{
      // If not in battle then execute this function
      console.log(res)
      setLoading(false)
      // onOpen()
    }).catch((error)=>{
      console.log(error)
      setLoading(false)
    })
  }

  return (
    <div>
      <button
        className = 'text-sm sm:text-base bg-[#00ffc3] py-2 px-4 sm:px-8 rounded-md text-[#303136] hover:shadow-lg hover:shadow-[#00ffc35f] ease-in duration-150'
        onClick={checkUserBattleStatus}
      >
        Create Battle
      </button>
      <CreateBattleFormModal isOpen={isOpen} onClose={onClose}/>
      <FullScreenLoader isOpen={loading}/>
    </div>
  )
}

export default CreateBattleButton