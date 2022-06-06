import { ShoppingCartOutlined } from "@mui/icons-material";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import CartContext from "../../../Store/Cart-context";
import CartBadgeStyles from "../css/ShoppingCartBadgeIcon.module.css";
import "../../../GeneralCSS/generalCSS.css";

const ShoppingCartBadgeIcon = () => {
  /**
   * @description {function} ShoppingCartBadgeIcon -Shows the cart icon
   *           and renders the number of items in the cart.
   */

  const cartCtx = useContext(CartContext);
  return (
    <NavLink
      className={`flexRowContainer ${CartBadgeStyles.cartBadge}`}
      to="/checkout"
    >
      <ShoppingCartOutlined
        className={CartBadgeStyles.shoppingCart}
      ></ShoppingCartOutlined>
      <span data-testid="cart">{cartCtx.items.length}</span>
    </NavLink>
  );
};

export default ShoppingCartBadgeIcon;
