import BoulderStructure from "../../store/types";

interface BoulderCardProps {
  boulder: BoulderStructure;
}

const BoulderCard = ({
  boulder: { name, img, country, crag, grade, spot },
}: BoulderCardProps): React.ReactElement => {
  return (
    <>
      <div className="d-flex align-items-center">
        <img src={img} alt="" style={{ width: "45px", height: "45px" }} />
        <div className="ms-3">
          <p className="fw-bold mb-1 small">
            <h3>
              {name} {grade}
            </h3>
          </p>
          <p className="text-muted mb-0 small">
            {crag}, {spot}, {country}
          </p>
        </div>
      </div>

      <hr style={{ margin: "10px 0", width: "100%" }} />
    </>
  );
};

export default BoulderCard;
