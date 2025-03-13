import { createSlice } from "@reduxjs/toolkit";

const addItemToCard = (state, action) => {
  const existingCartItemIndex = state.items.findIndex(
    (cartItem) => cartItem.id === action.payload.id
  );

  const existingCartItem = state.items[existingCartItemIndex];

  if (existingCartItem) {
    state.items[existingCartItemIndex].quantity++;
  } else {
    state.items.push({ ...action.payload, quantity: 1 });
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

const clearCart = (state, action) => {
  state.items = [];
  localStorage.removeItem("cart");
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
    clearCart,
  },
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
