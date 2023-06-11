import { useState } from "react";
import CreateBoulderFormStyled from "./CreateBoulderFormStyled";
import { BoulderStructureDetails } from "./types";

interface CreateBoulderFormProps {
  handleOnSubmit: (boulder: BoulderStructureDetails) => void;
}

const CreateBoulderForm = ({
  handleOnSubmit,
}: CreateBoulderFormProps): React.ReactElement => {
  const initialBoulderDetails: BoulderStructureDetails = {
    boulderDetails: {
      img: "",
      name: "",
      crag: "",
      spot: "",
      country: "",
      description: "",
      grade: "",
    },
  };

  const [boulderDetails, setBoulderDetails] = useState(initialBoulderDetails);

  const onChangeBoulderData = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setBoulderDetails((boulderDetails) => ({
      boulderDetails: {
        ...boulderDetails.boulderDetails,
        [event.target.id]: event.target.value,
      },
    }));
  };

  const onSubmitBoulderData = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    handleOnSubmit({ boulderDetails: boulderDetails.boulderDetails });
    setBoulderDetails(initialBoulderDetails);
  };

  const isDisabled =
    !boulderDetails.boulderDetails.img ||
    !boulderDetails.boulderDetails.name ||
    !boulderDetails.boulderDetails.crag ||
    !boulderDetails.boulderDetails.grade ||
    !boulderDetails.boulderDetails.description ||
    !boulderDetails.boulderDetails.spot ||
    !boulderDetails.boulderDetails.country;

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
            value={boulderDetails.boulderDetails.img}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            onChange={onChangeBoulderData}
            value={boulderDetails.boulderDetails.name}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="crag">Crag</label>
          <input
            type="text"
            className="form-control"
            id="crag"
            onChange={onChangeBoulderData}
            value={boulderDetails.boulderDetails.crag}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="grade">Grade</label>
          <select
            className="form-control"
            id="grade"
            onChange={onChangeBoulderData}
            value={boulderDetails.boulderDetails.grade}
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
            value={boulderDetails.boulderDetails.description}
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="spot">Spot</label>
          <input
            type="text"
            className="form-control"
            id="spot"
            onChange={onChangeBoulderData}
            value={boulderDetails.boulderDetails.spot}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            className="form-control"
            id="country"
            onChange={onChangeBoulderData}
            value={boulderDetails.boulderDetails.country}
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
