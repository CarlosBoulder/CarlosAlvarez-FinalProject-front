import { screen } from "@testing-library/dom";
import renderWithProviders from "../../utils/testUtils";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it is rendered", () => {
    test("Then it show a button with the text 'Button'", () => {
      const buttonText = "Button";

      renderWithProviders(<Button text={buttonText} />);

      const button = screen.getByRole("button", { name: buttonText });

      expect(button).toBeInTheDocument();
    });
  });
});
