import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import React from "react";
import ContainerStyled from "../shared/ContainerStyled";
import LoginForm from "../LoginForm/LoginForm";
const Layout = (): React.ReactElement => {
  return (
    <>
      <ContainerStyled>
        <Header />
        <Outlet />
        <LoginForm />
      </ContainerStyled>
    </>
  );
};

export default Layout;
