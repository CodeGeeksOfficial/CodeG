import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "../store";

export interface inputState {
  inputState: {
    input: string;
  };
}

const initialState: inputState = {
  inputState: {
    input: " ",
  },
};

export const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    setInput(state, action) {
      const { input } = action.payload;
      state.inputState.input = input;
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.input,
      };
    },
  },
});

export const { setInput } = inputSlice.actions;

export const currentinputState = (state: AppState) => state.input.inputState;

export default inputSlice.reducer;
