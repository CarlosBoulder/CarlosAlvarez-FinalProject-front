import Navbar from "../Navbar/Navbar";
import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled>
      <img
        src="images/logoBoulderLab.svg"
        alt="boulderlab logo"
        width={184}
        height={86}
      />
      <Navbar />
    </HeaderStyled>
  );
};

export default Header;
