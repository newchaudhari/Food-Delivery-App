import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.6297811&lng=73.7997094&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await data.json();
    console.log(jsonData);
    setRestaurantList(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

    setFilteredRestaurant(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  const { loggedInUser, setUserName } = useContext(UserContext);

  if (onlineStatus === false) {
    return <h1>Looks like you are offline!! Please check your connection</h1>;
  }

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="m-1">
      <div className="filter flex justify-center">
        <div className="p-4 m-4">
          <input
            className="px-2 py-1 border border-solid border-black"
            type="text"
            placeholder="Search...."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-1 bg-green-200 m-4 rounded-sm hover:bg-green-400 font-semibold"
            onClick={() => {
              const filteredList = restaurantList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <div className="p-4 m-4 flex items-center">
          <button
            className="filter-btn px-4 py-1 bg-gray-200 m-4 rounded-sm hover:bg-gray-400"
            onClick={() => {
              const topRatedList = restaurantList.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRestaurant(topRatedList);
            }}
          >
            Top Rated
          </button>

          {/* <div>
            <label>Username : </label>
            <input
              type="text"
              className="border border-solid border-black px-2 py-1"
              value={loggedInUser}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </div> */}

        </div>
      </div>
      <div className="flex flex-wrap px-8 py-3  m-2">
        {filteredRestaurant.map((restaurant) => (
          <Link
            className="link"
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {restaurant.info.isOpen ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
