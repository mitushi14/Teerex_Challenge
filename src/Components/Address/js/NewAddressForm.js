import { useContext, useEffect, useState } from "react";
import AddressContext from "../../../Store/Address-Context";
import "../../../GeneralCSS/generalCSS.css";
import NewAddressModule from "../css/NewAddressForm.module.css";
import AddAddressButton from "../../UI/js/AddAddressButton";
import CancelButton from "../../UI/js/CancelButton";

const NewAddressForm = ({ showForm }) => {
  /**
   * @param {Function} showForm - sets the state to whether to show address form or not.
   */
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const addressCtx = useContext(AddressContext);

  useEffect(() => {
    localStorage.setItem("addressItem", JSON.stringify(addressCtx));
  }, [addressCtx]);

  const addNewAddress = (event) => {
    /**
     * @param {Function} addNewAddress - function which adds new address , uses addAddress method from Address Context.
     */
    event.preventDefault();
    addressCtx.addAddress({
      id: Math.round(Math.random() * 100),
      fullName: fullName,
      address: address,
    });
    showForm(false);
  };
  return (
    <form
      onSubmit={addNewAddress}
      className={`flexColumnContainer ${NewAddressModule.formContainer} ${NewAddressModule.marginTop}`}
    >
      <input
        type="text"
        placeholder="Full name"
        required
        className={NewAddressModule.input}
        onChange={(event) => {
          setFullName(event.target.value);
        }}
      ></input>
      <textarea
        placeholder="Full address"
        rows="4"
        data-gramm="false"
        cols="50"
        required
        onChange={(event) => {
          setAddress(event.target.value);
        }}
        className={`${NewAddressModule.marginTop}`}
      ></textarea>
      <div className={`flexRowContainer ${NewAddressModule.marginTop} `}>
        <AddAddressButton
          className={`${NewAddressModule.marginRight}`}
        ></AddAddressButton>
        <CancelButton onclick={showForm}>Cancel</CancelButton>
      </div>
    </form>
  );
};

export default NewAddressForm;
