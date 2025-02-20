import { createSlice } from "@reduxjs/toolkit";
import { GOODS } from "../../data";

const addItemToCard = (state, action) => {
  const existingCartItemIndex = state.items.findIndex(
    (cartItem) => cartItem.id === action.payload
  );

  const existingCartItem = state.items[existingCartItemIndex];

  if (existingCartItem) {
    const updatedItem = {
      ...existingCartItem,
      quantity: existingCartItem.quantity + 1,
    };
    state.items[existingCartItemIndex] = updatedItem;
  } else {
    const product = GOODS.find((product) => product.id === action.payload);
    state.items.push({
      id: action.payload,
      name: product.name,
      price: product.price,
      img: product.imgUrl,
      quantity: 1,
    });
  }
  localStorage.setItem("cart", JSON.stringify(state));
};

const updateItemQuantity = (state, action) => {
  const updatedItemIndex = state.items.findIndex(
    (item) => item.id === action.payload.productId
  );

  const updatedItem = {
    ...state.items[updatedItemIndex],
  };

  updatedItem.quantity += action.payload.amount;

  if (updatedItem.quantity <= 0) {
    state.items.splice(updatedItemIndex, 1);
  } else {
    state.items[updatedItemIndex] = updatedItem;
  }

  localStorage.setItem("cart", JSON.stringify(state));
};

const selectItem = (state, action) => {
  state.selectedItem = action.payload;
  localStorage.setItem("cart", JSON.stringify(state));
};

let initialState = {
  selectedItem: 0,
  items: [],
};

const data = JSON.parse(localStorage.getItem("cart"));
if (data) {
  initialState = data;
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCard,
    updateItemQuantity,
    selectItem,
  },
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
