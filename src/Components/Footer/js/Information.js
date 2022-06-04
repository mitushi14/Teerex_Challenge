import InfoStyles from "../css/Information.module.css";

const Information = () => {
  return (
    <div className={`flexColumnContainer ${InfoStyles.infoSpace}`}>
      <p className="footerHeading">Information</p>
      <ul className={`flexColumnContainer`}>
        <li className="infolist">About Us</li>
        <li className="infolist">Contact Us</li>
        <li className="infolist">Terms & Conditions</li>
        <li className="infolist">Return & Exchange</li>
        <li className="infolist">Shiping & Delivery</li>
        <li className="infolist">Private Policy</li>
      </ul>
    </div>
  );
};

export default Information;
