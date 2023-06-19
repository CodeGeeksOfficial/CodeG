import React from 'react'
import { useCodeEditorContext } from './CodeEditorWrapper';

type Props = {}

const OutputBox = (props: Props) => {

  const { setValue, getValues, watch } = useCodeEditorContext();

  if (getValues('outputLoading') === true) {
    return (
      <div className='bg-[#272727] w-full rounded-md text-white h-full p-2 space-y-2'>
        <div className='w-[88%] h-[10%] bg-neutral-700 rounded-sm animate-pulse'></div>
        <div className='w-[80%] h-[10%] bg-neutral-700 rounded-sm animate-pulse'></div>
        <div className='w-[50%] h-[10%] bg-neutral-700 rounded-sm animate-pulse'></div>
        <div className='w-[60%] h-[10%] bg-neutral-700 rounded-sm animate-pulse'></div>
        <div className='w-[56%] h-[10%] bg-neutral-700 rounded-sm animate-pulse'></div>
        <div className='w-[77%] h-[10%] bg-neutral-700 rounded-sm animate-pulse'></div>
      </div>
    )
  }

  return (
    <div className='bg-[#272727] w-full rounded-md text-white h-full p-2'>
      {watch('codeOutput')}
    </div>
  )
}

export default OutputBox