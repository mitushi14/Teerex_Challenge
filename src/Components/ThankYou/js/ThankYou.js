import { useContext } from "react";
import { useHistory } from "react-router-dom";
import CartContext from "../../../Store/Cart-context";
import ThankYouModule from "../css/ThankYou.module.css";

const ThankYou = () => {
  const cartCtx = useContext(CartContext);
  const history = useHistory();
  const continueButtonHandler = () => {
    cartCtx.emptyCartItem();
    history.push("/");
  };
  return (
    <div className={`${ThankYouModule.page}  flexColumnContainer`}>
      <h1>Thank You for shopping with us</h1>
      <p className={ThankYouModule.line}>
        Your order will be delivered within 3-4 business days.
      </p>
      <div className={ThankYouModule.marginTop}>
        <button
          className={`buttons ${ThankYouModule.continueButton}`}
          onClick={continueButtonHandler}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default ThankYou;
