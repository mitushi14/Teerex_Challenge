import { useContext } from "react";
import "../../../GeneralCSS/generalCSS.css";
import CartContext from "../../../Store/Cart-context";
import OrderSummaryModule from "../css/OrderSummary.module.css";

const OrderSummary = () => {
  const cartCtx = useContext(CartContext);
  const totalAmount = cartCtx.totalAmount !== 0 ? cartCtx.totalAmount + 50 : 0;
  return (
    <>
      <div className={`${OrderSummaryModule.colorStrip}`}></div>
      <div className={`${OrderSummaryModule.container}`}>
        <h4>Order Summary</h4>
        <hr></hr>
        <div className={`flexRowContainer ${OrderSummaryModule.spaceBetween}`}>
          <p>Price</p>
          <p>₹{cartCtx.totalAmount}</p>
        </div>
        <div className={`flexRowContainer ${OrderSummaryModule.spaceBetween}`}>
          <p>Delivery Charges</p>
          <p>{cartCtx.items.length > 0 ? "₹50" : "₹0"}</p>
        </div>
        <hr></hr>
        <div className={`flexRowContainer ${OrderSummaryModule.spaceBetween}`}>
          <p>Total Amount</p>
          <p>₹{totalAmount}</p>
        </div>
      </div>
    </>
  );
};

export default OrderSummary;
