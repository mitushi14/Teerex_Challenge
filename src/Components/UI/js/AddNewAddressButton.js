import "../../../GeneralCSS/generalCSS.css";
import AddAddressStyles from "../css/AddNewAddress.module.css";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

const AddNewAddressButton = ({ onclick }) => {
  return (
    // <button
    //   className="buttons"
    //   onClick={() => {
    //     onclick();
    //   }}
    // >
    //   Add New Address
    // </button>
    <button onClick={onclick} className={`${AddAddressStyles.addButton}`}>
      <div className={`flexColumnContainer ${AddAddressStyles.addContainer}`}>
        <AddOutlinedIcon
          className={AddAddressStyles.plusIcon}
        ></AddOutlinedIcon>
        <p className={`${AddAddressStyles.addAddress}`}>Add address</p>
      </div>
    </button>
  );
};

export default AddNewAddressButton;
