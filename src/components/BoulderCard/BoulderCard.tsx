import BoulderStructure from "../../store/types";
interface BoulderCardProps {
  boulder: BoulderStructure;
  actionOnClick: (boulderId: string) => void;
}

const BoulderCard = ({
  boulder: { name, img, country, crag, grade, spot, id },
  actionOnClick,
}: BoulderCardProps): React.ReactElement => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-between">
        <div className="ms-3">
          <img src={img} alt={name} style={{ width: "60px", height: "50px" }} />
          <div>
            <h3 className="fw-bold mb-1 small">
              {name} {grade}
            </h3>
            <p className="text-muted mb-0 small">
              {crag}, {spot},<br />
              {country}
            </p>
          </div>
        </div>
        <button className="card-button" onClick={() => actionOnClick(id)}>
          <img
            src="/images/trash.svg"
            alt="trash icon"
            width={24}
            height={24}
          />
        </button>
      </div>
      <hr style={{ margin: "10px 0", width: "100%" }} />
    </>
  );
};

export default BoulderCard;
