import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterSlice from "../modules/counterSlice";
import todoSlice from "../modules/todoSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    todo: todoSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
