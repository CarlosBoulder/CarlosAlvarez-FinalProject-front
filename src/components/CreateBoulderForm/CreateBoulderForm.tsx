import { useState } from "react";
import CreateBoulderFormStyled from "./CreateBoulderFormStyled";
import BoulderDetails from "./types";

interface CreateBoulderFormProps {
  handleOnSubmit: (boulder: BoulderDetails) => void;
}

const CreateBoulderForm = ({
  handleOnSubmit,
}: CreateBoulderFormProps): React.ReactElement => {
  const initialBoulderDetails: BoulderDetails = {
    img: "",
    name: "",
    crag: "",
    grade: "",
    description: "",
    spot: "",
    country: "",
  };

  const [boulderDetails, setBoulderDetails] = useState(initialBoulderDetails);

  const onChangeBoulderData = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setBoulderDetails({
      ...boulderDetails,
      [event.target.id]: event.target.value,
    });
  };

  const onSubmitBoulderData = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    handleOnSubmit(boulderDetails);
    setBoulderDetails(initialBoulderDetails);
  };

  const isDisabled =
    !boulderDetails.img ||
    !boulderDetails.name ||
    !boulderDetails.crag ||
    !boulderDetails.grade ||
    !boulderDetails.description ||
    !boulderDetails.spot ||
    !boulderDetails.country;

  return (
    <CreateBoulderFormStyled
      className="form-container"
      onSubmit={onSubmitBoulderData}
    >
      <form autoComplete="off">
        <div className="mb-3">
          <label htmlFor="img">Image</label>
          <input
            type="text"
            className="form-control"
            id="img"
            onChange={onChangeBoulderData}
            value={boulderDetails.img}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            onChange={onChangeBoulderData}
            value={boulderDetails.name}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="crag">Crag</label>
          <input
            type="text"
            className="form-control"
            id="crag"
            onChange={onChangeBoulderData}
            value={boulderDetails.crag}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="grade">Grade</label>
          <select
            className="form-control"
            id="grade"
            onChange={onChangeBoulderData}
            value={boulderDetails.grade}
          >
            <option value="">--Grade--</option>
            <option value="7A">7A</option>
            <option value="7A+">7A+</option>
            <option value="7B">7B</option>
            <option value="7B+">7B+</option>
            <option value="7C">7C</option>
            <option value="7C+">7C+</option>
            <option value="8A">8A</option>
            <option value="8A+">8A+</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="description">Description</label>
          <textarea
            name="textarea"
            className="form-control"
            id="description"
            onChange={onChangeBoulderData}
            value={boulderDetails.description}
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="spot">Spot</label>
          <input
            type="text"
            className="form-control"
            id="spot"
            onChange={onChangeBoulderData}
            value={boulderDetails.spot}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            className="form-control"
            id="country"
            onChange={onChangeBoulderData}
            value={boulderDetails.country}
          />
        </div>

        <div className="d-grid">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isDisabled}
          >
            Create
          </button>
        </div>
      </form>
    </CreateBoulderFormStyled>
  );
};

export default CreateBoulderForm;
