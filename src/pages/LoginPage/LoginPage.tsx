import React from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import LoginPageStyled from "./LoginPageStyled";
import LoginForm from "../../components/LoginForm/LoginForm";
import useUser, { UserCredentials } from "../../hooks/useUser/useUser";
import { loginActionCreator } from "../../store/user/userSlice";
import { useAppDispatch } from "../../store";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";

const LoginPage = (): React.ReactElement => {
  const { getToken } = useUser();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { setToken } = useLocalStorage();

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

      setToken("token", obtainedToken);

      navigate("/home", { replace: true });
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
