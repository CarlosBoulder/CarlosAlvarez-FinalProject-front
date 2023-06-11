import Button from "../Button/Button";
import PaginationStyled from "./PaginationStyled";

interface PaginationProps {
  next: () => void;
  prev: () => void;
  page: number;
  totalPages: number;
}

const Pagination = ({
  next,
  prev,
  page,
  totalPages,
}: PaginationProps): React.ReactElement => {
  const onClickNext = () => {
    next();
  };

  const onClickPrev = () => {
    prev();
  };

  return (
    <PaginationStyled>
      <Button
        text="Prev"
        classname="pagination-button"
        ariaLabel="previous button"
        actionOnClick={onClickPrev}
        isDisabled={page === 1}
      />
      <Button
        text="Next"
        classname="pagination-button"
        ariaLabel="next button"
        actionOnClick={onClickNext}
        isDisabled={page === totalPages}
      />
    </PaginationStyled>
  );
};

export default Pagination;
