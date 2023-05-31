import React from "react";
import AllQuestionsListContainer from "src/components/routes/practice/AllQuestionsListContainer";
import Navbar from 'src/components/common/Navbar/Navbar'

type Props = {};

const practice = (props: Props) => {
  return (
    <div className='h-screen bg-[#141519]'>
      <div className=' shadow-xl mb-5'>
        <Navbar/>
      </div>
      <AllQuestionsListContainer />
    </div>
  )
};

export default practice;
