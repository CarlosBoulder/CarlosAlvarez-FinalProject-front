import { vi } from "vitest";
import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils";
import Pagination from "./Pagination";
import userEvent from "@testing-library/user-event";

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

    test("Then it should show prev button disabled", () => {
      const actionOnClick = vi.fn();

      renderWithProviders(
        <Pagination
          next={actionOnClick}
          page={1}
          prev={actionOnClick}
          totalPages={2}
        />
      );

      const buttonPrev = screen.getByText("Prev");

      expect(buttonPrev).toBeDisabled();
    });

    test("Then it should show a next button enabled", () => {
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

      expect(buttonNext).toBeEnabled();
    });
  });

  describe("When it is rendered and the user clicks the next button", () => {
    test("Then it should call the actionOnClick function", async () => {
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

      await userEvent.click(buttonNext);

      expect(actionOnClick).toHaveBeenCalled();
    });
  });

  describe("When it is rendered and the user clicks the prev button", () => {
    test("Then it should call the actionOnClick function", async () => {
      const actionOnClick = vi.fn();

      renderWithProviders(
        <Pagination
          next={actionOnClick}
          page={2}
          prev={actionOnClick}
          totalPages={2}
        />
      );

      const buttonPrev = screen.getByText("Prev");

      await userEvent.click(buttonPrev);

      expect(actionOnClick).toHaveBeenCalled();
    });
  });
});
