import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItems = (item) => {
    //* Dispatch an action here
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item.card.info.id}
          className="m-2 p-2 border-gray-200 border-b-2 text-left flex justify-between "
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-bold text-gray-700">
                {item.card.info.name}
              </span>
              <span className="font-bold text-gray-700">
                {" "}
                - ₹{item.card.info.price / 100}
              </span>
            </div>
            <p className="text-xs text-gray-500">
              {item.card.info.description}
            </p>
          </div>
          <div className="w-3/12 p-2">
            <button
              className="bg-white text-green-600 font-bold px-4 mx-1 border border-gray-300 rounded absolute hover:bg-gray-200"
              onClick={() => handleAddItems(item)}
            >
              ADD
            </button>
            <img src={CDN_URL + item.card.info.imageId} alt="restaurant" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
