import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          illo quae deserunt iste totam ex expedita in corporis veniam incidunt
          odit provident soluta, aut eos tempore pariatur sapiente illum
          repudiandae, ipsa culpa, blanditiis hic debitis. Eligendi voluptatem
          at neque odit rem, ullam id quae sint aperiam fuga beatae! Architecto,
          error.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas porro
          harum voluptas sequi nisi nam quos sed quae voluptatum enim esse,
          tempora assumenda officia possimus at debitis, cum non qui.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
