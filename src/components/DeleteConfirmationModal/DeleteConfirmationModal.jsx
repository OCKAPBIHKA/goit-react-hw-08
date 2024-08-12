import Modal from "react-modal";
import css from "./DeleteConfirmationModal.module.css";
import PropTypes from "prop-types";

Modal.setAppElement("#root");

const DeleteConfirmationModal = ({ isOpen, onRequestClose, onConfirm }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Confirm Delete"
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <h2>Are you sure you want to delete this contact?</h2>
      <div className={css.buttons}>
        <button onClick={onConfirm} className={css.confirmButton}>
          Yes
        </button>
        <button onClick={onRequestClose} className={css.cancelButton}>
          No
        </button>
      </div>
    </Modal>
  );
};

DeleteConfirmationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default DeleteConfirmationModal;
