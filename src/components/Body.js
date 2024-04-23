import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input
          type="text"
          placeholder="Search for restaurant, cuisine or a dish"
        />
      </div>
      <div className="rest-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
