import { vi } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithProviders from "../../utils/testUtils";
import LoginForm from "./LoginForm";

const expectedFirstLabelText = "Username";
const expectedSecondLabelText = "Password";

const usernameInput = "admin";
const passwordInput = "admin";

const expectedText = "Login";
const actionOnClick = vi.fn();
describe("Given a LoginForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show two inputs with the label 'Username' and 'Password'", () => {
      renderWithProviders(<LoginForm handleOnSubmit={actionOnClick} />);

      const firstLabel = screen.getByLabelText(expectedFirstLabelText);
      const secondLabel = screen.getByLabelText(expectedSecondLabelText);

      expect(firstLabel).toBeInTheDocument();
      expect(secondLabel).toBeInTheDocument();
    });
    test("Then it should show a button with the text 'Login'", () => {
      renderWithProviders(<LoginForm handleOnSubmit={actionOnClick} />);

      const button = screen.getByRole("button", { name: expectedText });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When it is rendered and the inputs are empty", () => {
    test("Then the button should be disabled", () => {
      renderWithProviders(<LoginForm handleOnSubmit={actionOnClick} />);

      const button = screen.getByRole("button", { name: expectedText });

      expect(button).toBeDisabled();
    });
  });

  describe("When it is rendered and the fields are filled", () => {
    test("Then it should an enabled button", async () => {
      renderWithProviders(<LoginForm handleOnSubmit={actionOnClick} />);

      const userLabel = screen.getByLabelText(expectedFirstLabelText);
      const passwordLabel = screen.getByLabelText(expectedSecondLabelText);

      await userEvent.type(userLabel, usernameInput);
      await userEvent.type(passwordLabel, passwordInput);

      const button = screen.getByRole("button", { name: expectedText });

      expect(button).toBeEnabled();
    });
  });

  describe("When it is rendered and the username field is written with 'admin'", () => {
    test("Then it should show the text 'admin' in the username field", async () => {
      renderWithProviders(<LoginForm handleOnSubmit={actionOnClick} />);

      const userLabel = screen.getByLabelText(expectedFirstLabelText);

      await userEvent.type(userLabel, usernameInput);

      expect(userLabel).toHaveValue(usernameInput);
    });
  });
  describe("When it is rendered and the password field is written with 'admin'", () => {
    test("Then it should show the text 'admin' in the password field", async () => {
      renderWithProviders(<LoginForm handleOnSubmit={actionOnClick} />);

      const passwordLabel = screen.getByLabelText(expectedSecondLabelText);

      await userEvent.type(passwordLabel, passwordInput);

      expect(passwordLabel).toHaveValue(passwordInput);
    });
  });

  describe("When it is rendered, the credentials are valid and the login button is clicked", () => {
    test("Then it should claa the actionOnClick function", async () => {
      renderWithProviders(<LoginForm handleOnSubmit={actionOnClick} />);

      const userLabel = screen.getByLabelText(expectedFirstLabelText);
      const passwordLabel = screen.getByLabelText(expectedSecondLabelText);

      await userEvent.type(userLabel, usernameInput);
      await userEvent.type(passwordLabel, passwordInput);

      const button = screen.getByRole("button", { name: expectedText });

      await userEvent.click(button);

      expect(actionOnClick).toHaveBeenCalled();
    });
  });
});
