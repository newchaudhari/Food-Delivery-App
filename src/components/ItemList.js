import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="m-2 p-2 border-gray-200 border-b-2 text-left flex justify-between "
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span> - ₹{item.card.info.price / 100}</span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-2">
            <button className="bg-white text-green-600 font-bold px-4 mx-1 border border-gray-300 rounded absolute hover:bg-gray-200">
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
