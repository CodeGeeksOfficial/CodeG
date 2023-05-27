import React from "react";
import PracticeNavbar from "./PracticeNavbar";
import Description from "./Description";

type Props = {
  question: {};
};

const QuestionInfo = ({ question }: Props) => {
  return (
    <div className="w-full h-full bg-[#1e1e1e] text-[#e1e1e1] border-r border-[#313131] px-5 pb-5">
      <PracticeNavbar />
      <section className="w-full h-[calc(100%-60px)]">
        <Description question={question} />
      </section>
    </div>
  );
};

export default QuestionInfo;
