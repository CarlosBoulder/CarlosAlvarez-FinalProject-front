import CreateBoulderFormStyled from "./CreateBoulderFormStyled";

const CreateBoulderForm = (): React.ReactElement => {
  return (
    <CreateBoulderFormStyled className="form-container">
      <form autoComplete="off">
        <div className="mb-3">
          <label htmlFor="image">Image</label>
          <input type="url" className="form-control" id="image" />
        </div>

        <div className="mb-3">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" />
        </div>

        <div className="mb-3">
          <label htmlFor="crag">Crag</label>
          <input type="text" className="form-control" id="crag" />
        </div>

        <div className="mb-3">
          <label htmlFor="grade">Grade</label>
          <select className="form-control" id="grade">
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
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="spot">Spot</label>
          <input type="text" className="form-control" id="spot" />
        </div>

        <div className="mb-3">
          <label htmlFor="country">Country</label>
          <input type="text" className="form-control" id="country" />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Create
          </button>
        </div>
      </form>
    </CreateBoulderFormStyled>
  );
};

export default CreateBoulderForm;
