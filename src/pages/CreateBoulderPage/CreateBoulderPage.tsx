import CreateBoulderForm from "../../components/CreateBoulderForm/CreateBoulderForm";
import useBoulders from "../../hooks/useBoulders/useBoulders";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store";
import CreatePageStyled from "./CreateBoulderPageStyled";
import { BoulderStructureDetails } from "../../components/CreateBoulderForm/types";

const CreateBoulderPage = (): React.ReactElement => {
  const token = useAppSelector((store) => store.userStore.token);
  const navigate = useNavigate();

  const { addBoulder } = useBoulders(token);

  const handleOnSubmit = async (boulder: BoulderStructureDetails) => {
    const success = await addBoulder(boulder);

    if (success) {
      navigate("/home", { replace: true });
    }
  };

  return (
    <CreatePageStyled>
      <section>
        <h2>Create your boulder</h2>
        <CreateBoulderForm handleOnSubmit={handleOnSubmit} />
      </section>
    </CreatePageStyled>
  );
};

export default CreateBoulderPage;
