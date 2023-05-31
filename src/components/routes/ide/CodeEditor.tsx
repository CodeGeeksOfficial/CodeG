import React from "react";
import DropDown from "./code-editor/DropDown";
import CodeGEditor from "./code-editor/CodeGEditor";
import Input from "./code-editor/Input";
import Output from "./code-editor/Output";

type Props = {};

const CodeEditor = (props: Props) => {
  return (
    <div className="w-screen h-[92vh] bg-[#1e1e1e] text-[#e1e1e1] flex">
      <div className="w-3/4 h-full">
        <DropDown />
        <CodeGEditor route = {"ide"}/>
      </div>
      <div className="w-1/4 h-full border-x border-[#4f4f4f80]">
        <section className="w-full h-1/2">
          <Input />
        </section>
        <section className="w-full h-1/2">
          <Output />
        </section>
      </div>
    </div>
  );
};

export default CodeEditor;
