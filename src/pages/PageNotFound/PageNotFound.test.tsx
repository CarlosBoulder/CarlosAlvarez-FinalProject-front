import { Provider } from "react-redux";
import { store } from "../../store";
import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import PageNotFound from "./PageNotFound";

describe("Given a PageNot Found component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'Page Not Found'", () => {
      const routes = [{ path: "/", element: <PageNotFound /> }];
      const router = createMemoryRouter(routes);

      const expectedText = "Page Not Found";

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
