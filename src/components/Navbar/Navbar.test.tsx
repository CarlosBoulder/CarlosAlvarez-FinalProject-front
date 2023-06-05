import { screen } from "@testing-library/react";
import Navbar from "./Navbar";
import renderWithProviders from "../../utils/testUtils";
import { vi } from "vitest";
import { useAppSelector } from "../../store";
import { tokenMock } from "../../mocks/handlers";
import { UserStateStructure } from "../../store/user/userSlice";

describe("Given a Navbar component", () => {
  describe("When user is not logged", () => {
    test("Then it should not show a button", () => {
      vi.fn(useAppSelector).mockReturnValue({
        userStore: { isLogged: false },
      });

      const userLoggedStateMock: UserStateStructure = {
        id: "1",
        token: tokenMock,
        isLogged: true,
      };

      renderWithProviders(<Navbar />, { userStore: userLoggedStateMock });
      expect(screen.queryByText("button")).not.toBeInTheDocument();
    });
  });
});
