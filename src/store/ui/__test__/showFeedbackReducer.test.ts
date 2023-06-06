import { FeedbackPayloadStructure, UiStateStructure } from "../types";
import { showFeedbackActionCreator, uiReducer } from "../uiSlice";

describe("Given a showFeedbackReducer reducer", () => {
  describe("When it receives a showFeedback action and the message 'wrong credentials'", () => {
    test("Then it should return a new state isError true and the message 'wrong credentials'", () => {
      const initialState: UiStateStructure = {
        isLoading: false,
        isError: false,
        message: "",
      };

      const newState: UiStateStructure = {
        isLoading: false,
        isError: true,
        message: "wrong credentials",
      };

      const expectedState: UiStateStructure = {
        isLoading: newState.isLoading,
        isError: newState.isError,
        message: newState.message,
      };

      const feedbackPayload: FeedbackPayloadStructure = {
        isError: true,
        message: "wrong credentials",
      };

      const actionCreator = showFeedbackActionCreator(feedbackPayload);

      const newExpectedState = uiReducer(initialState, actionCreator);

      expect(newExpectedState).toStrictEqual(expectedState);
    });
  });
});
