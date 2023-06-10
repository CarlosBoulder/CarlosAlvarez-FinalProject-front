import bouldersMock from "../../mocks/bouldersMock";
import BoulderStructure from "../types";
import {
  BoulderState,
  bouldersReducer,
  createBoulderActionCreator,
} from "./boulderSlice";

describe("Given a createBoulder reducer", () => {
  describe("When it recieves a list of boulders and a new boulder data", () => {
    test("Then it should return a new state of the list with one more boulder created", () => {
      const currentBouldersState: BoulderState = {
        boulders: bouldersMock,
      };

      const newBoulder: BoulderStructure = {
        img: "imgUrl",
        name: "Test name",
        crag: "crag",
        spot: "spot",
        country: "country",
        description: "description",
        grade: "grade",
        id: "test id",
      };

      const newBoulderState = bouldersReducer(
        currentBouldersState,
        createBoulderActionCreator(newBoulder)
      );

      expect(newBoulderState.boulders).toHaveLength(4);
    });
  });
});
