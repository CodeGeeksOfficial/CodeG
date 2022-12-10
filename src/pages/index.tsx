import React from 'react'
import Navbar from 'src/components/common/Navbar/Navbar'
import MainCard from 'src/components/homepage/MainCard'

type Props = {}

const Index = (props: Props) => {
  return (
    <div>
      <Navbar />
      <MainCard />
      <div className='text-center text-xl'>Coming Soon !!</div>
    </div>
  )
}

export default Index