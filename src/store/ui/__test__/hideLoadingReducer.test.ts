import { UiStateStructure } from "../types";
import { hideLoadingActionCreator, uiReducer } from "../uiSlice";

describe("Given a showLoadingReducer reducer", () => {
  describe("When it receives isLoading state as false", () => {
    test("Then it should return a new state isLoading true", () => {
      const initialState: UiStateStructure = {
        isLoading: true,
        isError: false,
        message: "",
        showFeedback: false,
      };

      const newState: UiStateStructure = {
        isLoading: false,
        isError: false,
        message: "",
        showFeedback: false,
      };

      const expectedState: UiStateStructure = {
        isLoading: newState.isLoading,
        isError: false,
        message: "",
        showFeedback: false,
      };

      const actionCreator = hideLoadingActionCreator();

      const newExpectedState = uiReducer(initialState, actionCreator);

      expect(newExpectedState).toStrictEqual(expectedState);
    });
  });
});
