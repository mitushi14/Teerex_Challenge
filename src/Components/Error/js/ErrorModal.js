import "../../../GeneralCSS/generalCSS.css";
import CloseIcon from "@mui/icons-material/Close";
import ErrorStyles from "../css/ErrorModal.module.css";
import React from "react";
import Backdrop from "../../Wrapper/js/Backdrop";

const ModalOverlay = (props) => {
  return (
    <div
      className={`${ErrorStyles.modal} ${
        props.error ? ErrorStyles.modalOpen : ErrorStyles.modalClose
      }`}
    >
      <header className={`${ErrorStyles.header} flexRowContainer `}>
        <h4>{props.title}</h4>
        <button
          className={ErrorStyles.close}
          onClick={() => {
            props.setError(false);
          }}
        >
          <CloseIcon></CloseIcon>
        </button>
      </header>
      <div className={ErrorStyles.content}>
        <p>{props.message}</p>
      </div>
    </div>
  );
};

const ErrorModal = ({ title, message, showError, error }) => {
  /**
   * @param {string} title - title of the error modal
   *
   * @param {string} message - message of the error modal
   *
   * @param {Function} showError - sets the error modal to false when clicked on the close button.
   */
  return (
    <Backdrop error={error}>
      <ModalOverlay
        title={title}
        message={message}
        setError={showError}
        error={error}
      ></ModalOverlay>
    </Backdrop>
  );
};

export default ErrorModal;
