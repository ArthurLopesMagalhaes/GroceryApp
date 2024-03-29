import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  id: number;
  name: string;
  age: number;
  email: string;
  avatar: string;
  token: string;
}

const initialState = {
  id: 0,
  name: "",
  age: 0,
  email: "",
  avatar: "https://github.com/ArthurLopesMagalhaes.png",
  token: "",
} as UserState;

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setId: (state, action) => {
      state.id = action.payload;
    },
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
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setName, setAge, setEmail, setAvatar, setToken } =
  userSlice.actions;
export default userSlice.reducer;
