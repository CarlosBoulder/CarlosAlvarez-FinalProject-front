import bouldersMock, { boulderDeletedMock } from "../../mocks/bouldersMock";
import {
  BoulderState,
  bouldersReducer,
  deleteBouldersActionCreator,
} from "./boulderSlice";

describe("Given a deleteBoulderReducer reducer", () => {
  describe("When it receives a list of boulders and a deleteBoulder action with one boulder id", () => {
    test("Then it should delete the boulder", () => {
      const expectedBouldersState: BoulderState = {
        boulders: boulderDeletedMock,
      };

      const currentState: BoulderState = {
        boulders: bouldersMock,
      };

      const newBouldersState: BoulderState = bouldersReducer(
        currentState,
        deleteBouldersActionCreator(bouldersMock[0].id)
      );

      expect(newBouldersState).toStrictEqual(expectedBouldersState);
    });
  });
});
