import {
  render,
  screen,
  act,
  fireEvent,
  getByRole,
} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { createMemoryHistory } from "history";
import { SnackbarProvider } from "notistack";
import { Router } from "react-router-dom";
import ProductCatalog from "../Components/Products/js/ProductCatalog";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { config } from "../App";
import userEvent from "@testing-library/user-event";
import FilterPanel from "../Components/Filter/js/FliterPanel";

const mock = new MockAdapter(axios);

const ProductResponse = [
  {
    id: 1,
    imageURL:
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
    name: "Black Polo",
    type: "Polo",
    price: 250,
    currency: "INR",
    color: "Black",
    gender: "Men",
    quantity: 3,
  },
  {
    id: 2,
    imageURL:
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
    name: "Blue Polo",
    type: "Polo",
    price: 350,
    currency: "INR",
    color: "Blue",
    gender: "Women",
    quantity: 3,
  },
  {
    id: 4,
    imageURL:
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/hoodie-tshirts.png",
    name: "Black Hoodie",
    type: "Hoodie",
    price: 500,
    currency: "INR",
    color: "Black",
    gender: "Men",
    quantity: 2,
  },
  {
    id: 8,
    imageURL:
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/hoodie-tshirts.png",
    name: "Black Hoodie",
    type: "Hoodie",
    price: 500,
    currency: "INR",
    color: "Black",
    gender: "Women",
    quantity: 5,
  },
  {
    id: 15,
    imageURL:
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/round-neck-tshirts.png",
    name: "Black Round",
    type: "Basic",
    price: 300,
    currency: "INR",
    color: "Black",
    gender: "Men",
    quantity: 7,
  },
  {
    id: 29,
    imageURL:
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/round-neck-tshirts.png",
    name: "Black Round",
    type: "Basic",
    price: 300,
    currency: "INR",
    color: "Black",
    gender: "Women",
    quantity: 0,
  },
  {
    id: 30,
    imageURL:
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
    name: "Black Polo",
    type: "Polo",
    price: 300,
    currency: "INR",
    color: "Black",
    gender: "Women",
    quantity: 4,
  },
  {
    id: 28,
    imageURL:
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/round-neck-tshirts.png",
    name: "Grey Round",
    type: "Basic",
    price: 300,
    currency: "INR",
    color: "Grey",
    gender: "Men",
    quantity: 0,
  },
];

mock.onGet(`${config.endpoint}`).reply(200, ProductResponse);
jest.useFakeTimers();

describe("Product Component", () => {
  const history = createMemoryHistory();

  const ProductDOMTree = (history) => (
    <SnackbarProvider
      maxSnack={1}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      preventDuplicate
    >
      <Router history={history}>
        <ProductCatalog />
      </Router>
    </SnackbarProvider>
  );

  beforeEach(async () => {
    jest.clearAllMocks();

    await act(async () => {
      render(ProductDOMTree(history));
    });
  });

  test("should make a GET request to load products", async () => {
    render(
      <BrowserRouter>
        <ProductCatalog></ProductCatalog>
      </BrowserRouter>
    );
    const getProductsCall = mock.history.get.find(
      (req) => req.url === `${config.endpoint}`
    );

    expect(getProductsCall).toBeTruthy();
  });

  test("should show items on the product page load", async () => {
    const addToCartBtn = await screen.findAllByRole("button", {
      name: /add to cart/i,
    });

    const cardImages = screen
      .queryAllByRole("img")
      .map((image) => image.getAttribute("src"))
      .filter((src) => src !== null)
      .filter((src) => src.match(/https/i));

    expect(addToCartBtn.length).toEqual(8);
    expect(cardImages.length).toEqual(8);
  });

  test("Should have a search bar", () => {
    const searchInput = screen.getAllByPlaceholderText(/search/i)[0];
    expect(searchInput).toBeInTheDocument();
  });

  test("should be able to type in search bar", () => {
    const search = screen.getAllByPlaceholderText(/search/i)[0];
    userEvent.type(search, "black");
    expect(search).toHaveValue("black");
  });

  test("should be able to get search results from search bar", async () => {
    const search = screen.getAllByPlaceholderText(/search/i)[0];
    userEvent.type(search, "black");
    const searchIcon = screen.getByTestId("SearchIcon");
    userEvent.click(searchIcon);
    const addToCartBtn = await screen.findAllByRole("button", {
      name: /add to cart/i,
    });

    expect(addToCartBtn.length).toEqual(6);
  });

  test("should show all products when search input is empty", async () => {
    const search = screen.getAllByPlaceholderText(/search/i)[0];
    userEvent.type(search, " ");
    const searchIcon = screen.getByTestId("SearchIcon");
    userEvent.click(searchIcon);
    const addToCartBtn = await screen.findAllByRole("button", {
      name: /add to cart/i,
    });

    expect(addToCartBtn.length).toEqual(8);
  });
});

describe("Products Page - Filter Component", () => {
  const history = createMemoryHistory();

  const ProductDOMTree = (history) => (
    <SnackbarProvider
      maxSnack={1}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      preventDuplicate
    >
      <Router history={history}>
        <ProductCatalog>
          <FilterPanel></FilterPanel>
        </ProductCatalog>
      </Router>
    </SnackbarProvider>
  );

  beforeEach(async () => {
    jest.clearAllMocks();

    await act(async () => {
      render(ProductDOMTree(history));
    });
  });
  test("should have colors as filters", () => {
    render(
      <BrowserRouter>
        <FilterPanel></FilterPanel>
      </BrowserRouter>
    );
    const colors = screen.getByText("Color");
    expect(colors).toBeInTheDocument();
  });
  test("should have gender as filters", () => {
    render(
      <BrowserRouter>
        <FilterPanel></FilterPanel>
      </BrowserRouter>
    );
    const gender = screen.getByText("Gender");
    expect(gender).toBeInTheDocument();
  });
  test("should have price as filters", () => {
    render(
      <BrowserRouter>
        <FilterPanel></FilterPanel>
      </BrowserRouter>
    );
    const type = screen.getByText("Type");
    expect(type).toBeInTheDocument();
  });
  test("should have type as filters", () => {
    render(
      <BrowserRouter>
        <FilterPanel></FilterPanel>
      </BrowserRouter>
    );
    const price = screen.getByText("Price Range");
    expect(price).toBeInTheDocument();
  });

  test("should be able to filter according to gender", async () => {
    const filterButton = screen.getAllByTestId("FilterAltIcon")[0];
    userEvent.click(filterButton);
    const expandBtn = screen.getAllByTestId("AddIcon")[1];
    userEvent.click(expandBtn);
    const maleRadio = screen.getAllByRole("radio")[0];
    userEvent.click(maleRadio);
    const showResultsBtn = screen.getByRole("button", {
      name: /show results/i,
    });
    userEvent.click(showResultsBtn);
    const addToCartBtn = await screen.findAllByRole("button", {
      name: /add to cart/i,
    });

    expect(addToCartBtn.length).toEqual(4);
    expect(maleRadio.checked).toEqual(true);
  });

  test("should be able to filter according to more than one filter", async () => {
    const filterButton = screen.getAllByTestId("FilterAltIcon")[0];
    userEvent.click(filterButton);
    const expandBtn1 = screen.getAllByTestId("AddIcon")[1];
    userEvent.click(expandBtn1);
    const womenRadio = screen.getAllByRole("radio")[1];
    userEvent.click(womenRadio);
    const expandBtn2 = screen.getAllByTestId("AddIcon")[2];
    userEvent.click(expandBtn2);
    const typeCheckBox = screen.getAllByRole("checkbox")[1];
    userEvent.click(typeCheckBox);
    const showResultsBtn = screen.getByRole("button", {
      name: /show results/i,
    });
    userEvent.click(showResultsBtn);
    const addToCartBtn = await screen.findAllByRole("button", {
      name: /add to cart/i,
    });

    expect(addToCartBtn.length).toEqual(1);
    expect(womenRadio.checked).toEqual(true);
    expect(typeCheckBox.checked).toEqual(true);
  });
  test("should show no results found if no products present for filters", async () => {
    const filterButton = screen.getAllByTestId("FilterAltIcon")[0];
    userEvent.click(filterButton);
    const expandBtn1 = screen.getAllByTestId("AddIcon")[1];
    userEvent.click(expandBtn1);
    const womenRadio = screen.getAllByRole("radio")[1];
    userEvent.click(womenRadio);
    const expandBtn2 = screen.getAllByTestId("AddIcon")[1];
    userEvent.click(expandBtn2);
    const priceRadio = screen.getAllByRole("radio")[0];
    userEvent.click(priceRadio);
    const showResultsBtn = screen.getByRole("button", {
      name: /show results/i,
    });
    userEvent.click(showResultsBtn);
    const noResults = await screen.findAllByRole("paragraph", {
      name: /No products found for the applied filters./i,
    });

    expect(noResults).toBeInTheDocument();
    expect(womenRadio.checked).toEqual(true);
    expect(priceRadio.checked).toEqual(true);
  });
});
