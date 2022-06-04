import React, { useReducer } from "react";
import AddressContext from "./Address-Context";

const defaultState = {
  address: [],
  selected: " ",
};

const addressReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedAddressArray = state.address.concat(action.address);
    return {
      address: updatedAddressArray,
    };
  }

  if (action.type === "REMOVE") {
    const updatedAddressArray = state.address.filter((item) => {
      return item.id !== action.id;
    });
    return {
      address: updatedAddressArray,
    };
  }
  return defaultState;
};

const AddressProvider = (props) => {
  const [addressState, dispatchAddressState] = useReducer(
    addressReducer,
    defaultState
  );
  const addNewAddressHandler = (address) => {
    dispatchAddressState({
      type: "ADD",
      address: address,
    });
  };

  const removeAddressHandler = (id) => {
    dispatchAddressState({
      type: "REMOVE",
      id: id,
    });
  };
  const addressContext = {
    address: addressState.address,
    selected: addressState.selected,
    addAddress: addNewAddressHandler,
    removeAddress: removeAddressHandler,
  };
  return (
    <AddressContext.Provider value={addressContext}>
      {props.children}
    </AddressContext.Provider>
  );
};

export default AddressProvider;
