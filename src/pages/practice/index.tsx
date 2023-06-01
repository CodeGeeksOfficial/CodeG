import React from "react";
import AllQuestionsListContainer from "src/components/routes/practice/AllQuestionsListContainer";
import Navbar from 'src/components/common/Navbar/Navbar'
import { apiCall } from "src/core/api-requests/axios";

type Props = {
  questionsList:{}[]
};

const practice = ({questionsList}: Props) => {
  // console.log(questionsList)
  return (
    <div className='h-screen bg-[#141519]'>
      <div className=' shadow-xl mb-5'>
        <Navbar/>
      </div>
      <AllQuestionsListContainer questionsList={questionsList}/>
    </div>
  )
};

export default practice;

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts

  let questionsList:any
  await apiCall({
    key: "all_questions"
  }).then((res:any)=>{
    questionsList = res.data
  }).catch((error)=>{
    console.log(error)
    questionsList = []
  })
 
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      questionsList,
    },
    revalidate:86400 ,  // in 24hrs
  };
}