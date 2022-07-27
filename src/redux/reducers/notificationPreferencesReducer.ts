import { createSlice } from "@reduxjs/toolkit";

interface notificationState {
  buySomething: boolean;
  receivePoints: boolean;
  sendPayments: boolean;
  newPromo: boolean;
  newService: boolean;
}

const initialState = {
  buySomething: true,
  receivePoints: false,
  sendPayments: true,
  newPromo: false,
  newService: false,
} as notificationState;

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setBuySomething: (state, action) => {
      state.buySomething = action.payload;
    },
    setReceivePoints: (state, action) => {
      state.receivePoints = action.payload;
    },
    setSendPayments: (state, action) => {
      state.sendPayments = action.payload;
    },
    setNewPromo: (state, action) => {
      state.newPromo = action.payload;
    },
    setNewService: (state, action) => {
      state.newService = action.payload;
    },
  },
});

export const {
  setBuySomething,
  setReceivePoints,
  setSendPayments,
  setNewPromo,
  setNewService,
} = notificationSlice.actions;

export default notificationSlice.reducer;
