import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "../store";

export interface battleState {
  id: string;
  battlename: string;
  isAdmin: boolean;
  createdAt:string,
  startedAt:string,
  players:{}[] | null
  isPrivate: boolean;
  timeValidityInMinutes: number | null;
}

const initialState: battleState = {
    id: "",
    battlename:"",
    isAdmin:false,
    createdAt:'',
    startedAt:'',
    players:[],
    isPrivate:false,
    timeValidityInMinutes:0
};

export const battleSlice = createSlice({
  name: "battle",
  initialState,
  reducers: {
    setCurrentBattleState(state, action) {
      const { id, battlename, isAdmin, createdAt, startedAt, players, isPrivate, timeValidityInMinutes } = action.payload;
      state.id = id;
      state.battlename = battlename;
      state.isAdmin = isAdmin;
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
