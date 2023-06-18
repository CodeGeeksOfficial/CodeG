import React, { createContext, useContext } from 'react'
import { useForm } from 'react-hook-form'
import languagesConfig from './languagesConfig';

type Props = {
  children?: any
}

const codeEditorContext = createContext<any>(null);

const CodeEditorWrapper = ({ children }: Props) => {

  const { setValue, getValues, watch } = useForm({ defaultValues: languagesConfig[0] });

  return (
    <codeEditorContext.Provider value={{ setValue, getValues, watch }}>
      {children}
    </codeEditorContext.Provider>
  )
}

export default CodeEditorWrapper

export const useCodeEditorContext = () => {
  return useContext(codeEditorContext);
};