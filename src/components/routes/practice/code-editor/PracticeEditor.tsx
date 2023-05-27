import React from "react";
import DropDown from "../../ide/code-editor/DropDown";
import CodeGEditor from "../../ide/code-editor/CodeGEditor";
import Input from "../../ide/code-editor/Input";
import Output from "../../ide/code-editor/Output";

type Props = {};

const PracticeEditor = (props: Props) => {
  return (
    <div className="w-full h-full bg-[#1e1e1e] text-[#e1e1e1]">
      <div className="w-full h-3/5">
        <DropDown />
        <CodeGEditor />
      </div>
      {/* <button>Expand</button> */}
      <div className="w-full h-2/5 border-x border-[#4f4f4f80] flex">
        <section className="w-full h-full border-r border-[#313131]">
          <Input />
        </section>
        <section className="w-full h-full">
          <Output />
        </section>
      </div>
    </div>
  );
};

export default PracticeEditor;
