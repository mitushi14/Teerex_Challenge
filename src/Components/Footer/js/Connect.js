import ConnectStyles from "../css/Connect.module.css";
import { YouTube, Facebook, Twitter, Instagram } from "@mui/icons-material";

const Connect = () => {
  return (
    <div className={`flexColumnContainer responsive`}>
      <p className="footerHeading">Social Media</p>
      <div className={`flexRowContainer`}>
        <Facebook className={`${ConnectStyles.marginLeft}`} />
        <Instagram className={`${ConnectStyles.marginLeft}`} />
        <YouTube className={`${ConnectStyles.marginLeft}`} />
        <Twitter className={`${ConnectStyles.marginLeft}`} />
      </div>
    </div>
  );
};

export default Connect;
