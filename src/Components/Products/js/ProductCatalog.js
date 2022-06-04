import Header from "../../Header/js/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductStyles from "../css/ProductCatalog.module.css";
import "../../../GeneralCSS/generalCSS.css";
import FilterPanel from "../../Filter/js/FliterPanel";
import { config } from "../../../App";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductItemCard from "./ProductItemCard";
import FilterButton from "../../UI/js/FilterButton";
import { CircularProgress } from "@mui/material";
import OurCollection from "../../UI/js/OurCollection";
import SearchBar from "../../UI/js/SearchBar";
import useResize from "../../../Hooks/use-Resize";
import { Link } from "react-scroll";
import Footer from "../../Footer/js/Footer";

const ProductCatalog = () => {
  const [Products, setProducts] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [loading, setLoading] = useState(false);
  const [filteredArray, setFilteredArray] = useState([]);
  const screenWidth = useResize();

  const fetchProductsList = async () => {
    /**
     * @param {function} fetchProductsList - makes API call when the page loads.
     *
     * API endpoint:  https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json
     *
     * @returns {Array.<Products>} - Array of objects with complete data on all available products
     *
     * Example for successfull response :
     *
     * HTTP 200
     *  [
     *      {
     *          "id": 1,
     *          "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
     *          "name": "Black Polo",
     *          "type": "Polo",
     *          "price": 250,
     *         "currency": "INR",
     *         "color": "Black",
     *         "gender": "Men",
     *         "quantity": 3
     *     },
     *     {
     *        "id": 2,
     *        "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
     *        "name": "Blue Polo",
     *        "type": "Polo",
     *        "price": 350,
     *        "currency": "INR",
     *        "color": "Blue",
     *        "gender": "Women",
     *        "quantity": 3
     *    },
     *  ]
     *
     */
    try {
      setLoading(true);
      const response = await axios.get(`${config.endpoint}`);
      setProducts(response.data);
      setFilteredArray(response.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProductsList();
  }, []);

  const performSearchOnClickHandler = (searchValueFromSearchBar) => {
    /**
     * @param {string} searchValueFromSearchBar - Text user types in the search bar. To filter the displayed products based on this text.
     *
     * @returns {Array.<filteredArray>} - Array of objects with complete data on filtered set of products
     */
    if (searchValueFromSearchBar.length === 0) {
      setFilteredArray(Products);
    }
    const lowercaseSearchValueFromSearchBar =
      searchValueFromSearchBar.toLowerCase();
    const filteredProductsArray = Products.filter((product) => {
      return (
        product.name.toLowerCase() === lowercaseSearchValueFromSearchBar ||
        product.type.toLowerCase() === lowercaseSearchValueFromSearchBar ||
        product.color.toLowerCase() === lowercaseSearchValueFromSearchBar
      );
    });
    setFilteredArray(filteredProductsArray);
  };

  const arrayIntersection = (filterList1, filterList2) => {
    /**
     * Generic function to find intersection of arrays.
     *
     * @param {Array} filterList1 - filtered array 1 either of color, gender, type , price
     *                              , color and gender, type and price.
     *
     * @param {Array} filterList2 - filtered array 2 either of color, gender, type , price
     *                              , color and gender, type and price.
     *
     * @returns {Array} - according to the condition.
     */
    console.log(`arrays: ${filterList1}, ${filterList2}`);
    if (filterList1.length === 0) {
      return filterList2;
    } else if (filterList2.length === 0) {
      return filterList1;
    } else if (filterList1.length !== 0 && filterList2.length !== 0) {
      return filterList1.filter((value) => filterList2.includes(value));
    } else {
      return [];
    }
  };
  const getFilteredStateFromFilterPanel = (filteredStateFromPanel) => {
    /**
     * @param {object} filteredStateFromPanel - Object has the following properties:
     *
     *        @property {string} gender - single value selected from radio button. Possible values ("Men", "Women", "Both")
     *
     *        @property {Array} type - array with value selected from checkbox. Possible values ("Basic", "Polo","Hoodie")
     *
     *        @property {Array} color - array with value selected from Colors buttons.
     *
     *        @property {object} price - object with value selected from radio button. Has property {max: maximum price range , min: minimum price range }
     *
     * @returns {Array.<filteredArray>} - Array of objects with complete data on filtered set of products
     */

    let colorFilteredArray = [];
    let genderFilteredArray = [];
    let typeFilteredArray = [];
    let priceFilteredArray = [];
    let filteredArrayofColorandGender = [];
    let filteredArrayofTypeandPrice;
    let filteredArrayofPanel;

    /**
     * @param {Array.<colorFilteredArray>} colorFilteredArray - stores results of filtered array only for color
     *
     * @param {Array.<genderFilteredArray>} genderFilteredArray - stores results of filtered array only for gender
     *
     * @param {Array.<typeFilteredArray>} typeFilteredArray - stores results of filtered array only for type
     *
     * @param {Array.<priceFilteredArray>} priceFilteredArray - stores results of filtered array only for price
     *
     * @param {Array.<filteredArrayofColorandGender>} filteredArrayofColorandGender - stores results of filtered array after intersection of colorFilteredArray and genderFilteredArray
     *
     * @param {Array.<filteredArrayofTypeandPrice>} filteredArrayofTypeandPrice - stores results of filtered array after intersection of typeFilteredArray and priceFilteredArray
     */
    if (filteredStateFromPanel.color.length > 0) {
      colorFilteredArray = filteredArray.filter((product) => {
        return filteredStateFromPanel.color.includes(product.color);
      });
    }

    if (filteredStateFromPanel.gender.length > 0) {
      genderFilteredArray = filteredArray.filter((product) => {
        return filteredStateFromPanel.gender === product.gender;
      });
    }

    if (filteredStateFromPanel.type.length > 0) {
      typeFilteredArray = filteredArray.filter((product) => {
        return filteredStateFromPanel.type.includes(product.type);
      });
    }

    if (filteredStateFromPanel.price.min > -1) {
      priceFilteredArray = filteredArray.filter((product) => {
        return (
          product.price >= filteredStateFromPanel.price.min &&
          product.price <= filteredStateFromPanel.price.max
        );
      });
    }

    filteredArrayofColorandGender = arrayIntersection(
      genderFilteredArray,
      colorFilteredArray
    );
    filteredArrayofTypeandPrice = arrayIntersection(
      typeFilteredArray,
      priceFilteredArray
    );
    filteredArrayofPanel = arrayIntersection(
      filteredArrayofColorandGender,
      filteredArrayofTypeandPrice
    );

    setFilteredArray(filteredArrayofPanel);
  };

  const clearFilteredStateFromPanel = (
    filteredState,
    setShowColours,
    setShowGender,
    setShowPriceRange,
    setShowType
  ) => {
    /**
     * Clears the selected filteredState
     *
     * @returns {Array.<filteredArray} - array of products without any filters applied. Original Array of Products
     */
    filteredState.gender = "";
    filteredState.type = [];
    filteredState.price = {};
    filteredState.color = [];
    setShowColours(false);
    setShowGender(false);
    setShowPriceRange(false);
    setShowType(false);
    setFilteredArray(Products);
  };

  return (
    <>
      <Header
        performSearchOperation={performSearchOnClickHandler}
        device="desktop"
      ></Header>
      <section className={ProductStyles.section}>
        <div className="websiteContainer">
          {screenWidth <= 880 && (
            <SearchBar
              performSearchOperation={performSearchOnClickHandler}
              device="mobile"
            ></SearchBar>
          )}
        </div>
        {screenWidth <= 880 && <div className={ProductStyles.padding}></div>}
        <div
          role="img"
          aria-label="Tshirts hanging"
          className={`img-fluid ${ProductStyles.heroImage}`}
        >
          <br></br>
          <br></br>
          {/* <div className={ProductStyles.heroImageText}>
            A fine <br />
            collection
            <br />
            for everyone
          </div> */}
          <Link
            className={ProductStyles.heroImageButton}
            to="products"
            spy={true}
            smooth={true}
          >
            Shop Now
          </Link>
        </div>
        <OurCollection></OurCollection>

        <div
          id="products"
          className={`container ${ProductStyles.marginTop} ${ProductStyles.pseudoContainer}`}
        >
          {screenWidth <= 500 && (
            <FilterButton click={setShowFilter}></FilterButton>
          )}
          {showFilter && screenWidth <= 500 && (
            <FilterPanel
              closeFilter={setShowFilter}
              getFilteredState={getFilteredStateFromFilterPanel}
              clearFilteredState={clearFilteredStateFromPanel}
              closeOrOpen={showFilter}
            ></FilterPanel>
          )}

          <div className="row">
            <div className={`col-6 col-md-3`}>
              {screenWidth > 500 && (
                <FilterPanel
                  closeFilter={setShowFilter}
                  getFilteredState={getFilteredStateFromFilterPanel}
                  clearFilteredState={clearFilteredStateFromPanel}
                  closeOrOpen={showFilter}
                ></FilterPanel>
              )}
            </div>

            <div
              className={` ${screenWidth > 500 ? "col-6 col-md-9" : "col-12"}`}
            >
              <div className={`${ProductStyles.responsive} row`}>
                {loading ? (
                  <CircularProgress></CircularProgress>
                ) : filteredArray.length > 0 ? (
                  filteredArray.map((ele) => {
                    return (
                      <div
                        className={`mb-5 col-xl-3 col-lg-4 col-md-5 col-xs-4`}
                        key={ele.id}
                      >
                        <ProductItemCard Product={ele}></ProductItemCard>
                      </div>
                    );
                  })
                ) : (
                  <p>No products found for the applied filters.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};
export default ProductCatalog;
