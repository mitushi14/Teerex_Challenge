import React from "react";

const AddressContext = React.createContext({
  address: [],
  selected: "",
  addAddress: (address) => {},
  removeAddress: (id) => {},
  selectedAddress: (id) => {},
});

export default AddressContext;
