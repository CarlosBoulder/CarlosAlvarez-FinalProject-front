import {
  UiStateStructure,
  showLoadingActionCreator,
  uiReducer,
} from "./uiSlice";

describe("Given a showLoadinReducer reducer", () => {
  describe("When it receives isLoading state as false", () => {
    test("Then it should return a new state isLoading true", () => {
      const initialState: UiStateStructure = {
        isLoading: false,
      };

      const newState: UiStateStructure = {
        isLoading: true,
      };

      const expectedState: UiStateStructure = {
        isLoading: newState.isLoading,
      };

      const actionCreator = showLoadingActionCreator();

      const newExpectedState = uiReducer(initialState, actionCreator);

      expect(newExpectedState).toStrictEqual(expectedState);
    });
  });
});
