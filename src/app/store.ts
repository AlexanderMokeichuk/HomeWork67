import {configureStore} from "@reduxjs/toolkit";
import {eventPassword} from "../container/Intercom/IntercomState";

export const store = configureStore({
  reducer: {
    intercom: eventPassword,
  },
});

export type RootState  = ReturnType<typeof store.getState>;
