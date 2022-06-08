import HoverAccountBoxStyles from "../css/HoverAccountBox.module.css";
const HoverAccountBox = ({ onmouseleave }) => {
  /**
   * @description - HoverAccountBox component handles the menu
   *                when hoverd on account circle.
   */
  return (
    <div
      className={HoverAccountBoxStyles.hoverBox}
      onMouseLeave={() => {
        onmouseleave(false);
      }}
    >
      <div>
        <p>
          <strong> Hello Mitushi</strong>
        </p>
        <p className={HoverAccountBoxStyles.listItem}>9898989898</p>
      </div>
      <hr />
      <p className={HoverAccountBoxStyles.listItem}>Orders</p>
      <p className={HoverAccountBoxStyles.listItem}>Offers</p>
      <p className={HoverAccountBoxStyles.listItem}>Logout</p>
    </div>
  );
};

export default HoverAccountBox;
