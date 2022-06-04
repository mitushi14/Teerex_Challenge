import OurCollectionStyles from "../css/OurCollection.module.css";
const OurCollection = () => {
  /**
   * @param {function} OurCollection - function renders the our collection on the screen.
   */
  return (
    <div className={`flexRowContainer ${OurCollectionStyles.flexContainer}`}>
      <span className={OurCollectionStyles.line}></span>
      <span className={OurCollectionStyles.text}>Our Collection</span>
      <span className={OurCollectionStyles.line}></span>
    </div>
  );
};

export default OurCollection;
