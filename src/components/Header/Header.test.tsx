import { screen } from "@testing-library/react";
import Header from "./Header";
import renderWithProviders from "../../utils/testUtils";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show boulderlab logo with the alternative text 'boulderlab logo'", () => {
      renderWithProviders(<Header />);

      const expectedAlternativeText = "boulderlab logo";

      const image = screen.getByAltText(expectedAlternativeText);

      expect(image).toBeInTheDocument();
    });
  });
});
