import React from "react";
import "@fontsource/montserrat";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import GlobalStyle from "./styles/GlobalStyle/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { RouterProvider } from "react-router-dom";
import appRouter from "./routers/appRouter";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Provider store={store}>
        <RouterProvider router={appRouter} />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
