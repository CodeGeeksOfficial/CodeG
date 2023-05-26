import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { ideSlice } from "./reducers/ideSlice";

const createStore = () =>
  configureStore({
    reducer: {
      [ideSlice.name]: ideSlice.reducer,
    },
  });

export type AppStore = ReturnType<typeof createStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(createStore);
