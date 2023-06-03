import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import LoginPage from "../pages/LoginPage/LoginPage";
import ListPage from "../pages/ListPage/ListPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/login" replace />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/home",
        element: <ListPage />,
      },
      {
        path: "*",
        element: <p>Page not found, please try it later</p>,
      },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
