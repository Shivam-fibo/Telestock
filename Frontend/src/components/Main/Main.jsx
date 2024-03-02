import React from "react";
import "./Main.css";
import img1 from "./img1.svg";
import img2 from "./img2.svg";
import img3 from "./img3.svg";
import img4 from "./img4.svg";
const Main = () => {
  return (
    <div>
      <div className="heading">
        <div className="heading1">HOW IT WORKS?</div>
        <div className="para">Step by Step Guide</div>
      </div>
      <div className="info_div">
        <div className="info1">
          <div className="image-container">
            <img src={img1} alt="Description" />
          </div>
          <div className="text-container">
            <h2>Discover Your Perfect Home</h2>
            <p>Use our advanced filters to narrow down your search. Specify everything from location to amenities, ensuring you find the property that feels right.</p>
          </div>
        </div>
      </div>
      <div className="info2">
      <div className="image-container">
            <img src={img2} alt="Description" />
          </div>
          <div className="text-container2">
            <h2>Showcase Your Property</h2>
            <p>List your property with ease. Fill in detailed forms to highlight every feature, attracting the perfect buyer directly.</p>
          </div>
      </div>
      <div className="info3">
      <div className="image-container">
            <img src={img3} alt="Description" />
          </div>
          <div className="text-container">
            <h2>Connect and Communicate</h2>
            <p>Our platform facilitates direct communication between buyer and seller, making negotiations transparent and straightforward.</p>
          </div>
      </div>
      <div className="info4">
      <div className="image-container">
            <img src={img4} alt="Description" />
          </div>
          <div className="text-container2">
            <h2>Seal the Deal Securely</h2>
            <p>Advance payments made safe. Secure your agreement with confidence, and step closer to your dream property.</p>
          </div>
      </div>


      {/* why choose xyz part */}

      <div className="comp_info">
      <div className="comp_heading">
        <h1>WHY CHOOSE XYZ</h1>
      </div>
      <div className="comp_info_colm">
        {/* <div className="box1"> */}
        <div className="box1">
      <span className="vertical-line1"></span>
      <div className="comp_info_all">
          <div className="num">01</div>
          <div className="head">Search and Filters</div>
          <div className="box_para">Tailored Searches to meet your needs. Find what you’re looking for with precision.</div>
        </div>
      </div>
      <div className="box2">
      <span className="vertical-line2"></span>
      <div className="comp_info_all2">
          <div className="num2">02</div>
          <div className="head2">Detailed Listings</div>
          <div className="box_para2">Every Detail Matters. Sellers can list, and buyers can explore properties that meet their exact specifications..</div>
        </div>
      </div>

      <div className="box3">
      <span className="vertical-line3"></span>
      <div className="comp_info_all3">
          <div className="num3">03</div>
          <div className="head3">Direct Messaging</div>
          <div className="box_para3">Seamless Communication. Connect directly with sellers or buyers to ask questions, negotiate, and make decisions.</div>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Main;
