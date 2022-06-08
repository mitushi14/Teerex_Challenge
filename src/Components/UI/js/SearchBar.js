import SearchBarStyles from "../css/SearchBar.module.css";
import { Search } from "@mui/icons-material";
import { useState } from "react";

export const scrollIntoView = () => {
  const products = document.getElementById("products");
  products.scrollIntoView({ block: "start", behavior: "smooth" });
};

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
    const value = event.target.value;
    const trimmedSearchValue = value.trim();
    performSearchOperation(trimmedSearchValue);
    setSearchValue(trimmedSearchValue);
  };

  const performSearchHandlerOnClick = () => {
    /**
     * @argument {string} searchValue - State variable with entered search value.
     *
     * @param {function} performSearchHandlerOnClick -function that is called to send searchValue to Product Catalog page.
     *
     * Same function for mobile and desktop site.
     */

    performSearchOperation(searchValue);
    scrollIntoView();
    // scrollToProducts();
  };

  const performSearchHandlerOnEnter = (event) => {
    /**
     * Function called when enter key is pressed.
     */
    if (event.key === "Enter") {
      performSearchOperation(searchValue);
      scrollIntoView();
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
        onClick={performSearchHandlerOnClick}
      >
        <Search></Search>
      </button>
    </div>
  );
};

export default SearchBar;
