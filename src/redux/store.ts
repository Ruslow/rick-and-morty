import { configureStore } from "@reduxjs/toolkit";
import slice from "./reduxSlice";
const store = configureStore({
  reducer: slice,
});

export default store;
