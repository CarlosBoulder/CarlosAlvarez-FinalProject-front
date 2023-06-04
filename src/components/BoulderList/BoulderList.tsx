import BoulderStructure from "../../store/types";

export interface BoulderListProps {
  boulders: BoulderStructure[];
}

const BoulderList = ({ boulders }: BoulderListProps): React.ReactElement => {
  return (
    <ul className="boulder-list">
      {boulders.map((boulder) => (
        <li key={boulder._id}>{boulder.name}</li>
      ))}
    </ul>
  );
};

export default BoulderList;
