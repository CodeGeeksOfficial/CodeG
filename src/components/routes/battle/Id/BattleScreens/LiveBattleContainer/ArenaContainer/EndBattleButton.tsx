import { useRouter } from 'next/router';
import React, { useState } from 'react'
import Button from 'src/components/common/Button/Button';
import { apiCall } from 'src/core/api-requests/axios';
import firebaseAuth from 'src/firebase/firebase.config';

type Props = {}

const EndBattleButton = (props: Props) => {

  const router = useRouter();

  const [leaveBattleButtonLoading, setLeaveBattleButtonLoading] = useState(false);
  const battleId = router.query.id;
  const { currentUser } = firebaseAuth;

  const handleLeaveBattle = async () => {
    const confirmation = confirm("Are you sure you want to end this battle?")
    if (confirmation) {
      setLeaveBattleButtonLoading(true)
      try {
        await apiCall({ key: "leave_battle", params: { "battle_id": battleId, "user_id": currentUser?.uid } })
      } catch {
        setLeaveBattleButtonLoading(false)
      }
    }
  }

  return (
    <Button loading={leaveBattleButtonLoading} loaderColor='white' onClick={handleLeaveBattle} className='text-sm text-red-700'>
      End Now
    </Button>
  )
}

export default EndBattleButton