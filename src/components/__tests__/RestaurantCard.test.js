import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";
import { withPromotedLabel } from "../RestaurantCard";

const UpdatedResCard = withPromotedLabel(RestaurantCard);

it("Should render Restaurant Component with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
  const nameOfRestaurant = screen.getByText("Pizza Hut");
  expect(nameOfRestaurant).toBeInTheDocument();
});

it("Should render Restaurant Component with Promoted Label", () => {
  render(<UpdatedResCard resData={MOCK_DATA} />);
  const label = screen.getByText("Opened");
  expect(label).toBeInTheDocument();
});
