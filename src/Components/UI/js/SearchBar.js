import SearchBarStyles from "../css/SearchBar.module.css";
import { Search } from "@mui/icons-material";
import { useState } from "react";

const SearchBar = ({ performSearchOperation, device }) => {
  /**
   * @description {function} SearchBar - Renders search bar on the screen according
   *            to the screen size. For "mobile" search bar is
   *            rendered outside the header. Else is rendered
   *            inside the header.
   */
  const [searchValue, setSearchValue] = useState("");

  const searchValueHandler = (event) => {
    /**
     * Sets the value entered in search bar.
     *
     * setSearchValue - dispatch function of state.
     */
    setSearchValue(event.target.value);
  };

  const performSearchHandler = () => {
    /**
     * @argument {string} searchValue - State variable with entered search value.
     *
     * @param {function} performSearchHandler -function that is called to send searchValue to Product Catalog page.
     *
     * Same function for mobile and desktop site.
     */
    performSearchOperation(searchValue);
  };

  const performSearchHandlerOnEnter = (event) => {
    /**
     * Function called when enter key is pressed.
     */
    if (event.key === "Enter") {
      performSearchOperation(searchValue);
    }
  };

  return (
    <div
      className={`${SearchBarStyles.searchBar}  ${
        device === "mobile" ? SearchBarStyles.searchbarMobile : null
      }`}
    >
      <input
        type="text"
        placeholder="Search"
        className={`${SearchBarStyles.searchBarInput}`}
        onChange={searchValueHandler}
        onKeyDown={performSearchHandlerOnEnter}
      ></input>
      <button
        className={SearchBarStyles.searchBarButton}
        onClick={performSearchHandler}
      >
        <Search></Search>
      </button>
    </div>
  );
};

export default SearchBar;
