import React from 'react'
import { HashLoader } from 'react-spinners';

type Props = {
  isOpen: boolean
}

const FullScreenLoader = ({ isOpen }: Props) => {

  if (isOpen) {
    return (
      <div className='absolute backdrop-blur-sm top-0 left-0 w-screen h-screen flex items-center justify-center'>
        <div className='space-y-2'>
          <HashLoader color='white' />
          <p className='text-white'>Loading...</p>
        </div>
      </div>
    )
  } else {
    return null;
  }
}

export default FullScreenLoader