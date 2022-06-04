import { useSnackbar } from "notistack";

export const AddToCartButton = (props) => {
  const { enqueueSnackbar } = useSnackbar();

  return (
    <button
      className={`buttons`}
      onClick={() => {
        if (props.value + 1 > props.maxProductQty) {
          props.showError(true);
        } else {
          props.setQty((prevState) => {
            return prevState + 1;
          });
          props.addOneItemToCart(props.value + 1);
          enqueueSnackbar("Item added successfully", { variant: "success" });
        }
      }}
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
