import { screen } from "@testing-library/react";
import Navbar from "./Navbar";
import renderWithProviders from "../../utils/testUtils";

describe("Given a Navbar component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button", () => {
      renderWithProviders(<Navbar />);
      expect(screen.getByRole("button")).toBeVisible();
    });
  });
});
