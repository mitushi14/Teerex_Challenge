import "../../../GeneralCSS/generalCSS.css";
import CheckoutButtonModule from "../css/CheckoutButton.module.css";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../../Store/Cart-context";

const CheckoutButton = () => {
  const history = useHistory();
  const cartCtx = useContext(CartContext);

  const checkoutEventHandler = () => {
    /**
     * redirects to thank you page
     * removes cart items from local storage
     * empties the cart context items array and puts total amount to 0
     */
    history.push("/thankyou");
    localStorage.removeItem("cartItems");
    cartCtx.items = [];
    cartCtx.totalAmount = 0;
  };
  return (
    <button
      className={`buttons ${CheckoutButtonModule.marginTop}`}
      onClick={checkoutEventHandler}
    >
      Checkout
    </button>
  );
};

export default CheckoutButton;
