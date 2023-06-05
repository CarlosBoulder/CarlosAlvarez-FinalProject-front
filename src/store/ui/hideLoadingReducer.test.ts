import {
  UiStateStructure,
  hideLoadingActionCreator,
  uiReducer,
} from "./uiSlice";

describe("Given a showLoadinReducer reducer", () => {
  describe("When it receives isLoading state as false", () => {
    test("Then it should return a new state isLoading true", () => {
      const initialState: UiStateStructure = {
        isLoading: true,
      };

      const newState: UiStateStructure = {
        isLoading: false,
      };

      const expectedState: UiStateStructure = {
        isLoading: newState.isLoading,
      };

      const actionCreator = hideLoadingActionCreator();

      const newExpectedState = uiReducer(initialState, actionCreator);

      expect(newExpectedState).toStrictEqual(expectedState);
    });
  });
});
