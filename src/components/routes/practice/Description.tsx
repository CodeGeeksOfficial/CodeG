import React from "react";
import { useSelector } from "react-redux";

type Props = {
  question: any;
};

const Description = ({ question }: Props) => {

  const battleData = useSelector((state: any) => state.battle);

  const getdifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "bg-emerald-400 text-emerald-900";

      case "medium":
        return "bg-yellow-400 text-yellow-900";

      case "hard":
        return "bg-red-400 text-red-900";

      default:
        "bg-emerald-400 text-emerald-900";
    }
  };
  return (
    <div className="w-full h-full overflow-scroll no-scrollbar">
      <div className="flex items-center justify-between">
        <div className="text-xl my-4">
          Q. {question?.title}
        </div>
      </div>
      <div
        className={
          "w-fit rounded-2xl px-4 py-px block " +
          getdifficultyColor(question.difficulty)
        }
      >
        {question.difficulty}
      </div>
      <p className="text-md my-8 block">{question.question}</p>
      {question.example.map(
        (
          {
            input,
            output,
            explanation,
          }: { input: string; output: string; explanation: string },
          idx: number
        ) => (
          <div key={idx} className="text-md font-bold">
            <h4 className="my-4">Example {idx + 1}</h4>
            <div className="w-full bg-[#272727] rounded-2xl p-4">
              {input ? (
                <div className="mb-2">
                  Input: <span className="font-normal">{input}</span>
                </div>
              ) : null}
              {output ? (
                <div className="mb-2">
                  Output: <span className="font-normal">{output}</span>
                </div>
              ) : null}
              {explanation ? (
                <div>
                  Explanation:{" "}
                  <span className="font-normal">{explanation}</span>
                </div>
              ) : null}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Description;
