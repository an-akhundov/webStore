import { createSlice } from "@reduxjs/toolkit";

const changeLanguage = (state, action) => {
  state.language = action.payload;

  localStorage.setItem("language", JSON.stringify(state));
};

let initialState = {
  language: "EN",
};

const data = JSON.parse(localStorage.getItem("language"));

if (data) {
  initialState = data;
}

const langSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeLanguage,
  },
});

export default langSlice.reducer;
export const langActions = langSlice.actions;
