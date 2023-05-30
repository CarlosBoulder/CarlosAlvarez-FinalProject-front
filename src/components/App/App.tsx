import Header from "../Header/Header";
import ContainerStyled from "../shared/containerStyled";

const App = (): React.ReactElement => {
  return (
    <>
      <ContainerStyled>
        <Header />
        <h1>boulderlab</h1>
      </ContainerStyled>
    </>
  );
};

export default App;
