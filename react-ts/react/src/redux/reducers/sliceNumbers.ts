import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  count: number;
  name: string;
}

const INITIAL_STATE: InitialState = {
  count: 0,
  name: "Igor",
};

const sliceCounter = createSlice({
  name: "counter",
  initialState: INITIAL_STATE,
  reducers: {
    changeName(state: InitialState, { payload }: PayloadAction<string>) {
      state.name = payload;
    },

    changeCount(state: InitialState, { payload }: PayloadAction<number>) {
      state.count += payload;
    },
  },
});

export default sliceCounter.reducer;
export const { changeName, changeCount } = sliceCounter.actions;
