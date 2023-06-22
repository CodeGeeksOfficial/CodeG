import router from 'next/router';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { apiCall } from 'src/core/api-requests/axios';
import { setCurrentBattleState } from 'src/core/redux/reducers/battleSlice';
import userBattleSubmissionsMapper from 'src/utils/userBattleSubmissionsMapper';

const useArenaCodeEditorHook = () => {

  const battleId: any = router.query.id;

  const battle = useSelector((state: any) => state.battle);

  const dispatch = useDispatch();

  const updateSubmission = async (pId: any, qId: any) => {
    const payload: any = {
      process_id: pId,
      battle_id: battleId,
      question_id: qId
    }

    await apiCall({ key: "update_battle_submission", data: payload })
    // const userSumbissons: any = (await apiCall({ key: 'get_user_battle_submissions', params: { battle_id: battleId } }) as any).data
    // const submissonsData = userBattleSubmissionsMapper(battle.questionsData, userSumbissons)
  }

  return { updateSubmission }
}

export default useArenaCodeEditorHook
