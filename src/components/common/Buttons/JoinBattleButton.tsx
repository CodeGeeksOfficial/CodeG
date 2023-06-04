import { useDisclosure } from '@chakra-ui/react';
import React from 'react'
import CommonModal from '../Modals/CommonModal';
import JoinBattleFormModal from '../Modals/JoinBattleFormModal';

type Props = {}

const JoinBattleButton = (props: Props) => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  
  const checkUserBattleStatus = async () => {
    // If not in battle then execute this function
    onOpen()
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
    </div>
  )
}

export default JoinBattleButton