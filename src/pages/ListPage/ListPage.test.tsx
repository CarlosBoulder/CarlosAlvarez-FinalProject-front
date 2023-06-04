import { screen } from "@testing-library/react";
import ListPage from "./ListPage";
import renderWithProviders from "../../utils/testUtils";
import { store } from "../../store";

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
});
