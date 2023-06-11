import useBoulders from "../../hooks/useBoulders/useBoulders";
import { useAppSelector } from "../../store";
import BoulderStructure from "../../store/types";
import BoulderCard from "../BoulderCard/BoulderCard";
import BoulderListStyled from "./BoulderListStyled";

export interface BoulderListProps {
  boulders: BoulderStructure[];
}

const BoulderList = ({ boulders }: BoulderListProps): React.ReactElement => {
  const { token } = useAppSelector((state) => state.userStore);
  const { deleteBoulder } = useBoulders(token);

  const deleteOnClick = (boulderId: string) => {
    deleteBoulder(boulderId);
  };

  return (
    <BoulderListStyled className="boulder-list">
      {boulders.map((boulder) => (
        <li key={boulder.id}>
          <BoulderCard boulder={boulder} actionOnClick={deleteOnClick} />
        </li>
      ))}
    </BoulderListStyled>
  );
};

export default BoulderList;
