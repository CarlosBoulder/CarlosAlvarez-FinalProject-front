import BoulderStructure from "../../store/types";
import BoulderCard from "../BoulderCard/BoulderCard";

export interface BoulderListProps {
  boulders: BoulderStructure[];
}

const BoulderList = ({ boulders }: BoulderListProps): React.ReactElement => {
  return (
    <ul className="boulder-list">
      {boulders.map((boulder) => (
        <li key={boulder._id}>
          <BoulderCard boulder={boulder} />
        </li>
      ))}
    </ul>
  );
};

export default BoulderList;
