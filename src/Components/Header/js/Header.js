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

/**
 *
 * @property {boolean} checkoutShow -Property to show search bar on checkout page.
 *
 * @property {function} performSearchOperation -Property which pass to search bar for product to be searched.
 */

const Header = ({ checkoutShow, performSearchOperation }) => {
  const screenWidth = useResize();

  return (
    <nav className={headerStyles.navigationBar}>
      <div className={`flexRowContainer ${headerStyles.headerMargin}`}>
        <div className={`${headerStyles.alignCenter} flexRowContainer`}>
          {screenWidth <= 490 && (
            <NavigationBurger checkoutShow={checkoutShow}></NavigationBurger>
          )}

          <img
            src={tshirtLogo}
            alt="TeeRex Store logo"
            className={headerStyles.logoImage}
          />
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
            <AccountCircle className={`${headerStyles.cartProfileLogo}`} />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
