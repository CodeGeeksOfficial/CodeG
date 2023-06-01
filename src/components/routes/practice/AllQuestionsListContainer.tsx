import React, { useEffect, useState } from 'react'
import { apiCall } from "src/core/api-requests/axios";
import { useRouter } from 'next/router';
import RatingStarFilled from 'src/lib/assets/icons/RatingStarFilled.svg'
import RatingStarUnfilled from 'src/lib/assets/icons/RatingStarUnfilled.svg'

type Props = {
  questionsList:{}[]
}

const AllQuestionsListContainer = ({questionsList}: Props) => {
  const router = useRouter()

  const handleSolveProblemId = (quesId:string) => {
    router.push(`/practice/${quesId}`);
  }

  return (
    <div className='flex font-mono text-white flex-col px-5'>
      <div className='my-8 px-10 text-xl py-6 w-fit bg-[#1E1F25] shadow-md h-50 rounded-2xl'>
        {'All Questions : '}
      </div>
      <div className='mb-2 pb-5 bg-[#1E1F25] shadow-md h-50 rounded-2xl'>
        <div className='p-5 flex w-full'>
          <span className='w-[10%]'>S.No </span>
          <span className='w-[70%]'>Name </span>
          <span className='w-[20%]'>Difficulty </span>
        </div>
        <hr className='h-2 bg-transparent'/>
        <div className=''>
          {questionsList && questionsList.map((ques:any,i)=>{
            return (
              <button
                className='flex mt-3 items-center w-full p-5 h-12 py-2 hover:bg-[#31313a] transition-all duration-200'
                key ={i}
                onClick={()=>handleSolveProblemId(ques?.id)}
              >
                <div className='flex w-[10%]'>{i+1}.</div>
                <div className='flex w-[70%]'>{ques?.title}</div>
                <div className='flex w-[20%]'>
                  {ques?.difficulty === 'easy' && 
                    <div className='flex gap-1'>
                      <RatingStarFilled/>
                      <RatingStarUnfilled/>
                      <RatingStarUnfilled/>
                    </div>
                  }

                  {ques?.difficulty === 'medium' && 
                    <div className='flex gap-1'>
                      <RatingStarFilled/>
                      <RatingStarFilled/>
                      <RatingStarUnfilled/>
                    </div>
                  }

                  {ques?.difficulty === 'hard' && 
                    <div className='flex gap-1'>
                      <RatingStarFilled/>
                      <RatingStarFilled/>
                      <RatingStarFilled/>
                    </div>
                  }
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default AllQuestionsListContainer