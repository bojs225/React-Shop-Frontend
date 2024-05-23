import React from "react";
import "./Hero.css";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";
import hero_img from "../Assets/hero_img2.png";
import hero_icon from "../Assets/hero_icon.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>Spring Summer 2024</h2>

        <div>
          <div className="hero-icon">
            <p>Brand New</p>
          </div>
          <p>Spring season</p>
          <p>Collection</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_img} alt="" />
      </div>
    </div>
  );
};

export default Hero;
