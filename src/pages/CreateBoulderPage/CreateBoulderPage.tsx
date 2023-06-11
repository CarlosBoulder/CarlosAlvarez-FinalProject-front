import CreateBoulderForm from "../../components/CreateBoulderForm/CreateBoulderForm";
import useBoulders from "../../hooks/useBoulders/useBoulders";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store";
import CreatePageStyled from "./CreateBoulderPageStyled";
import { BoulderStructureDetails } from "../../components/CreateBoulderForm/types";
import { showFeedbackActionCreator } from "../../store/ui/uiSlice";

const CreateBoulderPage = (): React.ReactElement => {
  const token = useAppSelector((store) => store.userStore.token);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { addBoulder } = useBoulders(token);

  const handleOnSubmit = async (boulder: BoulderStructureDetails) => {
    try {
      await addBoulder(boulder);
      navigate("/home", { replace: true });
    } catch (error) {
      dispatch(
        showFeedbackActionCreator({
          showFeedback: true,
          message: "Error trying to create the boulder",
          isError: true,
        })
      );
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
