import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Cat } from "@/types/cats";

type CatsState = { cats: Cat[]; isLoading: boolean; page: number };

const initialState: CatsState = {
  cats: [],
  isLoading: false,
  page: 1,
};

const catsSlice = createSlice({
  name: "cats",
  initialState,
  reducers: {
    setCats: (state, action: PayloadAction<Cat[]>) => {
      state.cats = [...state.cats, ...action.payload];
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
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setCats, setLike, setLoading } = catsSlice.actions;

export default catsSlice.reducer;
