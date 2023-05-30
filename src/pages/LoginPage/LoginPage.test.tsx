import { Provider } from "react-redux";
import { store } from "../../store";
import LoginPage from "./LoginPage";
import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";

describe("Given a LoginPage component", () => {
  const routes = [{ path: "/", element: <LoginPage /> }];
  const router = createMemoryRouter(routes);
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'Welcome back! Please enter your credentials.'", () => {
      const expectedText = "Welcome back! Please enter your credentials.";

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
