import { createSlice } from "@reduxjs/toolkit";
// import { IUserState } from "./userReducer";

export interface IUser {
  name: string;
  email: string;
}

interface IUserState {
  user: IUser | null;
}
const initialState: IUserState = {
  user: null,
};

export const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logoff: (state, action) => {
      state.user = null;
    },
  },
});

export const { login, logoff } = userSlice.actions;
