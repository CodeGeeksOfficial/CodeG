import React from 'react'
import { useCodeEditorContext } from './CodeEditorWrapper'
import { apiCall } from 'src/core/api-requests/axios'
import Button from '../Button/Button'

type Props = {
  questionId: string
  invokerFunction: any
  callbackFunction: any
}

const QuestionSubmitButton = ({ invokerFunction, callbackFunction, questionId }: Props) => {

  const { setValue, getValues, watch } = useCodeEditorContext();

  const onClick = async () => {
    await invokerFunction();
    setValue('outputLoading', true)

    const payload = {
      code: getValues('code'),
      language: getValues('ext')
    }

    const pId = (await apiCall({ key: "submit_code", params: { question_id: questionId }, data: payload }) as any).data

    let intervalId = setInterval(async () => {
      try {
        const res: any = (await apiCall({
          key: "code_status",
          customURL: "code/status/" + pId,
        }) as any).data?.value;

        if (res !== "Queued" && res !== "Processing") {
          clearInterval(intervalId);
          setValue('codeOutput', res)
          setValue('outputLoading', false)
          await callbackFunction(pId, questionId);
        }
      } catch (error) {
        console.log(error);
        clearInterval(intervalId);
        setValue('outputLoading', false)
      }
    }, 3000)

  }

  return (
    <Button loading={watch('outputLoading')} loaderColor='black' onClick={onClick} className="bg-slate-300 text-black px-6 py-1.5 rounded-md">
      Sumbit
    </Button>
  )
}

export default QuestionSubmitButton

QuestionSubmitButton.defaultProps = {
  invokerFunction: () => { },
  callbackFunction: () => { }
}