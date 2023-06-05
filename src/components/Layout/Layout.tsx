import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import React from "react";
import ContainerStyled from "../shared/ContainerStyled";
import { useAppSelector } from "../../store";
import Loader from "../Loading/Loader";

const Layout = (): React.ReactElement => {
  const isLoading = useAppSelector((state) => state.uiStore.isLoading);

  return (
    <>
      <ContainerStyled>
        <Header />
        {isLoading && <Loader />}
        <Outlet />
      </ContainerStyled>
    </>
  );
};

export default Layout;
