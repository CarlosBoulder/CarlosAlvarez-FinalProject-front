import bouldersMock from "../../mocks/bouldersMock";
import BoulderStructure from "../types";
import {
  BoulderState,
  loadBouldersActionCreator,
  bouldersReducer,
} from "./boulderSlice";

describe("Given a loadBoulders reducer", () => {
  describe("When it receives an empty list of boulders and a loadBoulders action with one boulder", () => {
    test("Then it should return a list with one boulder", () => {
      const currentState: BoulderState = {
        boulders: [],
      };

      const boulders: BoulderStructure[] = bouldersMock;

      const expectedBouldersState: BoulderState = {
        boulders: boulders,
      };

      const loadBouldersAction = loadBouldersActionCreator(boulders);

      const newBoulderState = bouldersReducer(currentState, loadBouldersAction);

      expect(newBoulderState).toStrictEqual(expectedBouldersState);
    });
  });
});
