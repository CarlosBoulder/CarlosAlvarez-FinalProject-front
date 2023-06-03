import NavDropdown from "react-bootstrap/NavDropdown";
import { AiOutlineMenu } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "../../store";
import { useNavigate } from "react-router-dom";
import { logoutActionCreator } from "../../store/user/userSlice";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";

const NavigationBar = (): React.ReactElement => {
  const isLogged = useAppSelector((state) => state.userStore.isLogged);
  const dispatch = useAppDispatch();
  const { removeToken } = useLocalStorage();
  const navigate = useNavigate();

  const actionOnClick = () => {
    dispatch(logoutActionCreator());
    removeToken("token");
    navigate("/home", { replace: true });
  };

  return (
    <>
      {isLogged ? (
        <NavDropdown
          className="burguer-menu"
          title={<AiOutlineMenu />}
          id="basic-nav-dropdown"
        >
          <NavDropdown.Item href="/home">Home</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Add boulder</NavDropdown.Item>
          <NavDropdown.Item href="/login" onClick={actionOnClick}>
            Logout
          </NavDropdown.Item>
        </NavDropdown>
      ) : (
        <></>
      )}
    </>
  );
};

export default NavigationBar;
