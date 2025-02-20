import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./storeSlices/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
