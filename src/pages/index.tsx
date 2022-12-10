import React from 'react'
import Logo from 'src/lib/assets/logo.svg'
import TestComp from 'src/components/TestComp'
import Image from 'next/image'

type Props = {}

const Index = (props: Props) => {
  return (
    <div className='w-20 h-20'>
      {/* <Image src={Logo} alt=""/> */}
      <Logo className='border-2'/>
      <TestComp/>
    </div>
  )
}

export default Index