import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import CodeEditorWrapper from "src/components/common/CodeEditorWrapper/CodeEditorWrapper";
import CodeEditor from "src/components/common/CodeEditorWrapper/CodeEditor";
import DropDown from "src/components/common/CodeEditorWrapper/Dropdown";
import InputBox from "src/components/common/CodeEditorWrapper/InputBox";
import OutputBox from "src/components/common/CodeEditorWrapper/OutputBox";
import QuestionRunButton from "src/components/common/CodeEditorWrapper/QuestionRunButton";
import QuestionSubmitButton from "src/components/common/CodeEditorWrapper/QuestionSubmitButton";
import usePracticeEditorHook from "./usePracticeEditorHook";

type Props = {
  questionId: string;
};

const PracticeEditor = ({ questionId }: Props) => {

  const [tabOpen, setTabOpen] = useState("");
  const { updateSubmission } = usePracticeEditorHook();

  return (
    <CodeEditorWrapper>
      <div className='w-full py-2.5 px-8'>
        <DropDown />
      </div>
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
          <QuestionRunButton questionId={questionId} invokerFunction={() => { setTabOpen('Output') }} />
          <QuestionSubmitButton questionId={questionId} invokerFunction={() => { setTabOpen('Output') }} callbackFunction={updateSubmission} />
        </div>
      </div>
    </CodeEditorWrapper >
  );
};

export default PracticeEditor;
