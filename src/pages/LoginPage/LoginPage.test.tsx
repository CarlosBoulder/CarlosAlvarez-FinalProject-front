import { Provider } from "react-redux";
import { store } from "../../store";
import LoginPage from "./LoginPage";
import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import jwt_decode from "jwt-decode";
import { vi } from "vitest";

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

  describe("When it is rendered", () => {
    test("Then it should show login form labels", async () => {
      const mockDecodedToken = {
        sub: "mockUserId",
        name: "mockUserName",
      };

      vi.fn(jwt_decode).mockReturnValue(mockDecodedToken);

      render(
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      );

      const usernameTextField = screen.getByLabelText("Username");
      const passwordTextField = screen.getByLabelText("Password");
      const loginButton = screen.getByRole("button", { name: "Login" });

      await userEvent.type(usernameTextField, "admin");
      await userEvent.type(passwordTextField, "admin");
      await userEvent.click(loginButton);

      expect(router.state.location.pathname).toStrictEqual("/home");
    });
  });
});
