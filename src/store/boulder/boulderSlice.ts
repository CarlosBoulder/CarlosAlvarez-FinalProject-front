import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import BoulderStructure from "../types";

export interface BoulderState {
  boulders: BoulderStructure[];
}

export const initialState: BoulderState = {
  boulders: [],
};

export const boulderSlice = createSlice({
  name: "boulders",
  initialState,
  reducers: {
    loadBoulders: (
      currentState,
      action: PayloadAction<BoulderStructure[]>
    ): BoulderState => ({
      ...currentState,
      boulders: [...action.payload],
    }),
  },
});

export const { loadBoulders: loadBouldersActionCreator } = boulderSlice.actions;

export const loadBouldersReducer = boulderSlice.reducer;
