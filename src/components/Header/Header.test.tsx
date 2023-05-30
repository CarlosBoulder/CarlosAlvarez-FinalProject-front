import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show boulderlab logo with the alternative text 'boulderlab logo'", () => {
      render(
        <ThemeProvider theme={theme}>
          <Header />
        </ThemeProvider>
      );

      const expectedAlternativeText = "boulderlab logo";

      const image = screen.getByAltText(expectedAlternativeText);

      expect(image).toBeInTheDocument();
    });
  });
});
