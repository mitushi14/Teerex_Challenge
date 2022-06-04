import Original from "../../../Images/original.png";
import Return from "../../../Images/product-return.png";
import Measurement from "../../../Images/tape.png";
import Delivery from "../../../Images/delivery-truck.png";
import FeatureStyles from "../css/Features.module.css";

const Features = () => {
  return (
    <div>
      <div className={`flexRowContainer ${FeatureStyles.centerALign}`}>
        <img
          src={Original}
          alt="100% gaurantee"
          className={`${FeatureStyles.featureImage}`}
        />
        <p className={FeatureStyles.fontResponsive}>
          <span className={`${FeatureStyles.boldFeature}`}>100% ORIGINAL </span>
          <br />
          gaurantee all the products.
        </p>
      </div>
      <div className={`flexRowContainer ${FeatureStyles.centerALign}`}>
        <img
          src={Return}
          alt="Return Product"
          className={`${FeatureStyles.featureImage}`}
        />
        <p className={FeatureStyles.fontResponsive}>
          <span className={`${FeatureStyles.boldFeature}`}>
            30 DAYS RETURN{" "}
          </span>
          <br />
          of recieving the product.
        </p>
      </div>
      <div className={`flexRowContainer ${FeatureStyles.centerALign}`}>
        <img
          src={Measurement}
          alt="Perfectly Fits"
          className={`${FeatureStyles.featureImage}`}
        />
        <p className={FeatureStyles.fontResponsive}>
          <span className={`${FeatureStyles.boldFeature}`}>PERFECT FIT </span>
          <br />
          for everyone.
        </p>
      </div>
      <div className={`flexRowContainer ${FeatureStyles.centerALign}`}>
        <img
          src={Delivery}
          alt="Fast Delivery"
          className={`${FeatureStyles.featureImage}`}
        />
        <p className={FeatureStyles.fontResponsive}>
          <span className={`${FeatureStyles.boldFeature}`}>FAST DELIVERY </span>
          <br />
          within 3-5 days of order.
        </p>
      </div>
    </div>
  );
};

export default Features;
