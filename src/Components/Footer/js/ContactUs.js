const ContactUs = () => {
  return (
    <div className="responsive">
      <p className="footerHeading">Contact Us</p>
      <address>
        12-a Crystal Building, 36 Altamount Road,
        <br /> Cumballa Hill <br /> Mumbai, Maharashtra
        <br /> 400026
        <p className={`flexColumnContainer`}>
          <a href="tel:02224924070" className="footerColor">
            02224924070
          </a>
          <a href="customer@teerex.com" className="footerColor">
            customer@teerex.com
          </a>
        </p>
      </address>
    </div>
  );
};

export default ContactUs;
