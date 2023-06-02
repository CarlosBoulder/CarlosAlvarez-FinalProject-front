import React from "react";
import jwt_decode from "jwt-decode";
import LoginPageStyled from "./LoginPageStyled";
import LoginForm from "../../components/LoginForm/LoginForm";
import useUser, { UserCredentials } from "../../hooks/useUser/useUser";
import { loginActionCreator } from "../../store/user/userSlice";
import { useAppDispatch } from "../../store";

const LoginPage = (): React.ReactElement => {
  const { getToken } = useUser();
  const dispatch = useAppDispatch();

  const handleOnSubmit = async (credentials: UserCredentials) => {
    const obtainedToken = await getToken(credentials);
    if (obtainedToken) {
      const decodedToken: { sub: string; name: string } =
        jwt_decode(obtainedToken);

      const tokenInfo = {
        id: decodedToken.sub,
        token: obtainedToken,
      };

      dispatch(loginActionCreator(tokenInfo));

      localStorage.setItem("token", obtainedToken);
    }
  };

  return (
    <LoginPageStyled>
      <h2>Welcome back! Please enter your credentials.</h2>
      <LoginForm handleOnSubmit={handleOnSubmit} />
    </LoginPageStyled>
  );
};

export default LoginPage;
