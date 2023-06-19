import React from 'react'
import { useCodeEditorContext } from './CodeEditorWrapper';
import { apiCall } from 'src/core/api-requests/axios';
import Button from '../Button/Button';

type Props = {
  questionId: string
  invokerFunction: any
  callbackFunction: any
}

const QuestionRunButton = ({ questionId, invokerFunction, callbackFunction }: Props) => {

  const { setValue, getValues, watch } = useCodeEditorContext();

  const onClick = async () => {
    await invokerFunction();
    setValue('outputLoading', true)

    const payload = {
      code: getValues('code'),
      language: getValues('ext'),
      test_inputs: [getValues('input') || ""]
    }

    const pId = (await apiCall({ key: "compare_code", params: { question_id: questionId }, data: payload }) as any).data

    let intervalId = setInterval(async () => {
      try {
        const res: any = (await apiCall({
          key: "code_status",
          customURL: "code/status/" + pId,
        }) as any).data?.value;

        if (res !== "Queued" && res !== "Processing") {
          clearInterval(intervalId);
          console.log(res);
          setValue('codeOutput', res)
          setValue('outputLoading', false)
          await callbackFunction();
        }
      } catch (error) {
        console.log(error);
        clearInterval(intervalId);
        setValue('outputLoading', false)
      }
    }, 3000)

    console.log(pId);

  }

  return (
    <Button loading={watch('outputLoading')} loaderColor='black' onClick={onClick} className="bg-slate-300 text-black px-6 py-1.5 rounded-md">
      Run
    </Button>
  )
}

export default QuestionRunButton

QuestionRunButton.defaultProps = {
  invokerFunction: () => { },
  callbackFunction: () => { }
}