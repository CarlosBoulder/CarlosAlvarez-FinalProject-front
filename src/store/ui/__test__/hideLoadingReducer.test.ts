import { UiStateStructure } from "../types";
import { hideLoadingActionCreator, uiReducer } from "../uiSlice";

describe("Given a showLoadingReducer reducer", () => {
  describe("When it receives isLoading state as false", () => {
    test("Then it should return a new state isLoading true", () => {
      const initialState: UiStateStructure = {
        isLoading: true,
        showFeedback: false,
        message: "",
      };

      const newState: UiStateStructure = {
        isLoading: false,
        showFeedback: false,
        message: "",
      };

      const expectedState: UiStateStructure = {
        isLoading: newState.isLoading,
        showFeedback: false,
        message: "",
      };

      const actionCreator = hideLoadingActionCreator();

      const newExpectedState = uiReducer(initialState, actionCreator);

      expect(newExpectedState).toStrictEqual(expectedState);
    });
  });
});
