import { ThemeProvider } from "styled-components";
import { vi } from "vitest";
import LoginForm from "./LoginForm";
import { render, screen } from "@testing-library/react";
import theme from "../../styles/theme";

describe("Given a LoginForm component", () => {
  describe("When it is rendered", () => {
    const actionOnClick = vi.fn();
    test("Then it should show two inputs with the label 'Username' and 'Password'", () => {
      render(
        <ThemeProvider theme={theme}>
          <LoginForm handleOnSubmit={actionOnClick} />
        </ThemeProvider>
      );

      const expectedFirstLabelText = "Username";
      const expectedSecondLabelText = "Password";

      const firstLabel = screen.getByLabelText(expectedFirstLabelText);
      const secondLabel = screen.getByLabelText(expectedSecondLabelText);

      expect(firstLabel).toBeInTheDocument();
      expect(secondLabel).toBeInTheDocument();
    });
    test("Then it should show a button with the text 'Login'", () => {
      render(
        <ThemeProvider theme={theme}>
          <LoginForm handleOnSubmit={actionOnClick} />
        </ThemeProvider>
      );

      const button = screen.getByRole("button", { name: "Login" });

      expect(button).toBeInTheDocument();
    });
  });
});
