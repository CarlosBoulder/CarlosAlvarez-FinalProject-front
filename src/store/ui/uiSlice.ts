import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FeedbackPayloadStructure, UiStateStructure } from "./types";

const initialState: UiStateStructure = {
  isLoading: false,
  isError: false,
  showFeedback: false,
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
      showFeedback: action.payload.showFeedback,
    }),

    hideFeedback: (currentState: UiStateStructure): UiStateStructure => ({
      ...currentState,
      isError: false,
      message: "",
      showFeedback: false,
    }),
  },
});

export const {
  showLoading: showLoadingActionCreator,
  hideLoading: hideLoadingActionCreator,
  showFeedback: showFeedbackActionCreator,
  hideFeedback: hideFeedbackActionCreator,
} = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
