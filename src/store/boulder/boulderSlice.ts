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

    deleteBoulders: (
      currenState,
      action: PayloadAction<string>
    ): BoulderState => ({
      ...currenState,
      boulders: currenState.boulders.filter(
        (boulder) => boulder.id !== action.payload
      ),
    }),
  },
});

export const {
  loadBoulders: loadBouldersActionCreator,
  deleteBoulders: deleteBouldersActionCreator,
} = boulderSlice.actions;

export const bouldersReducer = boulderSlice.reducer;
