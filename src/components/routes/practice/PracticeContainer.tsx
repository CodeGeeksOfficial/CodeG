import React from "react";
import Navbar from 'src/components/common/Navbar/Navbar'
import PracticeEditor from "./code-editor/PracticeEditor";
import QuestionInfo from "./QuestionInfo";

type Props = {
  question: {
    id: string;
  };
};

const PracticeContainer = ({ question }: Props) => {
  return (
    <div>
      <Navbar />
      <div className="w-screen h-[92vh] flex">
        <section className="w-1/2 h-full">
          <QuestionInfo question={question} />
        </section>
        <section className="w-1/2 h-full bg-[#141519] text-white">
          <PracticeEditor questionId={question.id} />
        </section>
      </div>
    </div>
  );
};

export default PracticeContainer;
