import QtyBarStyles from "../css/QtyBar.module.css";
import { Add, Remove } from "@mui/icons-material";
import "../../../GeneralCSS/generalCSS.css";

const QtyBar = ({
  handleAdd,
  handleRemove,
  value,
  showError,
  maxProductQty,
  id,
}) => {
  /**
   * @param {Function} handleAdd -Function received from CartItems or CartItemMobile component to add product to cart.
   *
   * @param {Function} handleRemove -Function received from CartItems or CartItemMobile component to remove product from cart.
   *
   * @param {Int} value - Quantity of product added to cart
   *
   * @param {Function} showError - sets state to true of the error if product quantity added is greater than max quantity of product available.
   *
   * @param {Int} maxProductQty - maximum quantity available for each product
   */

  return (
    <div className={QtyBarStyles.qtyBarFlexContainer}>
      {value > 1 ? (
        <button
          className={`buttons ${QtyBarStyles.buttonsPadding}`}
          onClick={() => {
            handleRemove(value - 1);
          }}
        >
          <Remove></Remove>
        </button>
      ) : (
        <div className={QtyBarStyles.emptySpace}></div>
      )}
      <p className={QtyBarStyles.value}>{value}</p>

      <button
        className={`buttons ${QtyBarStyles.buttonsPadding}`}
        onClick={() => {
          if (value + 1 > maxProductQty) {
            showError(true);
          } else {
            handleAdd(value + 1);
          }
        }}
      >
        <Add></Add>
      </button>
    </div>
  );
};

export default QtyBar;
