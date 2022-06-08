import "../../../GeneralCSS/generalCSS.css";
import CheckoutButtonModule from "../css/CheckoutButton.module.css";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import AddressContext from "../../../Store/Address-Context";
import { useSnackbar } from "notistack";

const CheckoutButton = () => {
  const history = useHistory();
  const addressCtx = useContext(AddressContext);
  const { enqueueSnackbar } = useSnackbar();

  const validateCheckoutRequest = () => {
    if (addressCtx.address.length === 0) {
      enqueueSnackbar("Please add atleast 1 address to continue", {
        variant: "error",
      });
      return false;
    }

    if (addressCtx.selected.toString().length === 0) {
      enqueueSnackbar("Please select atleast 1 address to continue", {
        variant: "warning",
      });
      return false;
    }

    return true;
  };
  const checkoutEventHandler = () => {
    /**
     * redirects to thank you page
     * removes cart items from local storage
     * empties the cart context items array and puts total amount to 0
     */
    if (validateCheckoutRequest()) {
      history.push("/thankyou");
    }
  };
  return (
    <button
      className={`buttons ${CheckoutButtonModule.marginTop} ${CheckoutButtonModule.marginBottom}`}
      onClick={checkoutEventHandler}
    >
      Checkout
    </button>
  );
};

export default CheckoutButton;
