import BoulderStructure from "../../store/types";

interface BoulderCardProps {
  boulder: BoulderStructure;
}

const BoulderCard = ({
  boulder: { name, img, country, crag, description, grade, spot },
}: BoulderCardProps): React.ReactElement => {
  return (
    <article className="user-card">
      <img loading="lazy" src={img} alt={name} width={300} height={300} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{grade}</p>
      <p>{crag}</p>
      <p>{spot}</p>
      <p>{country}</p>
    </article>
  );
};

export default BoulderCard;
