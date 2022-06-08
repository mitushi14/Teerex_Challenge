import { useState } from "react";
import ColorPalleteStyles from "../css/ColorPallete.module.css";

const ColorPallete = ({ color, colorValue }) => {
  const [selectedColor, setSelectedColor] = useState(false);
  /**
   * @param {Function} ColorPallete - renders indivisual color on the color filter panel.
   *
   * @param {Function} colorValue - sends the color value to the Filter panel Component.
   *
   * @param {Object} color - single color object of the colors array;
   *
   *        @property {string} name - Name of the color
   *
   *        @property {string} hexCode - Hexcode of the color
   */

  return (
    <div
      className={`col-2 ${ColorPalleteStyles.colorContainer} ${
        selectedColor && ColorPalleteStyles.activeColor
      }`}
      key={color.name}
    >
      <button
        style={{ backgroundColor: `#${color.hexCode}` }}
        className={`${ColorPalleteStyles.colorPallete} 
        `}
        value={color.name}
        onClick={(event) => {
          colorValue(event.target.value);
          setSelectedColor((prevColor) => {
            return !prevColor;
          });
        }}
      ></button>
    </div>
  );
};

export default ColorPallete;
