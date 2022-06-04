import ColorPalleteStyles from "../css/ColorPallete.module.css";

const ColorPallete = ({ color, colorValue }) => {
  /**
   * @param {Function} ColorPallete - renders indivisual color on the color filter panel.
   *
   * @param {Function} colorValue - sends the color value to the Filter panel Component.
   *
   * @param {Object} color - single color object of the colors array;\.
   *        @property {string} name - Name of the color
   *
   *        @property {string} hexCode - Hexcode of the color
   */
  return (
    <div className="col-2">
      <button
        style={{ backgroundColor: `#${color.hexCode}` }}
        className={`${ColorPalleteStyles.colorPallete}  `}
        value={color.name}
        key={color.name}
        onClick={(event) => {
          colorValue(event.target.value);
        }}
      ></button>
    </div>
  );
};

export default ColorPallete;
