import React from "react";
import Homepage from "./Homepage";
import CategoryShop from "./CategoryShop";
import BrowseByDress from "./BrowseByDress";
import ReviewCustomer from "./ReviewCustomer";
import Subscribe from "./Subscribe";

const Home = ({ screenOpacity }) => {
  return (
    <div className={`${screenOpacity ? "opacity-30" : null}`}>
      <Homepage />
      <CategoryShop />
      <BrowseByDress />
      <ReviewCustomer />
      <Subscribe />
    </div>
  );
};

export default Home;
