import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  return (
    <div className="m-2 p-3 w-[250px] h-[450px] border-gray-50 rounded-lg shadow-lg bg-gray-100 hover:bg-gray-300">
      <img
        className="w-full h-[200px] rounded-sm"
        src={CDN_URL + cloudinaryImageId}
        alt=""
      />
      <h3 className="font-bold my-2 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
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
