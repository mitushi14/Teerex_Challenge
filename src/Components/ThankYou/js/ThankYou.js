import { useHistory } from "react-router-dom";
import ThankYouModule from "../css/ThankYou.module.css";

const ThankYou = () => {
  const history = useHistory();
  const continueButtonHandler = () => {
    history.push("/");
  };
  return (
    <div className={`${ThankYouModule.page}  flexColumnContainer`}>
      <h1>Thank You for shopping with us</h1>
      <p className={ThankYouModule.line}>
        Your order will be delivered within 3-4 business days.
      </p>
      <div>
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
