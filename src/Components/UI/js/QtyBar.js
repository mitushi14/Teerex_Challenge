import QtyBarStyles from "../css/QtyBar.module.css";
import { Add, Remove } from "@mui/icons-material";
import "../../../GeneralCSS/generalCSS.css";
import DeleteButton from "./DeleteButton";
import CartContext from "../../../Store/Cart-context";
import { useContext } from "react";

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
  const cartCtx = useContext(CartContext);

  const deleteCartItem = () => {
    /**
     * @param {Function} deleteCartItem - Function deletes item from the cart uses deleteItem from Cart Context.
     */
    cartCtx.deleteItem(id);
  };

  return (
    <div className={QtyBarStyles.qtyBarFlexContainer}>
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
      <p className={QtyBarStyles.value}>{value}</p>

      {value === 1 ? (
        <DeleteButton
          deleteCartItem={deleteCartItem}
          type="deleteItem"
        ></DeleteButton>
      ) : (
        <button
          className={`buttons ${QtyBarStyles.buttonsPadding}`}
          onClick={() => {
            handleRemove(value - 1);
          }}
        >
          <Remove></Remove>
        </button>
      )}
    </div>
  );
};

export default QtyBar;
