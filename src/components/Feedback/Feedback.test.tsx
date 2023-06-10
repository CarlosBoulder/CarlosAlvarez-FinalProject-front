import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils";
import Feedback from "./Feedback";

describe("Given a Feedback component", () => {
  describe("When it is rendered with the text 'Wrong Credentials'", () => {
    test("Then it should show a modal with the text 'Wrong Credentials'", () => {
      const text = "Wrong Credentials";

      renderWithProviders(<Feedback text={text} />, {
        uiStore: {
          isError: true,
          isLoading: false,
          showFeedback: true,
          message: text,
        },
      });

      const expectedModal = screen.getByText(text);

      expect(expectedModal).toBeInTheDocument();
    });
  });
});
