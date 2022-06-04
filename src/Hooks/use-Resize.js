import { useEffect, useState } from "react";

const useResize = () => {
  /**
   * Custon hook for getting screen size whenever it changes.
   *
   * @returns {Int.<screenWidth>} screen width whenever it changes.
   */
  const [screenWidth, setScreenWidth] = useState(window.screen.width);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.screen.width);
    };
    window.addEventListener("resize", handleResize);
  });

  return screenWidth;
};

export default useResize;
