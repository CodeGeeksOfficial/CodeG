import React from 'react'
import CodeEditorWrapper from 'src/components/common/CodeEditorWrapper/CodeEditorWrapper'
import RunCodeButton from '../../../../../../common/CodeEditorWrapper/RunCodeButton'
import DropDown from 'src/components/common/CodeEditorWrapper/Dropdown'
import CodeEditor from 'src/components/common/CodeEditorWrapper/CodeEditor'
import useArenaContainerHook from './useArenaContainerHook'
import FullScreenLoader from 'src/components/common/Loaders/PacmanFullScreenLoader'
import QuestionInfo from 'src/components/routes/practice/QuestionInfo'

type Props = {}

const ArenaContainer = (props: Props) => {

  const { loading, selectedQuestion, battle, setSelectedQuestionIndex, selectedQuestionIndex } = useArenaContainerHook();

  if (loading) {
    return <FullScreenLoader loaderText='Loading Questions' />
  }

  return (
    <div className='w-full h-full flex'>
      <div className='flex flex-col px-2 py-5 gap-4'>
        {battle.questions.map((qId: string, index: number) => <button
          key={index}
          onClick={() => { setSelectedQuestionIndex(index) }}
          className={`py-2 px-4 ${(selectedQuestionIndex === index) ? "bg-orange-100 text-black" : "border border-orange-100 hover:bg-orange-900 duration-150"} rounded-lg`}
        >
          {index + 1}
        </button>)}
      </div>
      <div className='w-2/5'>
        <QuestionInfo question={selectedQuestion} />
      </div>
      <div className='w-3/5'>
        <CodeEditorWrapper>
          <DropDown />
          <div className='h-[calc(100%-60px)] relative'>
            <CodeEditor />
            <RunCodeButton />
          </div>
        </CodeEditorWrapper>
      </div>
    </div>
  )
}

export default ArenaContainer