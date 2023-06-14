import { screen, waitFor } from "@testing-library/react";
import ListPage from "./ListPage";
import renderWithProviders from "../../utils/testUtils";
import { store } from "../../store";
import { server } from "../../mocks/server";
import { paginatedBouldersHandlers } from "../../mocks/handlers";
import userEvent from "@testing-library/user-event";

describe("Given a ListPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show all boulders from the store", () => {
      renderWithProviders(<ListPage />);

      const testBoulders = store.getState().boulderStore.boulders;

      testBoulders.forEach((boulder) => {
        expect(screen.getByText(boulder.name)).toBeInTheDocument();
      });
    });
  });

  describe("When it is rendered and the user clicks the next button", () => {
    test("Then the next button should be enabled", async () => {
      server.resetHandlers(...paginatedBouldersHandlers);

      renderWithProviders(<ListPage />);

      const nextButton = screen.getByText("Next");

      await userEvent.click(nextButton);

      waitFor(() => {
        expect(nextButton).toBeEnabled();
      });
    });
  });

  describe("When it is rendered and the user clicks the next button", () => {
    test("Then the prev button should be enabled", async () => {
      server.resetHandlers(...paginatedBouldersHandlers);

      renderWithProviders(<ListPage />);

      const nextButton = screen.getByText("Next");

      await userEvent.click(nextButton);

      const prevButton = screen.getByText("Prev");

      await userEvent.click(prevButton);

      waitFor(() => {
        expect(prevButton).toBeEnabled();
      });
    });
  });
});
