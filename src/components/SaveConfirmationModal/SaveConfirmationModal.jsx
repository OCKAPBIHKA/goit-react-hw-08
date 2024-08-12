import PropTypes from "prop-types";
import css from "./SaveConfirmationModal.module.css";

const SaveConfirmationModal = ({ isOpen, onRequestClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className={css.modal}>
      <h2>Confirm Save</h2>
      <p>How do you want to make changes?</p>
      <div className={css.buttonContainer}>
        <button onClick={onConfirm}>Yes, Save</button>
        <button onClick={onRequestClose}>No, Cancel</button>
      </div>
    </div>
  );
};

SaveConfirmationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default SaveConfirmationModal;
