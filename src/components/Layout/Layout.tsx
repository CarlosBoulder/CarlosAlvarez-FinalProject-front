import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import React from "react";
import ContainerStyled from "../shared/ContainerStyled";
import { useAppSelector } from "../../store";
import Feedback from "../Feedback/Feedback";
import Loader from "../Loading/Loader";

const Layout = (): React.ReactElement => {
  const { message, isLoading, showFeedback, isError } = useAppSelector(
    (store) => store.uiStore
  );

  return (
    <>
      <ContainerStyled>
        <Header />
        <Outlet />
      </ContainerStyled>
      {isLoading && <Loader />}
      {showFeedback && <Feedback text={message} isError={isError} />}
    </>
  );
};

export default Layout;
