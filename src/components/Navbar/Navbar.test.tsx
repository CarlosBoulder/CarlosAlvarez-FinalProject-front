import { screen } from "@testing-library/react";
import Navbar from "./Navbar";
import renderWithProviders from "../../utils/testUtils";
import { tokenMock } from "../../mocks/handlers";
import { UserStateStructure } from "../../store/user/userSlice";
import userEvent from "@testing-library/user-event";

describe("Given a Navbar component", () => {
  describe("When the  user is logged", () => {
    test("Then it should show a button", () => {
      const userLoggedStateMock: UserStateStructure = {
        id: "1",
        token: tokenMock,
        isLogged: true,
      };

      renderWithProviders(<Navbar />, { userStore: userLoggedStateMock });

      expect(screen.getByRole("button")).toBeInTheDocument();
    });
  });

  describe("When the user is logged and click the burger menu button and the Logout link", () => {
    test("Then it should logout and redirect to loginPage", async () => {
      const userLoggedStateMock: UserStateStructure = {
        id: "1",
        token: tokenMock,
        isLogged: true,
      };

      const linkText = "Logout";

      renderWithProviders(<Navbar />, { userStore: userLoggedStateMock });

      const button = screen.getByRole("button");

      await userEvent.click(button);

      const navLink = screen.getByRole("link", { name: linkText });

      expect(navLink).toBeInTheDocument();
    });
  });
});
