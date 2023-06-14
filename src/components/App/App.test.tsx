import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils";
import App from "./App";
import { tokenMock } from "../../mocks/handlers";

describe("Given an App component", () => {
  describe("When it is rendered", () => {
    test("Then it should show boulderlab logo with the alternative text 'boulderlab logo'", () => {
      const expectedAlternativeText = "boulderlab logo";

      localStorage.setItem("token", tokenMock);

      renderWithProviders(<App />);

      const image = screen.getByAltText(expectedAlternativeText);

      expect(image).toBeInTheDocument();
    });
  });
});
