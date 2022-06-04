import { useState, useEffect, useContext } from "react";
import CartContext from "../Store/Cart-context";

const useLocalStorage = () => {
  /**
   * Custom Hook for setting cart items to local storage whenever cart context changes.
   *
   * Custom Hook for getting cart items from local storage whenever cart context changes.
   *
   * @returns {Array.<itemPersist>} items we get from the local storage.
   */
  const [itemPersist, setItemPersist] = useState({});

  const cartCtx = useContext(CartContext);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartCtx));
  }, [cartCtx]);

  useEffect(() => {
    const localCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (!localCartItems) return;

    setItemPersist(localCartItems);
  }, [cartCtx]);

  return itemPersist;
};

export default useLocalStorage;
