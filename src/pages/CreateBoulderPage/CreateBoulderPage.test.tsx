import { Provider } from "react-redux";
import { store } from "../../store";
import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import CreateBoulderPage from "./CreateBoulderPage";

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
});
