import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
  MDBIcon,
} from "mdb-react-ui-kit";

const Navbar = (): React.ReactElement => {
  return (
    <MDBDropdown>
      <MDBDropdownToggle color="white">
        <MDBIcon fas icon="bars" />
      </MDBDropdownToggle>
      <MDBDropdownMenu>
        <MDBDropdownItem link>Home</MDBDropdownItem>
        <MDBDropdownItem link>Add boulder</MDBDropdownItem>
        <MDBDropdownItem link>Logout</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
  );
};

export default Navbar;
