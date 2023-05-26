import React from "react";
import IdeNavbar from "./IdeNavbar";
import CodeEditor from "./CodeEditor";

type Props = {};

const IdeContainer = (props: Props) => {
  return (
    <div>
      <IdeNavbar />
      <CodeEditor />
    </div>
  );
};

export default IdeContainer;
