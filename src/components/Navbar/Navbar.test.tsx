import { screen } from "@testing-library/react";
import Navbar from "./Navbar";
import renderWithProviders from "../../utils/testUtils";
import { vi } from "vitest";
import { useAppSelector } from "../../store";

describe("Given a Navbar component", () => {
  describe("When user is not logged", () => {
    test("Then it should not show a button", () => {
      vi.fn(useAppSelector).mockReturnValue({
        userStore: { isLogged: false },
      });

      renderWithProviders(<Navbar />);
      expect(screen.queryByText("button")).not.toBeInTheDocument();
    });
  });
});
