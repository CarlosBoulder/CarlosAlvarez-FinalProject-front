import { UiStateStructure } from "../types";
import { hideFeedbackActionCreator, uiReducer } from "../uiSlice";

describe("Given a hideFeedbackReducer reducer", () => {
  describe("When it receives", () => {
    test("Then it should", () => {
      const initialState: UiStateStructure = {
        isLoading: false,
        isError: true,
        message: "wrong credentials",
      };

      const newState: UiStateStructure = {
        isLoading: false,
        isError: false,
        message: "",
      };

      const expectedState: UiStateStructure = {
        isLoading: newState.isLoading,
        isError: newState.isError,
        message: newState.message,
      };

      const actionCreator = hideFeedbackActionCreator();

      const newExpectedState = uiReducer(initialState, actionCreator);

      expect(newExpectedState).toStrictEqual(expectedState);
    });
  });
});
