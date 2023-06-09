import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FeedbackPayloadStructure, UiStateStructure } from "./types";

const initialState: UiStateStructure = {
  isLoading: false,
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
      showFeedback: action.payload.showFeedback,
      message: action.payload.message,
    }),

    hideFeedback: (currentState: UiStateStructure): UiStateStructure => ({
      ...currentState,
      showFeedback: false,
      message: "",
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
