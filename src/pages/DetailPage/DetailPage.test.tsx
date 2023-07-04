import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils";
import DetailsPage from "./DetailPage";
import bouldersMock, { boulderById } from "../../mocks/bouldersMock";

describe("Given a DetailPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show one boulder details", async () => {
      renderWithProviders(<DetailsPage />, {
        boulderStore: {
          boulders: bouldersMock,
          boulderById,
        },
      });

      const text = await screen.getByAltText(boulderById.name);

      expect(text).toBeInTheDocument();
    });
  });
});
