import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface TokenStateStructure {
  id: string;
  token: string;
}

export interface UserStateStructure extends TokenStateStructure {
  isLogged: boolean;
}

const initialUserState: UserStateStructure = {
  id: "",
  token: "",
  isLogged: false,
};

const userSlice = createSlice({
  name: "login",
  initialState: initialUserState,
  reducers: {
    loginUser: (
      _currentUserState: UserStateStructure,
      action: PayloadAction<TokenStateStructure>
    ): UserStateStructure => ({
      ...action.payload,
      isLogged: true,
    }),
    logoutUser: () => initialUserState,
  },
});

export const {
  loginUser: loginActionCreator,
  logoutUser: logoutActionCreator,
} = userSlice.actions;

export const userReducer = userSlice.reducer;
