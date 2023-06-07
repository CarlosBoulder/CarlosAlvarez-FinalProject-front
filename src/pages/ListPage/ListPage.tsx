import { useEffect } from "react";
import BoulderList from "../../components/BoulderList/BoulderList";
import useBoulders from "../../hooks/useBoulders/useBoulders";
import { useAppDispatch, useAppSelector } from "../../store";
import { loadBouldersActionCreator } from "../../store/boulder/boulderSlice";
import ListPageStyled from "./ListPageStyled";

const ListPage = (): React.ReactElement => {
  const token = useAppSelector((store) => store.userStore.token);

  const { getBoulders } = useBoulders(token);

  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const boulders = await getBoulders();
      if (boulders) {
        dispatch(loadBouldersActionCreator(boulders.boulders));
      }
    })();
  }, [dispatch, getBoulders]);

  const bouldersList = useAppSelector((state) => state.boulderStore.boulders);

  return (
    <ListPageStyled>
      <BoulderList boulders={bouldersList} />
    </ListPageStyled>
  );
};

export default ListPage;
