import React from 'react'
import Footer from 'src/components/common/Footer/Footer'
import Navbar from 'src/components/common/Navbar/Navbar'
import CreateAContest from 'src/components/routes/home/CreateAContest'
import MainCard from 'src/components/routes/home/MainCard'

type Props = {}

const Index = (props: Props) => {
  return (
    <div className='w-screen h-screen'>
      <Navbar />
      <MainCard />
      <CreateAContest className='px-2 pb-16 bg-[#f0f0f0]' />
      {/* <div className='text-center text-xl py-12'>Coming Soon !!</div> */}
      <Footer />
    </div>
  )
}

export default Index