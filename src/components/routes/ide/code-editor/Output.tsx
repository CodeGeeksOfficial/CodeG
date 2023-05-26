import React from "react";
import { useSelector } from "react-redux";
import { currentOutputState } from "src/core/redux/reducers/outputSlice";

type Props = {};

const Output = (props: Props) => {
  const outputState = useSelector(currentOutputState);
  return (
    <div className="w-full h-1/2">
      <div className="w-full h-[40px] bg-[#272727] px-4 py-2">Output</div>
      <div className="w-full h-[calc(100%-50px)] bg-transparent text-white p-4 scroll-m-1">
        {outputState?.output}
      </div>
    </div>
  );
};

export default Output;
