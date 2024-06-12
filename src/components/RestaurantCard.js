import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="m-2 p-3 w-[200px] h-[350px] border-gray-50 rounded-lg shadow-lg bg-gray-100 hover:bg-gray-300 overflow-hidden break-words">
      <img
        className="w-full h-[150px] rounded-sm"
        src={CDN_URL + cloudinaryImageId}
        alt="Restaurant"
      />
      <h3 className="font-bold my-2 text-lg ">{name}</h3>
      <h4>{cuisines.slice(0,2).join(", ")}</h4>
      <h4>{avgRating} ⭐ {sla.slaString}</h4>
      <h4>{costForTwo}</h4>
      <h4></h4>
      <h4>User : {loggedInUser}</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-gray-700 text-white py-1 px-2 rounded-lg">
          Opened
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
