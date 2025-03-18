import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./storeSlices/cartSlice";
import langReducer from "./storeSlices/langSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    lang: langReducer,
  },
  devTools: false,
});

export default store;
