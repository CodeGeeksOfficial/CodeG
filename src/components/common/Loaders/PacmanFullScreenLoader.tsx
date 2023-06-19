import React from 'react'
import { PacmanLoader } from 'react-spinners';

type Props = {
  loaderText: string
}

const FullScreenLoader = ({ loaderText }: Props) => {
  return (
    <div className='absolute backdrop-blur-sm top-0 left-0 w-screen h-screen flex items-center justify-center'>
      <div className='space-y-2'>
        <PacmanLoader color='white' />
        <p className='text-white'>{loaderText}</p>
      </div>
    </div>
  )
}

export default FullScreenLoader