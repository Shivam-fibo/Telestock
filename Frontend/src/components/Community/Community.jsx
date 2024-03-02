import React from "react";
import "./Community.css";
import  img1  from "./img1.png";
const Community = () => {
  return (
    <div>
      <div className="community">
        <div className="heading">
          <h1>
            YOUR TRUSTED PARTNER IN <br />
            THE FUTURE OF HOUSING
          </h1>
          <div className="inf0">
            Our partnerships with governments and local banks ensure that our
            housing prices are <br /> affordable enough for our target market.
          </div>
          <div className="btn">
            <button>Join Our Community Today &rarr;</button>
          </div>
        </div>
        <img className="img1" src={img1} alt="" />
      </div>
    </div>
  );
};

export default Community;
