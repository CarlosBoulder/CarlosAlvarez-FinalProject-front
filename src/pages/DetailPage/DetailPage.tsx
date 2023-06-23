import { Card, ListGroup } from "react-bootstrap";
import DetailsPageStyled from "./DetailPageStyled";
import { useParams } from "react-router-dom";
import useBoulders from "../../hooks/useBoulders/useBoulders";
import { useAppDispatch, useAppSelector } from "../../store";
import { useEffect } from "react";
import { loadBoulderByIdActionCreator } from "../../store/boulder/boulderSlice";

const DetailsPage = (): React.ReactElement => {
  window.scrollTo(0, 0);
  const token = useAppSelector((store) => store.userStore.token);
  const { id } = useParams();
  const { getBoulder } = useBoulders(token);
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const boulderById = await getBoulder(id as string);
      if (boulderById) {
        dispatch(loadBoulderByIdActionCreator(boulderById));
      }
    })();
  }, [dispatch, getBoulder, id]);

  const boulder = useAppSelector((state) => state.boulderStore.boulderById);

  return (
    <DetailsPageStyled>
      <Card>
        <Card.Img variant="top" src={boulder?.img} />
        <Card.Body>
          <Card.Title>
            {boulder?.name} {boulder?.grade}
          </Card.Title>
          <Card.Text> {boulder?.description} </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Crag: {boulder?.crag} </ListGroup.Item>
          <ListGroup.Item>
            Spot: {boulder?.spot}, {boulder?.country}{" "}
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </DetailsPageStyled>
  );
};

export default DetailsPage;
