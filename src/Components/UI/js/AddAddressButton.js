import "../../../GeneralCSS/generalCSS.css";
import AddAddressButtonStyles from "../css/AddAddress.module.css";

const AddAddressButton = () => {
  return (
    <button className={`buttons ${AddAddressButtonStyles.save}`}>Save</button>
  );
};

export default AddAddressButton;
