import { configureStore } from "@reduxjs/toolkit";
import notificationPreferencesReducer from "./reducers/notificationPreferencesReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer } from "redux-persist";

import userReducer from "./reducers/userReducer";
import chartReducer from "./reducers/chartReducer";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

export const store = configureStore({
  reducer: {
    user: userReducer,
    notification: notificationPreferencesReducer,
    cart: chartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
