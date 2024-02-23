import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IntercomState} from "../../type";
import {RIGHT_PASSWORD} from "../../constants";

const IntercomState: IntercomState = {
  password: "",
  isActivePassword: false,
};


export const passwordSlice = createSlice({
  name: "intercom",
  initialState: IntercomState,
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

      if (state.password === RIGHT_PASSWORD) {
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
