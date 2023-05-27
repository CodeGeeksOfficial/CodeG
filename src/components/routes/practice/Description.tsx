import React from "react";

type Props = {
  question: any;
};

// const question = {
//   title: "Maximum Subarray",
//   id: 53,
//   difficulty: "medium",
//   points: 100,
//   question:
//     "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
//   example: [
//     {
//       input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
//       output: "6",
//       explanation: "The subarray [4,-1,2,1] has the largest sum 6.",
//     },
//     {
//       input: "nums = [1]",
//       output: "1",
//       explanation: "The subarray [1] has the largest sum 1.",
//     },
//     {
//       input: "nums = [5,4,-1,7,8]",
//       output: "23",
//       explanation: "The subarray [5,4,-1,7,8] has the largest sum 23.",
//     },
//   ],
//   constraints: ["1 <= nums.length <= 10^5", "-104 <= nums[i] <= 10^4"],
// };

const Description = ({ question }: Props) => {
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
      <h2 className="text-xl my-4">Q. {question.title}</h2>
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
