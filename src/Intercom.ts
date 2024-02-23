import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IntercomState} from "./type";

const Intercom: IntercomState = {
  password: "",
  isActivePassword: false,
};

const rightPassword = "1337";

export const passwordSlice = createSlice({
  name: "intercom",
  initialState: Intercom,
  reducers: {
    enterNumber: (state, action: PayloadAction<string>) => {
      state.password += action.payload;
    },
    deleteNumber: (state) => {
      if (state.isActivePassword) {
        state.password = "";
        state.isActivePassword = false;
        return;
      }

      state.password = state.password.slice(0, -1);
    },
    checkPassword: (state) => {
      if (state.isActivePassword) {
        state.password = "";
        state.isActivePassword = false;
        return;
      }

      if (state.password === rightPassword) {
        state.password = "Access Granted";
        state.isActivePassword = true;
        return;
      }
      state.password = "Access Denied";
      state.isActivePassword = true;
    },
  },
});

export const eventPassword = passwordSlice.reducer;
export const {
  enterNumber,
  deleteNumber,
  checkPassword
} = passwordSlice.actions;
