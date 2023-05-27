import React, { useState } from "react";
import { apiCall } from "src/core/api-requests/axios";

type Props = {};

const Question = () => {
  const [examples, setExamples] = useState(1);
  const [constraints, setConstraints] = useState(1);
  const [solutions, setSolutions] = useState(1);

  const uploadQuestionHandler = async (e: any) => {
    e.preventDefault();
    try {
      const form: any = document.querySelector("#question_tool");
      const data = new FormData(form);
      const pairs = Array.from(data.entries());
      let apiPayload: any = {
        example: [],
        constraints: [],
        solution: [],
      };
      for (let pair of pairs) {
        const key: any = pair[0];
        const value = pair[1];
        if (
          key.includes("input") ||
          key.includes("output") ||
          key.includes("explanation")
        ) {
          let index = parseInt(key.split("_")[1]);
          let innerKey = key.split("_")[0];
          apiPayload["example"][index] = {
            ...apiPayload["example"][index],
            [innerKey]: value,
          };
        } else if (key.includes("constraint")) {
          let index = parseInt(key.split("_")[1]);
          apiPayload["constraints"][index] = value;
        } else if (key.includes("code") || key.includes("language")) {
          let index = parseInt(key.split("_")[1]);
          let innerKey = key.split("_")[0];
          apiPayload["solution"][index] = {
            ...apiPayload["solution"][index],
            [innerKey]: value,
          };
        } else apiPayload[key] = value;
      }
      console.log(apiPayload);

      const response = await apiCall({
        key: "upload_question",
        data: apiPayload,
      });
      form.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      className="w-screen flex flex-col items-center mt-16"
      id="question_tool"
    >
      <div className="mb-5">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          className="border-2 border-black"
        />
      </div>
      <div className="mb-5">
        <label htmlFor="difficulty">Difficulty:</label>
        <select
          name="difficulty"
          id="difficulty"
          defaultValue="0"
          className="border-2 border-black"
        >
          <option disabled value="0">
            Select Difficulty
          </option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <div className="mb-5">
        <label htmlFor="difficulty">Points:</label>
        <select
          name="points"
          id="points"
          className="border-2 border-black"
          defaultValue="0"
        >
          <option disabled value="0">
            Select points
          </option>
          <option value={50}>50</option>
          <option value={100}>100</option>
          <option value={200}>200</option>
        </select>
      </div>
      <div className="mb-5">
        <label htmlFor="question">Question:</label>
        <input
          type="text"
          name="question"
          id="question"
          className="border-2 border-black"
        />
      </div>
      <div className="flex my-4">
        <button
          onClick={(e) => {
            e.preventDefault();
            setExamples((prev) => ++prev);
          }}
          className="mr-5 border border-black bg-sky-500 text-[#e1e1e1]"
        >
          Add example
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setExamples((prev) => --prev);
          }}
          className="border border-black bg-rose-500 text-[#e1e1e1]"
        >
          Delete example
        </button>
      </div>
      {[...Array(examples)].map((example: any, idx: any) => {
        return (
          <div key={idx} className="mb-5">
            <h3>Example {idx + 1}</h3>
            <div className="mb-2">
              <label htmlFor={`input_${idx}`}>Input:</label>
              <input
                type="text"
                name={`input_${idx}`}
                id={`input_${idx}`}
                className="border-2 border-black"
              />
            </div>
            <div className="mb-2">
              <label htmlFor={`output_${idx}`}>Output:</label>
              <input
                type="text"
                name={`output_${idx}`}
                id={`output_${idx}`}
                className="border-2 border-black"
              />
            </div>
            <div className="mb-2">
              <label htmlFor={`explanation_${idx}`}>Explanation:</label>
              <input
                type="text"
                name={`explanation_${idx}`}
                id={`explanation_${idx}`}
                className="border-2 border-black"
              />
            </div>
          </div>
        );
      })}
      <div className="flex my-4">
        <button
          onClick={(e) => {
            e.preventDefault();
            setConstraints((prev) => ++prev);
          }}
          className="mr-5 border border-black bg-sky-500 text-[#e1e1e1]"
        >
          Add Constraint
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setConstraints((prev) => --prev);
          }}
          className="border border-black bg-rose-500 text-[#e1e1e1]"
        >
          Delete Constraint
        </button>
      </div>
      {[...Array(constraints)].map((constraint: any, idx: any) => {
        return (
          <div key={idx} className="mb-5">
            <h3>Constraint {idx + 1}</h3>
            <div>
              <label htmlFor={`constraint_${idx}`}>Constraint:</label>
              <input
                type="text"
                name={`constraint_${idx}`}
                id={`constraint_${idx}`}
                className="border-2 border-black"
              />
            </div>
          </div>
        );
      })}
      <div className="flex my-4">
        <button
          onClick={(e) => {
            e.preventDefault();
            setSolutions((prev) => ++prev);
          }}
          className="mr-5 border border-black bg-sky-500 text-[#e1e1e1]"
        >
          Add Solution
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setSolutions((prev) => --prev);
          }}
          className="border border-black bg-rose-500 text-[#e1e1e1]"
        >
          Delete Solution
        </button>
      </div>
      {[...Array(solutions)].map((solution: any, idx: any) => {
        return (
          <div key={idx} className="mb-5">
            <h3>Solution {idx + 1}</h3>
            <div className="mb-2">
              <label htmlFor={`code_${idx}`}>Code:</label>
              <input
                type="text"
                name={`code_${idx}`}
                id={`code_${idx}`}
                className="border-2 border-black"
              />
            </div>
            <div className="mb-2">
              <label htmlFor={`language_${idx}`}>Language:</label>
              <input
                type="text"
                name={`language_${idx}`}
                id={`language_${idx}`}
                className="border-2 border-black"
              />
            </div>
          </div>
        );
      })}
      <button
        onClick={uploadQuestionHandler}
        className="border border-black bg-violet-600 text-[#e1e1e1] p-2"
      >
        Upload
      </button>
    </form>
  );
};

const uploadQuestions = (props: Props) => {
  return <Question />;
};

export default uploadQuestions;
