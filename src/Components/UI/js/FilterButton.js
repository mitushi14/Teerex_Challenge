import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FilterButtonStyles from "../css/FilterButton.module.css";

const FilterButton = ({ click }) => {
  /**
   * @param {Function} click - executes the function which opens and closes filter on click for mobile view.
   */
  return (
    <button
      className={FilterButtonStyles.filterButton}
      onClick={() => {
        click((prevState) => {
          return !prevState;
        });
      }}
    >
      Filter
      <FilterAltIcon></FilterAltIcon>
    </button>
  );
};

export default FilterButton;
