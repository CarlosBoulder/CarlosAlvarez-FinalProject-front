import { FeedbackPayloadStructure, UiStateStructure } from "../types";
import { showFeedbackActionCreator, uiReducer } from "../uiSlice";

describe("Given a showFeedbackReducer reducer", () => {
  describe("When it receives a showFeedback action and the message 'wrong credentials'", () => {
    test("Then it should return a new state showFeedback true and the message 'wrong credentials'", () => {
      const initialState: UiStateStructure = {
        isLoading: false,
        isError: false,
        message: "",
        showFeedback: false,
      };

      const newState: UiStateStructure = {
        isLoading: false,
        isError: true,
        message: "wrong credentials",
        showFeedback: true,
      };

      const expectedState: UiStateStructure = {
        isLoading: newState.isLoading,
        isError: newState.isError,
        message: newState.message,
        showFeedback: newState.showFeedback,
      };

      const feedbackPayload: FeedbackPayloadStructure = {
        showFeedback: true,
        message: "wrong credentials",
        isError: true,
      };

      const actionCreator = showFeedbackActionCreator(feedbackPayload);

      const newExpectedState = uiReducer(initialState, actionCreator);

      expect(newExpectedState).toStrictEqual(expectedState);
    });
  });
});
