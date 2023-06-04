import { useDisclosure } from '@chakra-ui/react';
import React from 'react'
import CreateBattleFormModal from '../Modals/CreateBattleFormModal';

type Props = {}

const CreateBattleButton = (props: Props) => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  const checkUserBattleStatus = async () => {
    // If not in battle then execute this function
    onOpen()
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
    </div>
  )
}

export default CreateBattleButton