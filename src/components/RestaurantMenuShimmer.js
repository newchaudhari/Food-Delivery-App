const RestaurantMenuShimmer = () => {
  return (
    <div className="animate-pulse m-10">
      <div className="w-6/12 bg-gray-200 p-7 mx-auto my-2 border-b-2 shadow-lg "></div>
    </div>
  );
};

export const withPromotedResShimmerList = (RestaurantMenuShimmer) => {
  return () => {
    return (
      <div>
        <div className="mx-auto">
          <div className="w-2/12 bg-gray-200 p-4 mx-auto my-5"></div>
          <div className="w-3/12 bg-gray-200 p-3 mx-auto "></div>
        </div>
        <RestaurantMenuShimmer />
        <RestaurantMenuShimmer />
        <RestaurantMenuShimmer />
        <RestaurantMenuShimmer />
   
      </div>
    );
  };
};

export default RestaurantMenuShimmer;
