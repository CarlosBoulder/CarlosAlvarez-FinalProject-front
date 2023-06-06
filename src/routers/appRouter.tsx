import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import App from "../components/App/App";
import { LazyListPage, LazyLoginPage } from "./LazyPages";
import PageNotFound from "../pages/PageNotFound/PageNotFound";

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
        element: (
          <Suspense>
            <LazyLoginPage />
          </Suspense>
        ),
      },
      {
        path: "/home",
        element: (
          <Suspense>
            <LazyListPage />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense>
            <PageNotFound />
          </Suspense>
        ),
      },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
