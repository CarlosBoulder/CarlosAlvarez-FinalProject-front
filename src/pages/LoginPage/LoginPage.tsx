import React from "react";
import LoginPageStyled from "./LoginPageStyled";
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage = (): React.ReactElement => {
  return (
    <LoginPageStyled>
      <h2>Welcome back! Please enter your credentials.</h2>
      <LoginForm />
    </LoginPageStyled>
  );
};

export default LoginPage;
