import { useContext, useState } from "react";
import CartContext from "../../../Store/Cart-context";
import "../../../GeneralCSS/generalCSS.css";
import CartItemsModule from "../css/CartItem.module.css";
import DeleteButton from "../../UI/js/DeleteButton";
import QtyBar from "../../UI/js/QtyBar";
import ErrorModal from "../../Error/js/ErrorModal";

const CartItems = ({ item }) => {
  /**
   * WEB VIEW CART COMPONENT
   * @param {Object} item - indivisual item object of products added in cart
   *
   *        @property {Int} id - id of the product added to cart.
   *
   *        @property {string} name - name of the product added to cart
   *
   *        @property {Int} price - unit price of the product added to cart.
   *
   *        @property {Int} itemQty - quantity of product added to cart.
   *
   *        @property {string} image - Image URL of the product added to cart.
   *
   *        @property {Int} maxQty - Maximum quantity of the product available added to cart.
   */
  const cartctx = useContext(CartContext);
  const [error, setError] = useState(false);

  const price = item.price;
  const qty = item.itemQty;
  const total = price * qty;

  const addItemsToCart = (qty) => {
    /**
     * @param {Function} addItemsToCart - function adds product to cart and uses Cart context addItem method.
     */
    const newItem = {
      id: item.id,
      name: item.name,
      price: item.price,
      itemQty: qty,
      image: item.imageURL,
      maxQty: item.maxQty,
    };
    cartctx.addItem(newItem);
  };

  const removeItemsToCart = (qty) => {
    /**
     * @param {Function} removeItemsToCart - function removes product from the cart and uses Cart context removeItem method.
     */
    cartctx.removeItem(item.id);
  };

  const deleteItemsFromCart = () => {
    /**
     * @param {Function} deleteItemsFromCart - function deletes product from the cart and uses Cart context deleteItem method.
     */
    cartctx.deleteItem(item.id);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={"Out of Stock"}
          message={`${item.name} is only ${item.maxQty} available right now. You cannot add more than that.`}
          showError={setError}
          error={error}
        ></ErrorModal>
      )}
      <tr>
        <td className="flexRowContainer">
          <div className={`${CartItemsModule.imageContainer}  `}>
            <img
              src={item.image}
              alt={item.name}
              className={CartItemsModule.cartImage}
            ></img>
          </div>
          <p className={` ${CartItemsModule.columnContainer}`}>{item.name}</p>
        </td>

        <td>
          <QtyBar
            handleAdd={addItemsToCart}
            handleRemove={removeItemsToCart}
            value={item.itemQty}
            showError={setError}
            maxProductQty={item.maxQty}
            id={item.id}
          ></QtyBar>
        </td>
        <td>
          <p>₹{item.price}</p>
        </td>
        <td>
          <p className={CartItemsModule.text}>₹{total}</p>
        </td>
        <td>
          <DeleteButton
            deleteCartItem={deleteItemsFromCart}
            type="deleteItem"
          ></DeleteButton>
        </td>
      </tr>
    </>
  );
};
export default CartItems;
