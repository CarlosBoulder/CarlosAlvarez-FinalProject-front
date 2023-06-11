import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import BoulderStructure from "../types";

export interface PaginatedBoulderState extends BoulderState {
  currentPage: number;
  totalPages: number;
}

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

    createBoulder: (
      currenState: BoulderState,
      action: PayloadAction<BoulderStructure>
    ): BoulderState => ({
      ...currenState,
      boulders: [...currenState.boulders, action.payload],
    }),
  },
});

export const {
  loadBoulders: loadBouldersActionCreator,
  deleteBoulders: deleteBouldersActionCreator,
  createBoulder: createBoulderActionCreator,
} = boulderSlice.actions;

export const bouldersReducer = boulderSlice.reducer;
