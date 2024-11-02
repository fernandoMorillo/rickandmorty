import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./favoritos";

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
});
