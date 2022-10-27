import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "../../types/types";
const initialState: InitialState = {
  isAuth: false,
  name: "",
};

export const storage = createSlice({
  name: "storage",
  initialState,
  reducers: {
    storeName: (state, { payload }) => {
      state.isAuth = true;
      sessionStorage.setItem("userName", payload);
    },
    getName: (state) => {
      let isNameExist = sessionStorage.getItem("userName") as string;

      if (!isNameExist) {
        state.isAuth = false;
      } else {
        state.name = sessionStorage.getItem("userName") as string;
        state.isAuth = true;
      }
    },
    logout: (state) => {
      state.isAuth = false;
      sessionStorage.clear();
    },
  },
  extraReducers: () => {},
});
export const { storeName, getName, logout } = storage.actions;
export default storage.reducer;
