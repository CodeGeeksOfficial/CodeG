import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "../store";

const initialState: any = null;

export const battleSlice = createSlice({
  name: "battle",
  initialState,
  reducers: {
    setCurrentBattleState(state, action) {
      return { ...action.payload }
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.battle,
      };
    },
  },
});

export const { setCurrentBattleState } = battleSlice.actions;

export const selectBattleState = (state: AppState) => state.battle;

export default battleSlice.reducer;
