import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const useArenaContainerHook = () => {

  const battle = useSelector((state: any) => state.battle);

  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0);


  let selectedQuestion = null;
  if (battle.questionsData) {
    selectedQuestion = battle.questionsData[selectedQuestionIndex];
  }

  useEffect(() => {
    setSelectedQuestionIndex(0);
  }, [])

  return { setSelectedQuestionIndex, selectedQuestion, battle, selectedQuestionIndex }
}

export default useArenaContainerHook