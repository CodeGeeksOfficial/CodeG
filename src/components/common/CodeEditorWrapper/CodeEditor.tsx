import { Editor } from '@monaco-editor/react'
import React from 'react'
import { useCodeEditorContext } from './CodeEditorWrapper';

const CodeEditor = () => {

  const { setValue, getValues, watch } = useCodeEditorContext();

  return (
    <Editor
      height="100%"
      width="100%"
      theme="vs-dark"
      loading="<Loading/>"
      language={getValues('editor_lang')}
      onChange={(e) => { setValue('code', e) }}
      value={getValues('code')}
    />
  )
}

export default CodeEditor