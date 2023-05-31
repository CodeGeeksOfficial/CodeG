import React, { useEffect, useState } from 'react'
import { apiCall } from "src/core/api-requests/axios";
import { useRouter } from 'next/router';
import RatingStarFilled from 'src/lib/assets/icons/RatingStarFilled.svg'
import RatingStarUnfilled from 'src/lib/assets/icons/RatingStarUnfilled.svg'
import IdeNavbar from '../ide/IdeNavbar';
type Props = {}

const AllQuestionsListContainer = (props: Props) => {
  const router = useRouter()
  const [loadingAllQuestions, setLoadingAllQuestions] = useState(true)
  const [questionsList, setQuestionsList] = useState([])

  const getAllQuestionsList = async () => {
    try {
      await apiCall({
        key: "all_questions"
      }).then((response:any)=>{
        console.log(response.data)
        setQuestionsList(response.data)
        setLoadingAllQuestions(false)
      })
    } catch (error) {
      console.log(error)
    }
  }

  const handleSolveProblemId = (quesId:string) => {
    router.push(`/practice/${quesId}`);
  }

  useEffect(()=>{
    getAllQuestionsList()
  },[])

  return (
    <div className='h-screen bg-slate-100'>
      <div className=' shadow-xl mb-4'>
        <IdeNavbar/>
      </div>
      <div className='flex flex-col px-5'>
        <div className='p-5 mb-2 bg-white shadow-md h-50 rounded-md'>
          All Questions -
        </div>
        <div className='p-5 mb-2 bg-white shadow-md h-50 rounded-md'>
          <div className='flex w-full mb-4'>
            <span className='w-[10%]'>S.No </span>
            <span className='w-[70%]'>Name </span>
            <span className='w-[20%]'>Difficulty </span>
          </div>
          <hr className='h-2 bg-transparent'/>
          {loadingAllQuestions ? 
            <div>
              Loading...
            </div>
          :
            <div>
              {questionsList && questionsList.map((ques:any,i)=>{
                return (
                  <button
                    className='flex items-center w-full h-12 py-2 hover:bg-slate-50'
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
          }
        </div>
      </div>
    </div>
  )
}

export default AllQuestionsListContainer