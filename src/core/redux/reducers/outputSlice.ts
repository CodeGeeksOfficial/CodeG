import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "../store";

export interface outputState {
  outputState: {
    output: string;
  };
}

const initialState: outputState = {
  outputState: {
    output: " ",
  },
};

export const outputSlice = createSlice({
  name: "output",
  initialState,
  reducers: {
    setOutput(state, action) {
      const { output } = action.payload;
      state.outputState.output = output;
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.output,
      };
    },
  },
});

export const { setOutput } = outputSlice.actions;

export const currentOutputState = (state: AppState) => state.output.outputState;

export default outputSlice.reducer;
