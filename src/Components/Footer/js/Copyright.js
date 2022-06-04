import FavoriteIcon from "@mui/icons-material/Favorite";
import CopyrightStyles from "../css/Copyright.module.css";

const Copyright = () => {
  return (
    <div className={CopyrightStyles.copyrightColor}>
      <p className={CopyrightStyles.centerAlign}>
        Copyright &copy; 2022. All rights reserved. Design made with{" "}
        <FavoriteIcon /> by Mitushi
      </p>
    </div>
  );
};

export default Copyright;
