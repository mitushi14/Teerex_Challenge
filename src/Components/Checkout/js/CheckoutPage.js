import { useContext, useState } from "react";
import CartItems from "../../Cart/js/CartItems";
import "bootstrap/dist/css/bootstrap.min.css";
import AddressItem from "../../Address/js/AddressItem";
import NewAddressForm from "../../Address/js/NewAddressForm";
import AddressContext from "../../../Store/Address-Context";
import Header from "../../Header/js/Header";
import AddNewAddressButton from "../../UI/js/AddNewAddressButton";
import CheckoutModule from "../css/CheckoutPage.module.css";
import OrderSummary from "./OrderSummary";
import CheckoutButton from "../../UI/js/CheckoutButton";
import useLocalStorage from "../../../Hooks/use-localStorage";
import useResize from "../../../Hooks/use-Resize";
import CartItemMobile from "../../Cart/js/CartItemMobile";

const CheckoutPage = () => {
  const addressCtx = useContext(AddressContext);
  const [showAddressForm, setAddressForm] = useState(false);
  const screenWidth = useResize();

  const itemPersist = useLocalStorage();

  return (
    <div>
      <Header checkoutShow></Header>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-xs-12">
            <h2>Shipping Address</h2>
            <hr />
            <p>
              Manage all the shipping addresses you want. This way you won't
              have to enter the shipping address manually with every order.
              Select the address you want to get your order delivered.
            </p>
            {/* <div className="flexRowContainer"> */}
            <div className={`row ${CheckoutModule.marginBottom}`}>
              {addressCtx.address.length > 0 &&
                addressCtx.address.map((address) => {
                  return (
                    <div
                      className={`col-sm-3 col-xs-6 ${CheckoutModule.addressCardMarginBottom}`}
                    >
                      <AddressItem address={address}></AddressItem>
                    </div>
                  );
                })}
            </div>
            {!showAddressForm && addressCtx.address.length <= 3 ? (
              <AddNewAddressButton
                onclick={() => {
                  setAddressForm(true);
                }}
              ></AddNewAddressButton>
            ) : (
              !showAddressForm && <p>You can only add 4 addresses at a time</p>
            )}

            {showAddressForm && (
              <NewAddressForm showForm={setAddressForm}></NewAddressForm>
            )}
            <h2 className={CheckoutModule.marginTop}>Cart Items</h2>
            <hr></hr>
            {screenWidth > 770 && (
              <table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Unit Price</th>
                    <th>Total Price</th>
                    <th>Remove</th>
                  </tr>
                </thead>

                <tbody>
                  {itemPersist.totalAmount !== 0 &&
                    itemPersist.items &&
                    itemPersist.items.map((ele) => {
                      return <CartItems item={ele} key={ele.id}></CartItems>;
                    })}
                </tbody>
              </table>
            )}
            {itemPersist.totalAmount === 0 && itemPersist.items && (
              <p>No items added in the cart.</p>
            )}
            {screenWidth <= 770 &&
              itemPersist.totalAmount !== 0 &&
              itemPersist.items &&
              itemPersist.items.map((ele) => {
                return (
                  <CartItemMobile item={ele} key={ele.id}></CartItemMobile>
                );
              })}
            {screenWidth <= 770 && (
              <div className={CheckoutModule.padding}></div>
            )}
          </div>

          <div className="col-lg-4 col-xs-12">
            <OrderSummary></OrderSummary>
            {itemPersist.items?.length > 0 && <CheckoutButton></CheckoutButton>}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CheckoutPage;
