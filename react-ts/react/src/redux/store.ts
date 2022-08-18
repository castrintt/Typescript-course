import { configureStore } from "@reduxjs/toolkit";
import sliceCounter from "./reducers/sliceNumbers";

const store = configureStore({
  reducer: {
    numbers: sliceCounter,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
