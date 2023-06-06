import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FeedbackPayloadStructure, UiStateStructure } from "./types";

const initialState: UiStateStructure = {
  isLoading: false,
  isError: false,
  message: "",
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    showLoading: (currentState: UiStateStructure): UiStateStructure => ({
      ...currentState,
      isLoading: true,
    }),

    hideLoading: (currentState: UiStateStructure): UiStateStructure => ({
      ...currentState,
      isLoading: false,
    }),

    showFeedback: (
      currentState: UiStateStructure,
      action: PayloadAction<FeedbackPayloadStructure>
    ): UiStateStructure => ({
      ...currentState,
      isError: action.payload.isError,
      message: action.payload.message,
    }),
  },
});

export const {
  showLoading: showLoadingActionCreator,
  hideLoading: hideLoadingActionCreator,
  showFeedback: showFeedbackActionCreator,
} = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
