import { vi } from "vitest";
import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils";
import LoginForm from "./LoginForm";

describe("Given a LoginForm component", () => {
  describe("When it is rendered", () => {
    const actionOnClick = vi.fn();
    test("Then it should show two inputs with the label 'Username' and 'Password'", () => {
      renderWithProviders(<LoginForm handleOnSubmit={actionOnClick} />);

      const expectedFirstLabelText = "Username";
      const expectedSecondLabelText = "Password";

      const firstLabel = screen.getByLabelText(expectedFirstLabelText);
      const secondLabel = screen.getByLabelText(expectedSecondLabelText);

      expect(firstLabel).toBeInTheDocument();
      expect(secondLabel).toBeInTheDocument();
    });
    test("Then it should show a button with the text 'Login'", () => {
      renderWithProviders(<LoginForm handleOnSubmit={actionOnClick} />);

      const button = screen.getByRole("button", { name: "Login" });

      expect(button).toBeInTheDocument();
    });
  });
});
