// import AccountStyles from "../css/Account.module.css";

const Account = () => {
  return (
    <div className={`flexColumnContainer responsive`}>
      <p className="footerHeading">Account</p>
      <ul className={`flexColumnContainer`}>
        <li className="infolist">Create Account</li>
        <li className="infolist">Log In</li>
        <li className="infolist">Android App</li>
        <li className="infolist">IOS App</li>
      </ul>
    </div>
  );
};

export default Account;
