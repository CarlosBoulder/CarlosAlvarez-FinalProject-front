import { Provider } from "react-redux";
import { store } from "../../store";
import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import CreateBoulderPage from "./CreateBoulderPage";
import BoulderList from "../../components/BoulderList/BoulderList";
import bouldersMock from "../../mocks/bouldersMock";
import userEvent from "@testing-library/user-event";

describe("Given a CreateBoulderPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'Create your boulder'", () => {
      const routes = [{ path: "/", element: <CreateBoulderPage /> }];
      const router = createMemoryRouter(routes);

      const expectedText = "Create your boulder";

      render(
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      );

      const heading = screen.getByRole("heading", { name: expectedText });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When it is rendered and there is a problem creating a new boulder", () => {
    test("Then it should throw error", async () => {
      const routes = [
        { path: "/", element: <CreateBoulderPage /> },
        { path: "/home", element: <BoulderList boulders={bouldersMock} /> },
      ];

      const router = createMemoryRouter(routes);

      render(
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      );

      const expectedFirstLabelText = "Image";
      const expectedSecondLabelText = "Name";
      const expectedThirdLabelText = "Crag";
      const expectedFourthLabelText = "Grade";
      const expectedFifthLabelText = "Description";
      const expectedSixthLabelText = "Spot";
      const expectedSeventhLabelText = "Country";

      const imgLabel = screen.getByLabelText(expectedFirstLabelText);
      const nameLabel = screen.getByLabelText(expectedSecondLabelText);
      const cragLabel = screen.getByLabelText(expectedThirdLabelText);
      const gradeLabel = screen.getByLabelText(expectedFourthLabelText);
      const descriptionLabel = screen.getByLabelText(expectedFifthLabelText);
      const spotLabel = screen.getByLabelText(expectedSixthLabelText);
      const countryLabel = screen.getByLabelText(expectedSeventhLabelText);

      await userEvent.type(imgLabel, "testImg");
      await userEvent.type(nameLabel, "testName");
      await userEvent.type(cragLabel, "testCrag");
      await userEvent.selectOptions(gradeLabel, "7A");
      await userEvent.type(descriptionLabel, "testDescription");
      await userEvent.type(spotLabel, "testSpot");
      await userEvent.type(countryLabel, "testCountry");

      const expectedButtonText = "Create";

      const button = screen.getByRole("button", { name: expectedButtonText });

      await userEvent.click(button);

      expect(router.state.location.pathname).toBe("/home");
    });
  });
});
