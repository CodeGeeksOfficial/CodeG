import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "../store";

export interface ideState {
  ideState: {
    language: string;
    editor_lang: string;
    code: string;
    ext: string;
  };
}

const initialState: ideState = {
  ideState: {
    language: "C++",
    editor_lang: "cpp",
    code: `#include<bits/stdc++.h>
using namespace std;

int main()
{
    cout<<"Hey Codie!"<<endl;
    return 0;
}`,
    ext: "cpp",
  },
};

export const ideSlice = createSlice({
  name: "ide",
  initialState,
  reducers: {
    setCurrentLanguage(state, action) {
      const { language, editor_lang, code, ext } = action.payload;
      state.ideState.language = language;
      state.ideState.editor_lang = editor_lang;
      state.ideState.code = code;
      state.ideState.ext = ext;
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.ide,
      };
    },
  },
});

export const { setCurrentLanguage } = ideSlice.actions;

export const selectIdeState = (state: AppState) => state.ide.ideState;

export default ideSlice.reducer;
