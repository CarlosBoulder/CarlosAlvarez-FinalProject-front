import CreateBoulderForm from "../../components/CreateBoulderForm/CreateBoulderForm";
import CreatePageStyled from "./CreateBoulderPageStyled";

const CreateBoulderPage = (): React.ReactElement => {
  return (
    <CreatePageStyled>
      <section>
        <h2>Create your boulder</h2>
        <CreateBoulderForm />
      </section>
    </CreatePageStyled>
  );
};

export default CreateBoulderPage;
