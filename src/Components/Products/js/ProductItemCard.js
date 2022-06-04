import "bootstrap/dist/css/bootstrap.min.css";
import ProductCardStyles from "../css/ProductItemCard.module.css";
import AddToCartButton from "../../UI/js/AddtoCartButton";
import { useContext, useState } from "react";
import CartContext from "../../../Store/Cart-context";
import ErrorModal from "../../Error/js/ErrorModal";

const ProductItemCard = ({ Product }) => {
  /**
   * @param {Object} Product - indivisual item object of available products.
   *
   *        @property {Int} id - id of the product .
   *
   *        @property {string} name - name of the product
   *
   *        @property {Int} price - unit price of the product .
   *
   *        @property {Int} itemQty - quantity of product .
   *
   *        @property {string} imageURL - Image URL of the product .
   *
   *        @property {Int} maxQty - Maximum quantity of the product available .
   *
   *        @property {string} type - Type of the product.
   *
   *        @property {string} currency - type of currency.
   *
   *        @property {string} color - color of the product.
   *
   *        @property {string} gender - gender of the product.
   */
  const cartCtx = useContext(CartContext);
  const [error, setError] = useState(false);
  const [productQty, setProductQty] = useState(0);

  const addItemsToCart = (qty) => {
    /**
     * @param {Function} addItemsToCart - function adds product to cart and uses Cart context addItem method.
     */
    const newItem = {
      id: Product.id,
      name: Product.name,
      price: Product.price,
      itemQty: qty,
      image: Product.imageURL,
      maxQty: Product.quantity,
    };
    cartCtx.addItem(newItem);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={"Out of Stock"}
          message={`${Product.name} is only ${Product.quantity} available right now. You cannot add more than that.`}
          showError={setError}
          error={error}
        ></ErrorModal>
      )}
      <div className={`card h-100 ${ProductCardStyles.cardItem}`}>
        <img
          src={Product.imageURL}
          alt={Product.name}
          className={`card-img-top h-100 `}
        ></img>
        <div className="card-body">
          <h4 className={ProductCardStyles.productName}>{Product.name}</h4>
          <hr></hr>
          <div className="flexRowContainer justify-content-between ">
            <p className={`align-self-center ${ProductCardStyles.cardPrice}`}>
              ₹{Product.price}
            </p>

            <AddToCartButton
              addOneItemToCart={addItemsToCart}
              value={productQty}
              setQty={setProductQty}
              maxProductQty={Product.quantity}
              showError={setError}
              id={Product.id}
            ></AddToCartButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItemCard;
