import React from "react";
import IdeNavbar from "../ide/IdeNavbar";
import PracticeEditor from "./code-editor/PracticeEditor";
import QuestionInfo from "./QuestionInfo";

type Props = {
  question: {};
};

const PracticeContainer = ({ question }: Props) => {
  return (
    <div>
      <IdeNavbar />
      <div className="w-screen h-[92vh] flex">
        <section className="w-1/2 h-full">
          <QuestionInfo question={question} />
        </section>
        <section className="w-1/2 h-full">
          <PracticeEditor />
        </section>
      </div>
    </div>
  );
};

export default PracticeContainer;
