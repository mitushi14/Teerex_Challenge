import "./App.css";
import ProductCatalog from "./Components/Products/js/ProductCatalog";
import CartProvider from "./Store/CartProvider";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CheckoutPage from "./Components/Checkout/js/CheckoutPage";
import AddressProvider from "./Store/AddressProvider";
import ThankYou from "./Components/ThankYou/js/ThankYou";
import { Helmet } from "react-helmet";

export const config = {
  endpoint:
    "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json",
};

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Teerex</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="King Shan Teerex Store" />
      </Helmet>
      <BrowserRouter>
        <CartProvider>
          <Switch>
            <Route path={"/"} exact>
              <ProductCatalog></ProductCatalog>
            </Route>
            <Route path={"/checkout"} exact>
              <AddressProvider>
                <CheckoutPage></CheckoutPage>
              </AddressProvider>
            </Route>
            <Route path={"/thankyou"} exact>
              <ThankYou></ThankYou>
            </Route>
          </Switch>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
