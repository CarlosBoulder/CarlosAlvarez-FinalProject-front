interface BoulderDetails {
  img: string;
  name: string;
  crag: string;
  spot: string;
  country: string;
  description: string;
  grade: string;
}
export default BoulderDetails;

export interface BoulderStructureDetails {
  boulderDetails: BoulderDetails;
}
