import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface TokenStateStructure {
  id: string;
  token: string;
}

const initialUserState: TokenStateStructure = {
  id: "",
  token: "",
};

const userSlice = createSlice({
  name: "login",
  initialState: initialUserState,
  reducers: {
    loginUser: (
      _currentUserState: TokenStateStructure,
      action: PayloadAction<TokenStateStructure>
    ) => ({
      ...action.payload,
    }),
  },
});

export const { loginUser: loginActionCreator } = userSlice.actions;

export const userReducer = userSlice.reducer;
