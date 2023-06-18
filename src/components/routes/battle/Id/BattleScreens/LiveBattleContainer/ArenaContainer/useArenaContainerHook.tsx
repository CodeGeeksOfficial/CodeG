import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { apiCall } from 'src/core/api-requests/axios';
import { setCurrentBattleState } from 'src/core/redux/reducers/battleSlice';

const useArenaContainerHook = () => {

  const battle = useSelector((state: any) => state.battle);

  const [loading, setLoading] = useState(true);
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0);


  let selectedQuestion = null;
  if (battle.questionsData) {
    selectedQuestion = battle.questionsData[selectedQuestionIndex];
  }

  const dispatch = useDispatch();

  const fetchAndDispatchQuestions = async () => {
    const questionsData = await Promise.all(battle.questions.map(async (qId: string) => {
      let question = (await apiCall({ key: "fetch_question", params: { question_id: qId } }) as any).data
      question = { ...question, id: qId };
      return question;
    }));

    dispatch(setCurrentBattleState({
      ...battle,
      questionsData
    }))

    setSelectedQuestionIndex(0);
    setLoading(false);
  }

  useEffect(() => {
    fetchAndDispatchQuestions();
    // setLoading(false);
  }, [])


  return { loading, setSelectedQuestionIndex, selectedQuestion, battle, selectedQuestionIndex }
}

export default useArenaContainerHook