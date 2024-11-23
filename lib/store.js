import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      products: productsReducer,
    },
  });
