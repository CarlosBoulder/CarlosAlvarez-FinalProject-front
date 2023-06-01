import NavDropdown from "react-bootstrap/NavDropdown";
import { AiOutlineMenu } from "react-icons/ai";

const NavigationBar = (): React.ReactElement => {
  return (
    <NavDropdown
      className="burguer-menu"
      title={<AiOutlineMenu />}
      id="basic-nav-dropdown"
    >
      <NavDropdown.Item href="#action/3.1">Home</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.2">Add boulder</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.3">Logout</NavDropdown.Item>
    </NavDropdown>
  );
};

export default NavigationBar;
