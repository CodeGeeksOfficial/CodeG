import Editor, { Monaco } from "@monaco-editor/react";
import axios from "axios";
import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { apiCall } from "src/core/api-requests/axios";
import { selectIdeState } from "src/core/redux/reducers/ideSlice";
import { currentinputState } from "src/core/redux/reducers/inputSlice";
import { setOutput } from "src/core/redux/reducers/outputSlice";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

type Props = {};

const CodeGEditor = (props: Props) => {
  const [isCodeCompiling, setIsCodeCompiling] = React.useState(false);

  const editorRef: any = useRef(null);

  const ideState = useSelector(selectIdeState);
  const inputState = useSelector(currentinputState);
  const dispatch = useDispatch();

  function handleEditorDidMount(editor: any, monaco: Monaco) {
    editorRef.current = editor;
  }

  function getValue() {
    return editorRef.current.getValue();
  }

  const compileCodeHandler = async () => {
    try {
      setIsCodeCompiling(true)
      const response: any = await apiCall({
        key: "compile_code",
        data: {
          language: ideState?.ext,
          code: getValue(),
          input: inputState?.input,
        },
      });

      const processId = response.data;

      let currentInterval = setInterval(async () => {
        try {
          // const res: any = await apiCall({
          //   key: "code_status",
          //   customURL: `code/status/${processId}}`,
          // });
          const res: any = await axios.get(
            "https://codeg-backend.onrender.com/code/status/" + processId
          );
          const {
            value,
          }: {
            value: any;
          } = res.data;
          if (value != "Queued" && value != "Processing") {
            clearInterval(currentInterval);
            const { stderr, stdout } = JSON.parse(value);
            dispatch(
              setOutput({
                output: stderr != "" ? stderr : stdout,
              })
            );
            setIsCodeCompiling(false)
          }
        } catch (error) {
          console.log(error);
          clearInterval(currentInterval);
          setIsCodeCompiling(false)
        }
      }, 1000);
    } catch (error) {
      console.log(error);
      setIsCodeCompiling(false)
    }
  };

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
      <button
        className="absolute bottom-12 right-14 border-2 border-none px-4 py-2 rounded-md self-center text-[#303136] bg-[#00ffc3] hover:bg-white ease-in duration-100 hover:drop-shadow-[0_5px_5px_rgba(225,225,225,0.25)]"
        onClick={compileCodeHandler}
      >
        Run
      </button>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isCodeCompiling}
        // onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default CodeGEditor;
