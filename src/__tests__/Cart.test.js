// import { render, screen, act } from "@testing-library/react";
// import { BrowserRouter } from "react-router-dom";
// import { createMemoryHistory } from "history";
// import { SnackbarProvider } from "notistack";
// import { Router } from "react-router-dom";
// import ProductCatalog from "../Components/Products/js/ProductCatalog";
// import MockAdapter from "axios-mock-adapter";
// import axios from "axios";
// import { config } from "../App";
// import userEvent from "@testing-library/user-event";
// import FilterPanel from "../Components/Filter/js/FliterPanel";
// import CheckoutPage from "../Components/Checkout/js/CheckoutPage";

// const mock = new MockAdapter(axios);

// const ProductResponse = [
//   {
//     id: 1,
//     imageURL:
//       "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
//     name: "Black Polo",
//     type: "Polo",
//     price: 250,
//     currency: "INR",
//     color: "Black",
//     gender: "Men",
//     quantity: 3,
//   },
//   {
//     id: 2,
//     imageURL:
//       "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
//     name: "Blue Polo",
//     type: "Polo",
//     price: 350,
//     currency: "INR",
//     color: "Blue",
//     gender: "Women",
//     quantity: 3,
//   },
//   {
//     id: 4,
//     imageURL:
//       "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/hoodie-tshirts.png",
//     name: "Black Hoodie",
//     type: "Hoodie",
//     price: 500,
//     currency: "INR",
//     color: "Black",
//     gender: "Men",
//     quantity: 2,
//   },
//   {
//     id: 8,
//     imageURL:
//       "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/hoodie-tshirts.png",
//     name: "Black Hoodie",
//     type: "Hoodie",
//     price: 500,
//     currency: "INR",
//     color: "Black",
//     gender: "Women",
//     quantity: 5,
//   },
//   {
//     id: 15,
//     imageURL:
//       "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/round-neck-tshirts.png",
//     name: "Black Round",
//     type: "Basic",
//     price: 300,
//     currency: "INR",
//     color: "Black",
//     gender: "Men",
//     quantity: 7,
//   },
//   {
//     id: 29,
//     imageURL:
//       "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/round-neck-tshirts.png",
//     name: "Black Round",
//     type: "Basic",
//     price: 300,
//     currency: "INR",
//     color: "Black",
//     gender: "Women",
//     quantity: 0,
//   },
//   {
//     id: 30,
//     imageURL:
//       "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
//     name: "Black Polo",
//     type: "Polo",
//     price: 300,
//     currency: "INR",
//     color: "Black",
//     gender: "Women",
//     quantity: 4,
//   },
//   {
//     id: 28,
//     imageURL:
//       "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/round-neck-tshirts.png",
//     name: "Grey Round",
//     type: "Basic",
//     price: 300,
//     currency: "INR",
//     color: "Grey",
//     gender: "Men",
//     quantity: 0,
//   },
// ];

// mock.onGet(`${config.endpoint}`).reply(200, ProductResponse);
// jest.useFakeTimers();

// describe("Cart Component", () => {
//   const history = createMemoryHistory();

//   const ProductDOMTree = (history) => (
//     <SnackbarProvider
//       maxSnack={1}
//       anchorOrigin={{
//         vertical: "bottom",
//         horizontal: "center",
//       }}
//       preventDuplicate
//     >
//       <Router history={history}>
//         <CheckoutPage />
//       </Router>
//     </SnackbarProvider>
//   );

//   beforeEach(async () => {
//     jest.clearAllMocks();

//     await act(async () => {
//       render(ProductDOMTree(history));
//     });
//   });

//   test("should be able to add items to the cart", async () => {
//     const addToCartBtn = await screen.findAllByRole("button", {
//       name: /add to cart/i,
//     });

//     expect(addToCartBtn.length).toEqual(1);

//     // userEvent.click(addToCartBtn);
//     // // history.push("/checkout");
//     // const item = screen.getAllByText("Black Round");
//     // console.log(item);
//     // expect(item.length).toEqual(1);
//   });
// });
