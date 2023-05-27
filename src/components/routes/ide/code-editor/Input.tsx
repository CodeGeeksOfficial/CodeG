import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  currentinputState,
  setInput,
} from "src/core/redux/reducers/inputSlice";

type Props = {};

const Input = (props: Props) => {
  const inputState = useSelector(currentinputState);
  const dispatch = useDispatch();

  return (
    <div className="w-full h-full">
      <div className="w-full h-[40px] bg-[#272727] px-4 py-2">Input</div>
      <textarea
        name="code-input"
        placeholder="Enter input"
        value={inputState.input}
        onChange={(e: any) => {
          dispatch(setInput({ input: e.target.value }));
        }}
        className="w-full h-[calc(100%-50px)] bg-transparent resize-none text-white p-4 border-none outline-none scroll-m-1"
      ></textarea>
    </div>
  );
};

export default Input;
