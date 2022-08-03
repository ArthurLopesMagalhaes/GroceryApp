import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  name: string;
  age: number;
  email: string;
  avatar: string;
}

const initialState = {
  name: "",
  age: 0,
  email: "",
  avatar: "https://github.com/ArthurLopesMagalhaes.png",
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
    setAvatar: (state, action) => {
      state.avatar = action.payload;
    },
  },
});

export const { setName, setAge, setEmail, setAvatar } = userSlice.actions;
export default userSlice.reducer;
