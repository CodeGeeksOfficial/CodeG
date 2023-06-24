import React from 'react'
import { useCodeEditorContext } from './CodeEditorWrapper';

type Props = {}

const InputBox = (props: Props) => {

  const { setValue, getValues, watch } = useCodeEditorContext();
  return (
    <textarea className='bg-[#272727] w-full rounded-md h-full resize-none p-2' defaultValue={getValues('input')} onChange={(e) => {
      setValue('input', e.target.value);
    }}
      placeholder='Please enter your input here'
    >
    </textarea>
  )
}

export default InputBox