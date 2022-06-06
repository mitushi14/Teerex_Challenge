import "bootstrap/dist/css/bootstrap.min.css";
import FilterStyles from "../css/FilterPanel.module.css";
import ColorPallete from "./ColorPallete";
import { types, gender, priceRange, colors } from "../../Database/data";
import { Add, Remove } from "@mui/icons-material";
import { useState } from "react";
import ShowResults from "../../UI/js/ShowResults";
import ClearButton from "../../UI/js/ClearButton";

const FilterPanel = ({ closeFilter, getFilteredState, clearFilteredState }) => {
  const [showColours, setShowColours] = useState(false);
  const [showGender, setShowGender] = useState(false);
  const [showType, setShowType] = useState(false);
  const [showPrice, setShowPriceRange] = useState(false);

  /**
   * @param {object} filtersValue : Stores the the selected filters value.
   *
   *        @property {string} gender - single value selected from radio button. Possible values ("Men", "Women", "Both")
   *
   *        @property {Array} type - array with value selected from checkbox. Possible values ("Basic", "Polo","Hoodie")
   *
   *        @property {Array} color - array with value selected from Colors buttons.
   *
   *        @property {object} price - object with value selected from radio button. Has property {max: maximum price range , min: minimum price range }
   */

  const [filtersValue, setfiltersValue] = useState({
    gender: "",
    type: [],
    price: { max: -1, min: -1 },
    color: [],
  });

  const getGenderValue = (event) => {
    /**
     * @param {Function} getGenderValue - sets the gender value while retaining
     *                                    the previous filter state value.
     *
     * @param {event} event - on click of radio button.
     */
    setfiltersValue((prevFiltersState) => {
      return {
        gender: event.target.value,
        type: prevFiltersState.type,
        price: prevFiltersState.price,
        color: prevFiltersState.color,
      };
    });
  };

  const getTypeValue = (event) => {
    /**
     * @param {Function} getTypeValue - sets the type value to type array while retaining
     *                                    the previous filter state value and previous type value.
     *
     * @param {event} event - on click of checkbox button.
     */
    setfiltersValue((prevFiltersState) => {
      return {
        gender: prevFiltersState.gender,
        type: event.target.checked
          ? [...prevFiltersState.type, event.target.value]
          : [prevFiltersState.type.filter((ele) => ele !== event.target.value)],
        price: prevFiltersState.price,
        color: prevFiltersState.color,
      };
    });
  };

  const getColorValue = (colorBtnValue) => {
    /**
     * @param {Function} getColorValue - sets the color value to color array while retaining
     *                                    the previous filter state value and previous color value.
     *
     * @param {string} colorBtnValue - button value we get from color pallete component on click of button.
     */

    setfiltersValue((prevFiltersState) => {
      return {
        gender: prevFiltersState.gender,
        type: prevFiltersState.type,
        price: prevFiltersState.price,
        color: [...prevFiltersState.color, colorBtnValue],
      };
    });
  };

  const getPriceValue = (event) => {
    /**
     * @param {Function} getPriceValue - sets the price value while retaining
     *                                    the previous filter state value.
     *
     * @param {event} event - on click of radio button.
     */
    let min, max;
    const priceRange = event.target.value;
    if (priceRange.includes("-")) {
      [min, max] = priceRange.split("-");
    } else {
      min = 0;
      max = priceRange;
    }
    setfiltersValue((prevFiltersState) => {
      return {
        gender: prevFiltersState.gender,
        type: prevFiltersState.type,
        price: { min: +min, max: +max },
        color: prevFiltersState.color,
      };
    });
  };

  const getFilterResults = () => {
    /**
     * @param {Function} getFilterResults - function sends filtersValue to Product Catalog Component.
     */
    getFilteredState(filtersValue);
  };

  const clearFilters = () => {
    /**
     * @param {Function} clearFilters - function sends filterValue and state dispatch function to close filters on clear.
     */
    clearFilteredState(
      filtersValue,
      setShowColours,
      setShowGender,
      setShowPriceRange,
      setShowType
    );
  };
  return (
    <div className={`${FilterStyles.filterBox}`}>
      <div className={`flexRowContainer`}>
        <div className="row">
          {/* COLORS Filter */}
          <div className={`${FilterStyles.marginBottom}`} key="colors">
            <div
              className={`flexRowContainer ${FilterStyles.spaceBetween}`}
              key="colors"
            >
              <span>
                <strong> Color</strong>
              </span>
              <button
                className={`${FilterStyles.generalButton}`}
                onClick={() => {
                  setShowColours((prevStateColor) => {
                    return !prevStateColor;
                  });
                }}
              >
                {showColours ? <Remove></Remove> : <Add></Add>}
              </button>
            </div>
            <div className={`${FilterStyles.colorContainer} row`}>
              {showColours &&
                colors.map((ele) => {
                  return (
                    <ColorPallete
                      color={ele}
                      colorValue={getColorValue}
                    ></ColorPallete>
                  );
                })}
            </div>
          </div>
          {/* -------------------------------------------------------------------------- */}
          {/* GENDERS FILTER */}
          <div className={`${FilterStyles.marginBottom}`} key="gender">
            <div
              className={`flexRowContainer ${FilterStyles.spaceBetween}`}
              key="gender"
            >
              <span>
                <strong> Gender </strong>
              </span>
              <button
                className={`${FilterStyles.generalButton}`}
                onClick={() => {
                  setShowGender((prevStateGender) => {
                    return !prevStateGender;
                  });
                }}
              >
                {showGender ? <Remove></Remove> : <Add></Add>}
              </button>
            </div>
            {showGender &&
              gender.map((ele, i) => {
                return (
                  <div key={`gender${i}`}>
                    <label htmlFor={ele} id={ele.id}>
                      <input
                        type="radio"
                        id={ele.id}
                        name="gender"
                        value={ele}
                        key={ele.id}
                        onChange={getGenderValue}
                        aria-labelledby={ele.id}
                      ></input>{" "}
                      {ele}
                    </label>
                    <br />
                  </div>
                );
              })}
          </div>
          {/* -------------------------------------------------------------------------- */}
          {/* PRICE FILTERS */}
          <div className={`${FilterStyles.marginBottom}`} key="price">
            <div
              className={`flexRowContainer ${FilterStyles.spaceBetween}`}
              key="price"
            >
              <span>
                <strong> Price Range </strong>
              </span>
              <button
                className={`${FilterStyles.generalButton}`}
                onClick={() => {
                  setShowPriceRange((prevStatePrice) => {
                    return !prevStatePrice;
                  });
                }}
              >
                {showPrice ? <Remove></Remove> : <Add></Add>}
              </button>
            </div>
            {showPrice &&
              priceRange.map((ele, i) => {
                return (
                  <div key={`price${i}`}>
                    <input
                      type="radio"
                      id={`price${i + 1}`}
                      value={ele.id}
                      onChange={getPriceValue}
                      name="name"
                      key={ele.id}
                    ></input>{" "}
                    <label htmlFor={`price${i + 1}`}>{ele.value}</label>
                    <br />
                  </div>
                );
              })}
          </div>
          {/* ----------------------------------------------------------------------------- */}
          {/* TYPE FILTERS */}
          <div className={`${FilterStyles.marginBottom}`} key="type">
            <div
              className={`flexRowContainer ${FilterStyles.spaceBetween}`}
              key="type"
            >
              <span>
                <strong> Type </strong>
              </span>
              <button
                className={`${FilterStyles.generalButton}`}
                onClick={() => {
                  setShowType((prevStateType) => {
                    return !prevStateType;
                  });
                }}
              >
                {showType ? <Remove></Remove> : <Add></Add>}
              </button>
            </div>
            {showType &&
              types.map((ele, i) => {
                return (
                  <div key={`type${i}`}>
                    <input
                      type="checkbox"
                      id={ele}
                      value={ele}
                      className={`${FilterStyles.checkbox}`}
                      // checked={checkedState[index]}
                      key={ele.id}
                      onChange={getTypeValue}
                    ></input>{" "}
                    <label htmlFor={ele}>{ele}</label>
                    <br />
                  </div>
                );
              })}
          </div>
          {/* ---------------------------------------------------------------------- */}
        </div>
      </div>
      <ShowResults onclick={getFilterResults}></ShowResults>
      <ClearButton onclick={clearFilters} closeFilter={closeFilter}>
        Clear
      </ClearButton>
    </div>
  );
};

export default FilterPanel;
