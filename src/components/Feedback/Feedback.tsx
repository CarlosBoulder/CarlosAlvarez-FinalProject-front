import { Modal } from "react-bootstrap";
import { hideFeedbackActionCreator } from "../../store/ui/uiSlice";
import { useAppDispatch } from "../../store";
import FeedbackStyled from "./FeedbackStyled";

interface FeedbackProps {
  isError?: boolean;
  classname?: string;
  text?: string;
  actionOnClick?: () => void;
}

const Feedback = ({
  actionOnClick,
  classname,
  text,
  isError,
}: FeedbackProps): React.ReactElement => {
  const dispatch = useAppDispatch();
  const hideOnClick = () => dispatch(hideFeedbackActionCreator());
  return (
    <FeedbackStyled
      className="modal show d-block position-absolute"
      role="button"
      tabIndex={0}
      onClick={hideOnClick}
      onKeyDown={hideOnClick}
    >
      <Modal.Dialog>
        <Modal.Header
          closeButton
          className={classname}
          onClick={actionOnClick}
        ></Modal.Header>
        {isError ? (
          <Modal.Body>
            <h4>
              <img
                src="/images/error.svg"
                alt="error icon"
                width={48}
                height={48}
              />
              {text}
            </h4>
          </Modal.Body>
        ) : (
          <Modal.Body>
            <h4>
              <img
                src="/images/done.svg"
                alt="done icon"
                width={48}
                height={48}
              />
              {text}
            </h4>
          </Modal.Body>
        )}
      </Modal.Dialog>
    </FeedbackStyled>
  );
};

export default Feedback;
