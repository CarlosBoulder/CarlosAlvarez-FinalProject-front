import { UiStateStructure } from "../types";
import { showLoadingActionCreator, uiReducer } from "../uiSlice";

describe("Given a showLoadinReducer reducer", () => {
  describe("When it receives isLoading state as false", () => {
    test("Then it should return a new state isLoading true", () => {
      const initialState: UiStateStructure = {
        isLoading: false,
        isError: false,
        message: "",
        showFeedback: false,
      };

      const newState: UiStateStructure = {
        isLoading: true,
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

      const actionCreator = showLoadingActionCreator();

      const newExpectedState = uiReducer(initialState, actionCreator);

      expect(newExpectedState).toStrictEqual(expectedState);
    });
  });
});
