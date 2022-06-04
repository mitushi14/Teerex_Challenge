import "../../../GeneralCSS/generalCSS.css";
const ClearButton = ({ onclick }) => {
  /**
   * @param {Function} onclick - executes the function which clears all the filters.
   */
  return (
    <button className="buttonsNoFill" onClick={onclick}>
      Clear
    </button>
  );
};

export default ClearButton;
