import BackdropModule from "../css/Backdrop.module.css";

const Backdrop = (props) => {
  return (
    <div className={`${BackdropModule.backdrop} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Backdrop;
