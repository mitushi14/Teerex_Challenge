import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import "../../../GeneralCSS/generalCSS.css";
import AddressContext from "../../../Store/Address-Context";
import DeleteButton from "../../UI/js/DeleteButton";
import AddressItemModule from "../css/AddressItem.module.css";

const AddressItem = ({ address }) => {
  const addressCtx = useContext(AddressContext);
  /**
   * @param {Object} address - Indivisual address item.
   *
   *        @property {string} fullName - Full Name of the user.
   *
   *        @property {string} address - Full address of the user
   */

  const selectAddress = () => {
    addressCtx.selectedAddress(address.id);
  };

  return (
    <div
      className={`${AddressItemModule.addressCard} ${
        addressCtx.selected === address.id
          ? AddressItemModule.active
          : AddressItemModule.inactive
      }`}
      key={address.id}
      onClick={selectAddress}
    >
      <div className={`flexRowContainer ${AddressItemModule.itemSpacing}`}>
        <span>{address.fullName}</span>
        <DeleteButton id={address.id}>Delete</DeleteButton>
      </div>
      <p>{address.address}</p>
    </div>
  );
};

export default AddressItem;
