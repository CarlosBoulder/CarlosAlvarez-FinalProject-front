import { Modal } from "react-bootstrap";

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
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
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
