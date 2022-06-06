import Header from "../Components/Header/js/Header";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { createMemoryHistory } from "history";
import userEvent from "@testing-library/user-event";

describe("Header Component", () => {
  const history = createMemoryHistory();
  test("should have text as test", () => {
    render(
      <BrowserRouter>
        <Header></Header>
      </BrowserRouter>
    );
    const productLink = screen.getByRole("link", { name: /products/i });
    userEvent.click(productLink);
    expect(history.location.pathname).toBe("/");
  });

  test("should have Cart Icon", () => {
    const route = "/checkout";
    render(
      <BrowserRouter history={history}>
        <Header></Header>
      </BrowserRouter>
    );
    history.push(route);
    const link = screen.getByTestId("cart");
    userEvent.click(link);
    expect(history.location.pathname).toBe(route);
  });
});
