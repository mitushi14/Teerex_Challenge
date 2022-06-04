import "../../../GeneralCSS/generalCSS.css";
import QtyBar from "../../UI/js/QtyBar";
import CartMobileModule from "../css/CartItemMobile.module.css";
import { useContext, useState } from "react";
import CartContext from "../../../Store/Cart-context";

const CartItemMobile = ({ item }) => {
  /**
   * MOBILE VIEW CART COMPONENT
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
  const [error, setError] = useState(false);
  const cartctx = useContext(CartContext);

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

  return (
    <div className={`flexRowContainer ${CartMobileModule.cartContainer}`}>
      <div className={`${CartMobileModule.imageContainer}  `}>
        <img
          src={item.image}
          alt={item.name}
          className={CartMobileModule.cartImage}
        ></img>
      </div>
      <div className={`flexColumnContainer`}>
        <h5>{item.name}</h5>
        <p>₹{item.price}</p>
        <QtyBar
          handleAdd={addItemsToCart}
          handleRemove={removeItemsToCart}
          value={item.itemQty}
          showError={setError}
          maxProductQty={item.maxQty}
          id={item.id}
        ></QtyBar>
      </div>
      <div>
        <h4>₹{total}</h4>
      </div>
    </div>
  );
};
export default CartItemMobile;
