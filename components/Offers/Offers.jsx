import React from "react";
import "./Offers.css";

import popular from "../Assets/popular_model4.png";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Deals for you</h1>
        <p>Get the best offers on our exclusive collections</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={popular} alt="" />
      </div>
    </div>
  );
};

export default Offers;
