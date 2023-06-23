import bouldersMock, { boulder } from "../../mocks/bouldersMock";
import {
  BoulderState,
  bouldersReducer,
  loadBoulderByIdActionCreator,
} from "./boulderSlice";

describe("Given a loadBoulderById reducer", () => {
  describe("When it receives a boulder id and a loadBolderById action", () => {
    test("Then it should return the new state with the boulder selected", () => {
      const boulderById = boulder;

      const currentBouldersState: BoulderState = {
        boulders: bouldersMock,
      };

      const expectedNewBouldersState: BoulderState = {
        boulders: bouldersMock,
        boulderById: boulderById[0],
      };

      const selectedBoulder = loadBoulderByIdActionCreator(boulderById[0]);

      const newState = bouldersReducer(currentBouldersState, selectedBoulder);

      expect(newState).toStrictEqual(expectedNewBouldersState);
    });
  });
});
