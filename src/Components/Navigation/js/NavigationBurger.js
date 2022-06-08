import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import HalfBackdrop from "../../Wrapper/js/HalfBackdrop";
import NavigationBurgerStyles from "../css/NavigationBurger.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloseButton from "../../UI/js/CloseButton";
import PersonIcon from "@mui/icons-material/Person";
import { ShoppingBag } from "@mui/icons-material";
import LogoutIcon from "@mui/icons-material/Logout";
import DiscountIcon from "@mui/icons-material/Discount";
import Backdrop from "../../Wrapper/js/Backdrop";

const NavigationBurger = () => {
  /**
   * @description {function} NavigationBurger - Hamburger Icon shows up
   *                          for screenwidth less than or equal to 490px
   *
   * @param {boolean} showMenu - initial state of the side bar menu.
   *
   * @param {function} setShowMenu - sets if clicked on hamburger icon.
   */
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav>
      <button
        className={NavigationBurgerStyles.navigationButton}
        onClick={() => {
          setShowMenu(true);
        }}
      >
        <MenuIcon></MenuIcon>
      </button>
      {showMenu && (
        <Backdrop>
          <HalfBackdrop>
            <div className={`${NavigationBurgerStyles.profileContainer}`}>
              <div
                className={`${NavigationBurgerStyles.spacing} flexRowContainer`}
              >
                <div
                  className={`${NavigationBurgerStyles.accountNameContainer} flexColumnContainer`}
                >
                  <AccountCircleIcon
                    className={NavigationBurgerStyles.accountCircle}
                  ></AccountCircleIcon>
                  <span className={NavigationBurgerStyles.name}>Mitushi</span>
                </div>
                <div className={NavigationBurgerStyles.marginButton}>
                  <CloseButton setShowMenu={setShowMenu}></CloseButton>
                </div>
              </div>
            </div>
            <ul className={NavigationBurgerStyles.listItemsContainer}>
              <li>
                <PersonIcon /> Profile
              </li>

              <li>
                <ShoppingBag /> Orders
              </li>
              <li>
                <DiscountIcon /> Offers
              </li>
              <li>
                <LogoutIcon /> Logout
              </li>
            </ul>
          </HalfBackdrop>
        </Backdrop>
      )}
    </nav>
  );
};

export default NavigationBurger;
