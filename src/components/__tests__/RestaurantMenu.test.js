import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/mockResMenuData.json";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import Cart from "../Cart";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("Should add Food Items in Cart", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Combos (5)");
  fireEvent.click(accordionHeader);
  const itemList = screen.getAllByTestId("foodItems");
  expect(itemList.length).toBe(5);

  expect(screen.getByText("Cart (0 items)")).toBeInTheDocument();
  const addBtn = screen.getAllByRole("button", { name: "ADD" });

  fireEvent.click(addBtn[0]);
  expect(screen.getByText("Cart (1 items)")).toBeInTheDocument();

  fireEvent.click(addBtn[1]);
  expect(screen.getByText("Cart (2 items)")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(7);
});

it("Should Clear Cart", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
  expect(
    screen.getByText("Cart is Empty! Please add Items.")
  ).toBeInTheDocument();
});
