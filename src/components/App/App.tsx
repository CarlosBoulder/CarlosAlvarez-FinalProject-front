import { useEffect } from "react";
import jwt_decode from "jwt-decode";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import { useAppDispatch } from "../../store";
import Layout from "../Layout/Layout";
import { loginActionCreator } from "../../store/user/userSlice";
import { useNavigate } from "react-router-dom";

const App = (): React.ReactElement => {
  const navigate = useNavigate();
  const { getToken } = useLocalStorage();
  const dispatch = useAppDispatch();

  useEffect(() => {
    try {
      const token = getToken("token");

      if (!token) {
        throw new Error("Token not found");
      }

      const decodedToken: { sub: string; name: string } = jwt_decode(token);

      const tokenInfo = {
        id: decodedToken.sub,
        token: token,
      };

      dispatch(loginActionCreator(tokenInfo));
    } catch (error) {
      navigate("/login", { replace: true });
    }
  }, [dispatch, getToken, navigate]);

  return <Layout />;
};

export default App;
