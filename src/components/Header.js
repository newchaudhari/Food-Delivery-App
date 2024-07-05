import LOGO from "../../assets/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  ShoppingCartOutlined,
  ContactPageOutlined,
  HomeOutlined,
  AccountCircleOutlined,
} from "@mui/icons-material";

const Header = () => {
  const [btn, setBtn] = useState("Login");
  // const onlineStatus = useOnlineStatus();
  // const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg ">
      <div>
        <Link to="/">
          <img className="w-28 m-2 mx-3" src={LOGO} alt="logo" />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 text-xl justify-center">
          <li className="px-4 mx-4 hover:text-blue-700">
            <Link to="/" className="link">
              <HomeOutlined fontSize="large" />
            </Link>
          </li>

          <li className="px-4 mx-4 hover:text-blue-700">
            <Link to="/contact" className="link">
              <ContactPageOutlined fontSize="large" />
            </Link>
          </li>

          <li className="px-4 mx-4 hover:text-blue-700">
            <Link to="/cart" className="link relative flex">
              <ShoppingCartOutlined fontSize="large" />
              <span className="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                {cartItems.length}
              </span>
            </Link>
          </li>

          <button
            className="rounded-lg mx-4 px-3 bg-green-200 font-bold hover:bg-green-400"
            onClick={() => {
              btn === "Login" ? setBtn("Logout") : setBtn("Login");
            }}
          >
            {btn}
          </button>

          <li className="px-4 mx-4 hover:text-blue-700">
            <Link to={"/about"}>
              <AccountCircleOutlined fontSize="large" />
            </Link>
          </li>

          {/* We can show User name on header
        <li className="px-4 font-bold">{loggedInUser}</li>*/}
        </ul>
      </div>
    </div>
  );
};

export default Header;
