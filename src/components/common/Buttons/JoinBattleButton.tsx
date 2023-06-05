import { useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react'
import JoinBattleFormModal from '../Modals/JoinBattleFormModal';
import FullScreenLoader from '../Loaders/FullScreenLoader';
import { apiCall } from 'src/core/api-requests/axios';

type Props = {}

const JoinBattleButton = (props: Props) => {
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
        className = 'text-sm sm:text-base text-white border-2 hover:border-transparent py-2 px-4 sm:px-8 rounded-md hover:bg-[#00ffc3] hover:text-[#303136] ease-in duration-100'
        onClick={checkUserBattleStatus}
      >
        Join Battle
      </button>
      <JoinBattleFormModal isOpen={isOpen} onClose={onClose}/>
      <FullScreenLoader isOpen={loading}/>
    </div>
  )
}

export default JoinBattleButton