import { configureStore } from "@reduxjs/toolkit";
import exchangeRateReducer from "../redux/exchangeRateSlice/exchangeRateSlice";

export const store = configureStore({
  reducer: {
    exchangeRateReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;