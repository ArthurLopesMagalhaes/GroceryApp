import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  name: string;
  age: number;
  email: string;
}

const initialState = {
  name: "Arthur Lopes",
  age: 18,
  email: "arthurlopes462@gmail.com",
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
    setEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { setName, setAge } = userSlice.actions;
export default userSlice.reducer;
