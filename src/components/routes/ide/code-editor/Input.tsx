import React from "react";

type Props = {};

const Input = (props: Props) => {
  return (
    <div className="w-full h-1/2">
      <div className="w-full h-[40px] bg-[#272727] px-4 py-2">Input</div>
      <textarea
        name="code-input"
        placeholder="Enter input"
        className="w-full h-[calc(100%-50px)] bg-transparent resize-none text-white p-4 border-none outline-none scroll-m-1"
      ></textarea>
    </div>
  );
};

export default Input;
