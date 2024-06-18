import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should render Body Component with Search", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  //* Getting Restaurant card before search
  const resListBeforeSearch = screen.getAllByTestId("resCard");

  //* get search btn
  const searchBtn = screen.getByRole("button", { name: "Search" });

  //* get input box
  const inputSearch = screen.getByPlaceholderText("Search....");

  //* adding event on input box with search text
  fireEvent.change(inputSearch, { target: { value: "Chai" } });
  //* searching in body by clicking search btn
  fireEvent.click(searchBtn);

  //* Getting Restaurant card after search
  const resListAfterSearch = screen.getAllByTestId("resCard");

  //* checking is that restaurant present or not
  expect(resListAfterSearch.length).toBe(1);
});

it("Should render Body Component with Top Rated List", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const topRatedBtn = screen.getByRole("button", { name: "Top Rated" });
  fireEvent.click(topRatedBtn);

  const topRatedResCard = screen.getAllByTestId("resCard");
  expect(topRatedResCard.length).toBe(7);
});
