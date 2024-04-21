import React from "react";
import ReactDOM from "react-dom/client";

/*
* Header
  - Logo
  - Nav Items
* Body
  - Search
  - RestaurantContainer
  - RestaurantCard
* Footer
  - copyright
  - Address
  - Links
  - Contacts
*/

const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="card">
      <img
        src="https://www.shutterstock.com/image-photo/dum-handi-chicken-biryani-prepared-600nw-2000023562.jpg"
        alt=""
      />
      <h3>Shree Caters</h3>
      <h4>Biryani, North Indian, Asian</h4>
      <h4>4.5 star</h4>
      <h4>20 minutes</h4>
    </div>
  );
};

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
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <h1>Not Rendered</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
