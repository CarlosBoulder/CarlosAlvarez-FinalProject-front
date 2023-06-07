import { screen } from "@testing-library/react";
import Layout from "./Layout";
import renderWithProviders from "../../utils/testUtils";

describe("Given a Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should show boulderlab logo with the alternative text 'boulderlab logo'", () => {
      renderWithProviders(<Layout />, {
        uiStore: {
          isLoading: true,
          isError: true,
          message: "",
        },
      });

      const expectedAlternativeText = "boulderlab logo";

      const image = screen.getByAltText(expectedAlternativeText);

      expect(image).toBeInTheDocument();
    });
  });
});
