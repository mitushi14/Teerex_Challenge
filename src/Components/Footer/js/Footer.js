import Account from "./Account";
import Connect from "./Connect";
import ContactUs from "./ContactUs";
import Features from "./Features";
import Information from "./Information";
import FooterStyles from "../css/Footer.module.css";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <footer className={`flexColumnContainer ${FooterStyles.footer}`}>
      <div
        className={`footerContainer ${FooterStyles["grid-4-column"]} footerColor`}
      >
        <div className={`flexColumnContainer`}>
          <ContactUs></ContactUs>
          <Connect></Connect>
        </div>
        <div>
          <Account></Account>
        </div>
        <div>
          <Information></Information>
        </div>

        <div>
          <Features></Features>
        </div>
      </div>
      <br />
      <Copyright></Copyright>
    </footer>
  );
};

export default Footer;
