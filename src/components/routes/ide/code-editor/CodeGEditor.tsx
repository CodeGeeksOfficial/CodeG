import Editor, { Monaco } from "@monaco-editor/react";
import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectIdeState } from "src/core/redux/reducers/ideSlice";

type Props = {};

const lang = [
  {
    ext: "cpp",
    editor_lang: "cpp",
    language: "C++",
    code: `#include<bits/stdc++.h>
using namespace std;

int main()
{
    cout<<"Hey Codie!"<<endl;
    return 0;
}`,
  },
  {
    ext: "py",
    editor_lang: "python",
    language: "Python",
    code: `print("Hey Codie!")`,
  },
  {
    ext: "java",
    editor_lang: "java",
    language: "Java",
    code: `public class Main {
    public static void main(String args[]) {
        System.out.println("Hey Codie!");
    }
}`,
  },
  {
    ext: "js",
    editor_lang: "javascript",
    language: "Node.js",
    code: `/* 
    Use INPUT variable to get stdin.
    Try console.log(INPUT);
*/
console.log('Hey Codie!');`,
  },
];

const CodeGEditor = (props: Props) => {
  const editorRef = useRef(null);

  const ideState = useSelector(selectIdeState);
  const dispatch = useDispatch();

  function handleEditorDidMount(editor: any, monaco: Monaco) {
    editorRef.current = editor;
  }

  return (
    <div className="w-full h-[92%] relative">
      <Editor
        height="100%"
        width="100%"
        theme="vs-dark"
        loading="<Loading/>"
        language={ideState?.editor_lang}
        value={ideState?.code}
        onMount={handleEditorDidMount}
      />
      <button className="absolute bottom-12 right-14 border-2 border-none px-4 py-2 rounded-md self-center text-[#303136] bg-[#00ffc3] hover:bg-white ease-in duration-100 hover:drop-shadow-[0_5px_5px_rgba(225,225,225,0.25)]">
        Run
      </button>
    </div>
  );
};

export default CodeGEditor;
