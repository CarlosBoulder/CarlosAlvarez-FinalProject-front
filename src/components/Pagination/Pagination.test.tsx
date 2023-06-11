import { vi } from "vitest";
import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils";
import Pagination from "./Pagination";

describe("Given a Pagination component", () => {
  describe("When it is rendered", () => {
    test("Then it should show two buttons with the texts 'Prev' and 'Next'", () => {
      const actionOnClick = vi.fn();

      renderWithProviders(
        <Pagination
          next={actionOnClick}
          page={1}
          prev={actionOnClick}
          totalPages={2}
        />
      );

      const buttonNext = screen.getByText("Next");
      const buttonPrev = screen.getByText("Prev");

      expect(buttonNext).toBeInTheDocument();
      expect(buttonPrev).toBeInTheDocument();
    });
  });
});
