import { screen } from "@testing-library/dom";
import bouldersMock from "../../mocks/bouldersMock";
import BoulderStructure from "../../store/types";
import renderWithProviders from "../../utils/testUtils";
import BoulderCard from "./BoulderCard";
import { vi } from "vitest";

describe("Given a BoulderCard component", () => {
  describe("When it is rendered with the boulder 'Rema remero'", () => {
    test("Then it should show a heading with the name 'Rema remero'", () => {
      const boulder: BoulderStructure = bouldersMock[0];

      const actionOnClick = vi.fn();

      renderWithProviders(
        <BoulderCard boulder={boulder} actionOnClick={actionOnClick} />
      );

      const expectedName = screen.getByRole("heading", {
        name: `${bouldersMock[0].name} ${bouldersMock[0].grade}`,
      });

      expect(expectedName).toBeInTheDocument();
    });
  });
});
