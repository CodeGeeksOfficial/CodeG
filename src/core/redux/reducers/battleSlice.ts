import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "../store";

export interface battleState {
  id: string;
  createdAt:Date | null,
  startedAt:Date | null,
  name: string;
  players:{}[] | null
  isPrivate: boolean;
  timeValidityInMinutes: number | null;
}

const initialState: battleState = {
    id: "",
    name:"",
    createdAt:null,
    startedAt:null,
    players:null,
    isPrivate:false,
    timeValidityInMinutes:null
};

export const battleSlice = createSlice({
  name: "battle",
  initialState,
  reducers: {
    setCurrentBattleState(state, action) {
      const { id, name, createdAt, startedAt, players, isPrivate, timeValidityInMinutes } = action.payload;
      state.id = id;
      state.name = name;
      state.createdAt = createdAt;
      state.startedAt = startedAt;
      state.players = players;
      state.isPrivate = isPrivate;
      state.timeValidityInMinutes = timeValidityInMinutes;
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
