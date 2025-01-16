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
    setLike: (state, action: PayloadAction<string>) => {
      state.cats = [
        ...state.cats.map((cat) => {
          if (cat.id === action.payload) {
            return { ...cat, isLiked: !cat.isLiked };
          }
          return cat;
        }),
      ];
    },
  },
});

export const { setCats, setLike } = catsSlice.actions;

export default catsSlice.reducer;
