import { screen } from "@testing-library/dom";
import bouldersMock from "../../mocks/bouldersMock";
import BoulderStructure from "../../store/types";
import renderWithProviders from "../../utils/testUtils";
import BoulderCard from "./BoulderCard";

describe("Given a BoulderCard component", () => {
  describe("When it is rendered with the boulder 'Rema remero'", () => {
    test("Then it should show a heading with the name 'Rema remero'", () => {
      const boulder: BoulderStructure = bouldersMock[0];

      renderWithProviders(<BoulderCard boulder={boulder} />);

      const expectedName = screen.getByRole("heading", {
        name: bouldersMock[0].name,
      });

      expect(expectedName).toBeInTheDocument();
    });
  });
});
