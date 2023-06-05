import Editor, { Monaco } from "@monaco-editor/react";
import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { apiCall } from "src/core/api-requests/axios";
import { selectIdeState } from "src/core/redux/reducers/ideSlice";
import { currentinputState } from "src/core/redux/reducers/inputSlice";
import { setOutput } from "src/core/redux/reducers/outputSlice";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { withAuthModal } from "src/components/common/Modals/Auth";
import { useAuth } from "src/utils/auth";
import FullScreenLoader from "src/components/common/Loaders/FullScreenLoader";

type Props = {
  route?: string;
  questionId?: any;
  openAuthModal: () => void
};

const CodeGEditor = ({ route, questionId, openAuthModal }: Props) => {
  const { currentUser } = useAuth()
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

  const compileCodeHandler = async (submit: boolean) => {
    try {
      setIsCodeCompiling(true);
      const response: any = await apiCall({
        key:
          route == "practice"
            ? submit
              ? "submit_code"
              : "compare_code"
            : "compile_code",
        ...(route == "practice" && {
          params: {
            question_id: questionId,
          },
        }),
        data: {
          language: ideState?.ext,
          code: getValue(),
          ...(route == "practice"
            ? { test_inputs: [inputState?.input] }
            : { input: inputState?.input }),
        },
      });

      const processId = response.data;

      let currentInterval = setInterval(async () => {
        try {
          const res: any = await apiCall({
            key: "code_status",
            customURL: "code/status/" + processId,
          });
          const {
            value,
          }: {
            value: any;
          } = res.data;
          if (value != "Queued" && value != "Processing") {
            clearInterval(currentInterval);
            if (route == "practice")
              dispatch(
                setOutput({
                  output: JSON.parse(value),
                })
              );
            else {
              const { stderr, stdout } = JSON.parse(value);
              dispatch(
                setOutput({
                  output: stderr != "" ? stderr : stdout,
                })
              );
            }
            setIsCodeCompiling(false);
          }
        } catch (error) {
          console.log(error);
          clearInterval(currentInterval);
          setIsCodeCompiling(false);
        }
      }, 3000);
    } catch (error) {
      console.log(error);
      setIsCodeCompiling(false);
    }
  };

  return (
    <div className="w-full h-[calc(100%-60px)] relative">
      <Editor
        height="100%"
        width="100%"
        theme="vs-dark"
        loading="<Loading/>"
        language={ideState?.editor_lang}
        value={ideState?.code}
        onMount={handleEditorDidMount}
      />
      <div className="flex absolute bottom-12 right-14">
        <button
          className="border-2 border-none px-4 py-2 rounded-md self-center text-[#303136] bg-[#00ffc3] hover:bg-white ease-in duration-100 hover:drop-shadow-[0_5px_5px_rgba(225,225,225,0.25)]"
          onClick={() => route === "ide" ? compileCodeHandler(false) : currentUser ? compileCodeHandler(false) : openAuthModal()}
        >
          Run
        </button>
        {route == "practice" ? (
          <button
            className=" border-2 border-none px-4 py-2 ml-8 rounded-md self-center text-[#303136] hover:bg-[#00ffc3] bg-white ease-in duration-100 hover:drop-shadow-[0_5px_5px_rgba(0,255,195,0.25)]"
            onClick={() => currentUser ? compileCodeHandler(true) : openAuthModal()}
          >
            Submit
          </button>
        ) : null}
      </div>
      <FullScreenLoader isOpen={isCodeCompiling}/>
    </div>
  );
};

export default withAuthModal(CodeGEditor);
