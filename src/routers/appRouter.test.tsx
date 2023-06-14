import { render, screen } from "@testing-library/react";
import { RouterProvider } from "react-router-dom";
import appRouter from "./appRouter";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import GlobalStyle from "../styles/GlobalStyle/GlobalStyle";
import { Provider } from "react-redux";
import { store } from "../store";

describe("Given an appRouter", () => {
  describe("When it is rendered", () => {
    test("Then it should show a header with boulderlab logo", () => {
      const expectedAlternativeText = "boulderlab logo";

      render(
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Provider store={store}>
            <RouterProvider router={appRouter} />
          </Provider>
        </ThemeProvider>
      );

      const image = screen.getByAltText(expectedAlternativeText);

      expect(image).toBeInTheDocument();
    });
  });
});
