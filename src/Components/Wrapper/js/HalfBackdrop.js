import halfBackdropModule from "../css/HalfBackdrop.module.css";

const HalfBackdrop = (props) => {
  return (
    <div className={`${halfBackdropModule.halfBackdrop} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default HalfBackdrop;
