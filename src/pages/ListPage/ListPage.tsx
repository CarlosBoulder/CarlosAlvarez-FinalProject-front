import { useEffect, useState } from "react";
import BoulderList from "../../components/BoulderList/BoulderList";
import useBoulders from "../../hooks/useBoulders/useBoulders";
import { useAppDispatch, useAppSelector } from "../../store";
import { loadBouldersActionCreator } from "../../store/boulder/boulderSlice";
import ListPageStyled from "./ListPageStyled";
import Pagination from "../../components/Pagination/Pagination";

const ListPage = (): React.ReactElement => {
  const token = useAppSelector((store) => store.userStore.token);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const { getPaginatedBoulders } = useBoulders(token);

  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const boulders = await getPaginatedBoulders(currentPage);

      if (boulders) {
        const totalPages = boulders.totalPages;
        setTotalPages(totalPages);
        dispatch(loadBouldersActionCreator(boulders.boulders));
      }
    })();
  }, [dispatch, getPaginatedBoulders, currentPage]);

  const bouldersList = useAppSelector((state) => state.boulderStore.boulders);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
    window.scrollTo(0, 0);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
    window.scrollTo(0, 0);
  };
  return (
    <ListPageStyled>
      <>
        <BoulderList boulders={bouldersList} />
        <Pagination
          page={currentPage}
          next={nextPage}
          prev={prevPage}
          totalPages={totalPages}
        />
      </>
    </ListPageStyled>
  );
};

export default ListPage;
