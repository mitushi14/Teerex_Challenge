import "../../../GeneralCSS/generalCSS.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { useContext } from "react";
import AddressContext from "../../../Store/Address-Context";
import DeleteButtonModule from "../css/DeleteButton.module.css";

const DeleteButton = ({ id, deleteCartItem, type }) => {
  /**
   * @param {Int} id - id of the address item to be deleted.
   *
   * @param {Function} deleteCartItem - Function to delete the cart item from the cart.
   *
   * @param {string} type - describes is cart item is to be deleted or address item.
   */
  const addressCtx = useContext(AddressContext);
  return (
    <button
      className={`buttonsNoFill ${DeleteButtonModule.deleteButton}`}
      onClick={() => {
        if (type === "deleteItem") {
          deleteCartItem();
        } else {
          addressCtx.removeAddress(id);
        }
      }}
    >
      <DeleteIcon></DeleteIcon>
    </button>
  );
};

export default DeleteButton;
