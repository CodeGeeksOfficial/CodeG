import React from 'react'
import Image from 'next/image'
import CreateAContestIllustration from 'src/lib/illustrations/createacontest-illustration.png'
import Link from 'next/link'

type Props = { className: string }

const CreateAContest = (props: Props) => {
  return (
    <div className={props.className}>
      <div className='flex bg-white shadow-2xl rounded-lg w-fit mx-auto'>
        <div className='flex flex-col p-6'>
          <Link
            href={'/battle'}
            className='md:w-3/4 text-xl md:text-3xl font-semibold px-4 py-2 border-[1px] hover:bg-[#00ffc3] hover:text-[#303136] border-[#8f9092] hover:border-transparent rounded-md transition-all duration-200'
          >
            Create a Contest
          </Link>
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