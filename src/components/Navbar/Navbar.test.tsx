import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";
import Navbar from "./Navbar";

describe("Given a Navbar component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button", () => {
      render(
        <ThemeProvider theme={theme}>
          <Navbar />
        </ThemeProvider>
      );
      expect(screen.getByRole("button")).toBeVisible();
    });
  });
});
