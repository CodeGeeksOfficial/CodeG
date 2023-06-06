import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { ideSlice } from "./reducers/ideSlice";
import { outputSlice } from "./reducers/outputSlice";
import { inputSlice } from "./reducers/inputSlice";
import { battleSlice } from "./reducers/battleSlice";

const createStore = () =>
  configureStore({
    reducer: {
      [ideSlice.name]: ideSlice.reducer,
      [outputSlice.name]: outputSlice.reducer,
      [inputSlice.name]: inputSlice.reducer,
      [battleSlice.name]: battleSlice.reducer,
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
