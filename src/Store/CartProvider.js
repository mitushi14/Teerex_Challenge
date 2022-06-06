import CartContext from "./Cart-context";
import React, { useReducer } from "react";

const defaultState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount = state.totalAmount + action.item.price;
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemIndex];
    let updatedCartItem;
    let updatedCartItemsArray;
    if (existingCartItem) {
      updatedCartItem = {
        ...existingCartItem,
        itemQty: existingCartItem.itemQty + 1,
      };
      updatedCartItemsArray = [...state.items];
      updatedCartItemsArray[existingCartItemIndex] = updatedCartItem;
    } else {
      updatedCartItemsArray = state.items.concat(action.item);
    }

    return {
      items: updatedCartItemsArray,
      totalAmount: updatedTotalAmount,
    };
  } else if (action.type === "REMOVE") {
    console.log(action.id);
    const existingCartItemIndex = state.items.findIndex((item) => {
      // console.log(`item ID: ${item.id}`);
      // console.log(`action item ID: ${action.id}`);
      return item.id === action.id;
    });
    // console.log(existingCartItemIndex);
    const existingCartItem = state.items[existingCartItemIndex];
    // console.log(existingCartItem);
    const updatedTotalAmount = state.totalAmount - existingCartItem.price;
    let updatedCartItemsArray;
    if (existingCartItem.itemQty === 1) {
      updatedCartItemsArray = state.items.filter(
        (item) => item.id !== action.id
      );
    } else {
      const updatedCartItem = {
        ...existingCartItem,
        itemQty: existingCartItem.itemQty - 1,
      };
      updatedCartItemsArray = [...state.items];
      updatedCartItemsArray[existingCartItemIndex] = updatedCartItem;
    }
    return {
      items: updatedCartItemsArray,
      totalAmount: updatedTotalAmount,
    };
  } else if (action.type === "DELETE") {
    const existingCartItemIndex = state.items.findIndex((item) => {
      return item.id === action.id;
    });

    const existingCartItem = state.items[existingCartItemIndex];
    const updatedTotalAmount =
      state.totalAmount - existingCartItem?.price * existingCartItem?.itemQty;
    const updatedCartItemsArray = state.items.filter(
      (item) => item.id !== action.id
    );
    return {
      items: updatedCartItemsArray,
      totalAmount: updatedTotalAmount,
    };
  } else if (action.type === "EMPTY") {
    return defaultState;
  }
  return defaultState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartState] = useReducer(cartReducer, defaultState);

  const addCartItemHandler = (item) => {
    dispatchCartState({
      type: "ADD",
      item: item,
    });
  };
  const removeCartItemHandler = (id) => {
    dispatchCartState({
      type: "REMOVE",
      id: id,
    });
  };

  const deleteCartItemHandler = (id) => {
    dispatchCartState({
      type: "DELETE",
      id: id,
    });
  };

  const emptyCartItemHandler = () => {
    dispatchCartState({
      type: "EMPTY",
    });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addCartItemHandler,
    removeItem: removeCartItemHandler,
    deleteItem: deleteCartItemHandler,
    emptyCartItem: emptyCartItemHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
