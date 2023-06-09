import { UiStateStructure } from "../types";
import { showLoadingActionCreator, uiReducer } from "../uiSlice";

describe("Given a showLoadinReducer reducer", () => {
  describe("When it receives isLoading state as false", () => {
    test("Then it should return a new state isLoading true", () => {
      const initialState: UiStateStructure = {
        isLoading: false,
        showFeedback: false,
        message: "",
      };

      const newState: UiStateStructure = {
        isLoading: true,
        showFeedback: false,
        message: "",
      };

      const expectedState: UiStateStructure = {
        isLoading: newState.isLoading,
        showFeedback: false,
        message: "",
      };

      const actionCreator = showLoadingActionCreator();

      const newExpectedState = uiReducer(initialState, actionCreator);

      expect(newExpectedState).toStrictEqual(expectedState);
    });
  });
});
