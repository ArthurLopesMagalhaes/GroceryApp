import { configureStore } from "@reduxjs/toolkit";
import notificationPreferencesReducer from "./reducers/notificationPreferencesReducer";

import userReducer from "./reducers/userReducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    notification: notificationPreferencesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
