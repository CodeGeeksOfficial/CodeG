import React, { useState } from 'react'
import CodeEditor from 'src/components/common/CodeEditorWrapper/CodeEditor'
import CodeEditorWrapper from 'src/components/common/CodeEditorWrapper/CodeEditorWrapper'
import DropDown from 'src/components/common/CodeEditorWrapper/Dropdown'
import InputBox from 'src/components/common/CodeEditorWrapper/InputBox'
import OutputBox from 'src/components/common/CodeEditorWrapper/OutputBox'
import QuestionRunButton from 'src/components/common/CodeEditorWrapper/QuestionRunButton'
import QuestionSubmitButton from 'src/components/common/CodeEditorWrapper/QuestionSubmitButton'
import { ChevronDownIcon } from "@heroicons/react/20/solid";

type Props = {
  questionData: any
}

const ArenaCodeEditor = ({ questionData }: Props) => {

  const [tabOpen, setTabOpen] = useState("");

  return (
    <CodeEditorWrapper>
      <DropDown />
      <div className={`${tabOpen === "" ? "h-[calc(100%-120px)]" : "h-[calc(100%-440px)]"}`}>
        <CodeEditor />
      </div>

      {(tabOpen === "Input" || tabOpen === "Output") &&
        <div className='mx-5 mt-5 space-y-4 p-5 bg-[#1e1e1e] rounded-md h-[300px]'>
          <div className='flex gap-4'>
            <button className={`${tabOpen === "Input" && "underline"}`} onClick={() => { setTabOpen("Input") }}>Input</button>
            <button className={`${tabOpen === "Output" && "underline"}`} onClick={() => { setTabOpen("Output") }}>Output</button>
          </div>

          <div className='h-[210px]'>
            {tabOpen === "Input" ? <InputBox /> :
              <OutputBox />
            }
          </div>
        </div>
      }

      <div className='flex justify-between h-[60px] items-center px-5'>
        <button
          onClick={() => { if (tabOpen === "") setTabOpen("Input"); else setTabOpen("") }}
          className='flex items-center gap-1'
        >
          Console<ChevronDownIcon width={20} className={`${tabOpen === "" ? "rotate-180" : ""} duration-150`} />
        </button>
        <div className='flex gap-4'>
          <QuestionRunButton questionId={questionData.id} invokerFunction={() => { setTabOpen('Output') }} />
          <QuestionSubmitButton />
        </div>
      </div>
    </CodeEditorWrapper >
  )
}

export default ArenaCodeEditor