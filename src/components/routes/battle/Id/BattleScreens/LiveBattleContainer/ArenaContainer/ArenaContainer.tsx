import React from 'react'
import useArenaContainerHook from './useArenaContainerHook'
import FullScreenLoader from 'src/components/common/Loaders/PacmanFullScreenLoader'
import QuestionInfo from 'src/components/routes/practice/QuestionInfo'
import ArenaCodeEditor from './ArenaCodeEditor/ArenaCodeEditor'

type Props = {}

const ArenaContainer = (props: Props) => {

  const { selectedQuestion, battle, setSelectedQuestionIndex, selectedQuestionIndex } = useArenaContainerHook();

  return (
    <div className='w-full h-full flex'>
      <div className='flex flex-col px-4 py-5 gap-6'>
        {battle.questions.map((qId: string, index: number) => <button
          key={index}
          onClick={() => { setSelectedQuestionIndex(index) }}
          className={`py-2 px-4 ${(selectedQuestionIndex === index) ? "bg-orange-100 text-black" : "border border-orange-100 hover:bg-orange-900 duration-150"} rounded-lg relative`}
        >
          <p className='absolute -right-3 -top-2 text-[10px] bg-orange-800 text-white rounded-lg px-1'>
            {(battle.submissionsData && battle?.submissionsData[qId][0]) ? battle?.submissionsData[qId][0].score : "0"} / {battle.questionsData && battle.questionsData.find((q: any) => { return q.id === qId }).points}
          </p>
          {index + 1}
        </button>)}
      </div>
      <div className='w-2/5'>
        <QuestionInfo question={selectedQuestion} />
      </div>
      <div className='w-3/5'>
        <ArenaCodeEditor questionData={selectedQuestion} />
      </div>
    </div>
  )
}

export default ArenaContainer