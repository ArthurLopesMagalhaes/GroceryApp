import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  name: string;
  age: number;
}

const initialState = {
  name: "",
  age: 18,
} as UserState;

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setAge: (state, action) => {
      state.age = action.payload;
    },
  },
});

export const { setName, setAge } = userSlice.actions;
export default userSlice.reducer;
