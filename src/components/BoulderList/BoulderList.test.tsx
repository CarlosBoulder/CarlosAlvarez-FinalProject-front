import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils";
import bouldersMock, { boulder } from "../../mocks/bouldersMock";
import BoulderList from "./BoulderList";
import userEvent from "@testing-library/user-event";
import { UserStateStructure } from "../../store/user/userSlice";
import { tokenMock } from "../../mocks/handlers";

describe("Given a BoulderList component", () => {
  const boulders = bouldersMock;
  describe("When it is rendered", () => {
    test("Then it should render a list of boulders with a boulder name and a boulder grade", () => {
      renderWithProviders(<BoulderList boulders={boulders} />);

      boulders.forEach((boulder) => {
        expect(
          screen.getByText(`${boulder.name} ${boulder.grade}`)
        ).toBeInTheDocument();
      });
    });
  });

  describe("when it is rendered and the user clicks the delete button in one boulder", () => {
    test("Then that boulder should disappear", async () => {
      const boulders = boulder;

      const userLoggedStateMock: UserStateStructure = {
        id: "1",
        token: tokenMock,
        isLogged: true,
      };

      renderWithProviders(<BoulderList boulders={boulders} />, {
        userStore: userLoggedStateMock,
      });

      const button = screen.getByRole("button");

      await userEvent.click(button);

      expect(button).toBeInTheDocument();
    });
  });
});
