import React, { useReducer } from "react";
import AddressContext from "./Address-Context";

const defaultState = {
  address: [],
  selected: "",
};

const addressReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedAddressArray = state.address.concat(action.address);
    return {
      address: updatedAddressArray,
      selected: state.selected,
    };
  } else if (action.type === "REMOVE") {
    const updatedAddressArray = state.address.filter((item) => {
      return item.id !== action.id;
    });
    const selectedAddress =
      state.selected === action.id ? "" : state.selected.toString();
    return {
      address: updatedAddressArray,
      selected: selectedAddress,
    };
  } else if (action.type === "SELECTED") {
    const selectedAddress = action.id;
    return {
      address: [...state.address],
      selected: selectedAddress,
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

  const selectedAddressHandler = (id) => {
    dispatchAddressState({
      type: "SELECTED",
      id: id,
    });
  };
  const addressContext = {
    address: addressState.address,
    selected: addressState.selected,
    addAddress: addNewAddressHandler,
    removeAddress: removeAddressHandler,
    selectedAddress: selectedAddressHandler,
  };
  return (
    <AddressContext.Provider value={addressContext}>
      {props.children}
    </AddressContext.Provider>
  );
};

export default AddressProvider;
