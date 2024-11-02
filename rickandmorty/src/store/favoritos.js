import { createSlice } from "@reduxjs/toolkit";

const favoritos = createSlice({
  name: "favoritos",
  initialState: {
    items: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      if (!state.items.some((item) => item.id === action.payload.id)) {
        state.items.push(action.payload);
      }
    },
    removeFavorite: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritos.actions;
export default favoritos.reducer;
