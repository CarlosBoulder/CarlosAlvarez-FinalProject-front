import { createSlice } from "@reduxjs/toolkit";

export interface UiStateStructure {
  isLoading: boolean;
}

const initialState: UiStateStructure = {
  isLoading: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    showLoading: (currentState: UiStateStructure): UiStateStructure => ({
      ...currentState,
      isLoading: true,
    }),
  },
});

export const { showLoading: showLoadingActionCreator } = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
