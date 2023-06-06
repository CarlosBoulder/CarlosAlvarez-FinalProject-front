import { lazy } from "react";

export const LazyLoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));

export const LazyListPage = lazy(() => import("../pages/ListPage/ListPage"));

export const LazyPageNotFound = lazy(
  () => import("../pages/PageNotFound/PageNotFound")
);
