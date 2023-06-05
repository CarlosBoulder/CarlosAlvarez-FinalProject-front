import { Spinner } from "react-bootstrap";
import LoaderStyled from "./LoaderStyled";

const Loader = (): React.ReactElement => {
  return (
    <LoaderStyled>
      <Spinner animation="border" role="status">
        <span className="visually-hidden"></span>
      </Spinner>
      <span>Loading...</span>
    </LoaderStyled>
  );
};

export default Loader;
