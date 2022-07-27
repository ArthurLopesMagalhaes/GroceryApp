import { createSlice } from "@reduxjs/toolkit";

interface CartState {
  products: string[];
}

const initialState = {
  products: ["jdhnfghujsfb", "huishfi~çç~çaçsk", "sdasea"],
} as CartState;

export const CartSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setProduct } = CartSlice.actions;
export default CartSlice.reducer;
