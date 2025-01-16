import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Cat } from "@/types/cats";

const initialState: { cats: Cat[] } = {
  cats: [],
};

const catsSlice = createSlice({
  name: "cats",
  initialState,
  reducers: {
    setCats: (state, action: PayloadAction<Cat[]>) => {
      state.cats = [...action.payload];
    },
  },
});

export const { setCats } = catsSlice.actions;

export default catsSlice.reducer;
