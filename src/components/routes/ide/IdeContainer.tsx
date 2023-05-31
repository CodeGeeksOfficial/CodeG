import React from "react";
import Navbar from 'src/components/common/Navbar/Navbar'
import CodeEditor from "./CodeEditor";

type Props = {};

const IdeContainer = (props: Props) => {
  return (
    <div>
      <Navbar />
      <CodeEditor />
    </div>
  );
};

export default IdeContainer;
