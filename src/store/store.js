import { configureStore } from "@reduxjs/toolkit";
import showVerticalNavReducer from "./showVerticalNavSlice"

export const store = configureStore({
  reducer: {
    showVerticalNav: showVerticalNavReducer,
  },
});
