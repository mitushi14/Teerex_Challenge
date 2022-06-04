import "../../../GeneralCSS/generalCSS.css";

const ShowResults = ({ onclick }) => {
  /**
   * @param {Function} onclick - executes the function which renders filters results
   */
  return (
    <button className="buttons" onClick={onclick}>
      Show Results
    </button>
  );
};

export default ShowResults;
