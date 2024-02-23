import {configureStore} from "@reduxjs/toolkit";
import {eventPassword} from "../Intercom";

export const store = configureStore({
  reducer: {
    intercom: eventPassword,
  },
});

export type RootState  = ReturnType<typeof store.getState>;
