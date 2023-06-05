import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import React from "react";
import ContainerStyled from "../shared/ContainerStyled";
import Loader from "../Loading/Loader";

const Layout = (): React.ReactElement => {
  return (
    <>
      <ContainerStyled>
        <Header />
        <Outlet />
        <Loader />
      </ContainerStyled>
    </>
  );
};

export default Layout;
