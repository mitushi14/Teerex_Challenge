import "bootstrap/dist/css/bootstrap.min.css";
import "../../../GeneralCSS/generalCSS.css";
import DeleteButton from "../../UI/js/DeleteButton";
import AddressItemModule from "../css/AddressItem.module.css";

const AddressItem = ({ address }) => {
  /**
   * @param {Object} address - Indivisual address item.
   *
   *        @property {string} fullName - Full Name of the user.
   *
   *        @property {string} address - Full address of the user
   */

  return (
    <div className={`${AddressItemModule.addressCard}`} key={address.id}>
      <div className={`flexRowContainer ${AddressItemModule.itemSpacing}`}>
        <span>{address.fullName}</span>
        <DeleteButton id={address.id}>Delete</DeleteButton>
      </div>
      <p>{address.address}</p>
    </div>
  );
};

export default AddressItem;
