import "../../../GeneralCSS/generalCSS.css";
const CancelButton = ({ onclick }) => {
  return (
    <button
      className="buttonsNoFill"
      onClick={() => {
        onclick(false);
      }}
    >
      Cancel
    </button>
  );
};

export default CancelButton;
