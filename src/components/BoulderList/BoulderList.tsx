import BoulderStructure from "../../store/types";

interface BoulderListProps {
  boulders: BoulderStructure[];
}

const BoulderList = ({ boulders }: BoulderListProps): React.ReactElement => {
  return (
    <ul className="boulder-list">
      {boulders.map((boulder) => (
        <li key={boulder._id}>Card</li>
      ))}
    </ul>
  );
};

export default BoulderList;
