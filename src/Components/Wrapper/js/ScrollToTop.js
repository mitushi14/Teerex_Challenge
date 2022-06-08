import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = (props) => {
  /**
   * @description - Wrapper component to scroll
   *                back on top when route changes.
   */
  const location = useLocation();
  console.log(location);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>;
};

export default ScrollToTop;
