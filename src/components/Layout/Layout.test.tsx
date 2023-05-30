import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";
import Layout from "./Layout";

describe("Given a Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should show boulderlab logo with the alternative text 'boulderlab logo'", () => {
      render(
        <ThemeProvider theme={theme}>
          <Layout />
        </ThemeProvider>
      );

      const expectedAlternativeText = "boulderlab logo";

      const image = screen.getByAltText(expectedAlternativeText);

      expect(image).toBeInTheDocument();
    });
  });
});
