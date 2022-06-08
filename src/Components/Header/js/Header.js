import "bootstrap/dist/css/bootstrap.min.css";
import headerStyles from "../css/Header.module.css";
import tshirtLogo from "../../../Images/TeeRex_new_transparent.png";
import "../../../GeneralCSS/generalCSS.css";
import { AccountCircle } from "@mui/icons-material";
import ShoppingCartBadgeIcon from "../../UI/js/ShoppingCartBadgeIcon";
import { NavLink } from "react-router-dom";
import SearchBar from "../../UI/js/SearchBar";
import useResize from "../../../Hooks/use-Resize";
import NavigationBurger from "../../Navigation/js/NavigationBurger";
import { useState } from "react";
import HoverAccountBox from "../../UI/js/HoverAccountBox";

/**
 *
 * @property {boolean} checkoutShow -Property to show search bar on checkout page.
 *
 * @property {function} performSearchOperation -Property which pass to search bar for product to be searched.
 */

const Header = ({ checkoutShow, performSearchOperation }) => {
  const handleMouseOver = () => {
    /**
     * @description - function shows the menu
     *                when mouse cursor hovered on account circle.
     */
    setHover(true);
  };

  const handleMouseOut = () => {
    /**
     * @description - function removes the menu
     *                when mouse cursor hovered out of the account circle.
     */
    setHover(false);
  };

  const screenWidth = useResize();
  const [isHover, setHover] = useState(false);

  return (
    <nav className={headerStyles.navigationBar} id="topOfPage">
      <div className={`flexRowContainer ${headerStyles.headerMargin}`}>
        <div className={`${headerStyles.alignCenter} flexRowContainer`}>
          {screenWidth <= 490 && (
            <NavigationBurger checkoutShow={checkoutShow}></NavigationBurger>
          )}
          <NavLink to="/">
            <img
              src={tshirtLogo}
              alt="TeeRex Store logo"
              className={headerStyles.logoImage}
            />
          </NavLink>
        </div>

        <div
          className={`flexRowContainer ${headerStyles.flexElement2} align-items-center`}
        >
          {screenWidth > 880 && !checkoutShow && (
            <SearchBar
              performSearchOperation={performSearchOperation}
            ></SearchBar>
          )}
          {
            <NavLink to="/" className={headerStyles.products}>
              Products
            </NavLink>
          }
          <ShoppingCartBadgeIcon></ShoppingCartBadgeIcon>
          {screenWidth > 490 && (
            <div className="flexRowContainer" onMouseOver={handleMouseOver}>
              <AccountCircle className={`${headerStyles.cartProfileLogo}`} />
            </div>
          )}
          {isHover && screenWidth > 490 && (
            <HoverAccountBox onmouseleave={handleMouseOut}></HoverAccountBox>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
