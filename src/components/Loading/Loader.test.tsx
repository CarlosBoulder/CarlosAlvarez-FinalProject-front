import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils";
import Loader from "./Loader";

describe("Given a Loader component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a spinner ant the text 'Loading...'", () => {
      renderWithProviders(<Loader />);

      const loaderText = "Loading...";

      const expectedText = screen.getByText(loaderText);

      expect(expectedText).toBeInTheDocument();
    });
  });
});
