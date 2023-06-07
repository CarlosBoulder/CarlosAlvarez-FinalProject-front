import { Modal } from "react-bootstrap";
import { hideFeedbackActionCreator } from "../../store/ui/uiSlice";
import { useAppDispatch } from "../../store";

interface FeedbackProps {
  classname?: string;
  text?: string;
  actionOnClick?: () => void;
}

const Feedback = ({
  actionOnClick,
  classname,
  text,
}: FeedbackProps): React.ReactElement => {
  const dispatch = useAppDispatch();
  const hideOnClick = () => dispatch(hideFeedbackActionCreator());

  return (
    <div
      className="modal show d-block position-absolute top-50"
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
        <Modal.Body>
          <h4>{text}</h4>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
};

export default Feedback;
