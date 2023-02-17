import React from 'react'
import Image from 'next/image'
import CreateAContestIllustration from 'src/lib/illustrations/createacontest-illustration.png'

type Props = { className: string }

const CreateAContest = (props: Props) => {
  return (
    <div className={props.className}>
      <div className='flex border-[1px] border-black rounded-lg w-fit mx-auto'>
        <div className='flex flex-col p-6'>
          <button className='md:w-3/4 text-xl md:text-3xl font-semibold px-4 py-2 border-[1px] hover:shadow-lg border-[#8f9092] rounded-md'>Create a Contest</button>
          <p className='md:w-3/4 pt-2 font-light'>Want to organise your own contest? We&#39;re here to host</p>
        </div>
        <div className='px-5'>
          <Image src={CreateAContestIllustration} alt="" className='hidden sm:block h-40 w-auto'/>
        </div>
      </div>
    </div>
  )
}

CreateAContest.defaultProps = {
  className: ""
}

export default CreateAContest