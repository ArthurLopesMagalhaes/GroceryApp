import { createSlice } from "@reduxjs/toolkit";

interface SignUpState {
  email: string;
  password: string;
  full_name: string;
  nickname: string;
  phone_number: number;
  gender: string;
  birth_date: string;
  address: string;
  avatar: string;
}

const initialState = {
  email: "",
  password: "",
  full_name: "",
  nickname: "",
  phone_number: 0,
  gender: "",
  birth_date: "",
  address: "",
  avatar:
    "https://res.cloudinary.com/dnolzl0oj/image/upload/v1659286192/GroceryApp/users/profile-picture_d7bruu.png",
} as SignUpState;

export const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setFullName: (state, action) => {
      state.full_name = action.payload;
    },
    setNickname: (state, action) => {
      state.nickname = action.payload;
    },
    setPhoneNumber: (state, action) => {
      state.phone_number = action.payload;
    },
    setGender: (state, action) => {
      state.gender = action.payload;
    },
    setBirthDate: (state, action) => {
      state.birth_date = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setAvatar: (state, action) => {
      state.avatar = action.payload;
    },
  },
});

export const {
  setEmail,
  setPassword,
  setFullName,
  setNickname,
  setPhoneNumber,
  setGender,
  setBirthDate,
  setAddress,
  setAvatar,
} = signupSlice.actions;
export default signupSlice.reducer;
