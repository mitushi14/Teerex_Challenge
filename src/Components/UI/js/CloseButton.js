import CloseIcon from "@mui/icons-material/Close";
import CloseButtonModule from "../css/CloseButton.module.css";

const CloseButton = ({ setShowMenu }) => {
  /**
   * @param {Function} setShowMenu - executes the function which closes the side bar menu.
   */
  return (
    <button
      className={CloseButtonModule.closeButton}
      onClick={() => {
        setShowMenu(false);
      }}
    >
      <CloseIcon></CloseIcon>
    </button>
  );
};

export default CloseButton;
