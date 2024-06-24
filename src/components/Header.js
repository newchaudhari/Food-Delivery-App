import LOGO from "../../assets/logo.png";
import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btn, setBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg ">
      <div>
        <Link to="/">
          <img className="w-28 m-2 mx-3" src={LOGO} alt="logo" />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 text-xl ">
          <li className="px-4">Online Status : {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4 hover:text-red-600">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className="px-4 hover:text-red-600">
            <Link to="/about" className="link">
              About
            </Link>
          </li>
          <li className="px-4 hover:text-red-600">
            <Link to="/contact" className="link">
              Contact Us
            </Link>
          </li>
          <li className="px-4 hover:text-red-600">
            <Link to="/grocery" className="link">
              Grocery
            </Link>
          </li>
          <li className="px-4 hover:text-red-600 font-bold text-xl">
            <Link to="/cart" className="link">
              Cart ({cartItems.length} items)
            </Link>
          </li>
          <button
            className="login-btn"
            onClick={() => {
              btn === "Login" ? setBtn("Logout") : setBtn("Login");
            }}
          >
            {btn}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
