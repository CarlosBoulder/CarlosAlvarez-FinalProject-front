import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils";
import bouldersMock from "../../mocks/bouldersMock";
import BoulderList from "./BoulderList";

describe("BoulderList", () => {
  describe("BoulderList", () => {
    test("should render a list of boulders", () => {
      const boulders = bouldersMock;

      renderWithProviders(<BoulderList boulders={boulders} />);

      boulders.forEach((boulder) => {
        expect(
          screen.getByText(`${boulder.name} ${boulder.grade}`)
        ).toBeInTheDocument();
      });
    });
  });
});
