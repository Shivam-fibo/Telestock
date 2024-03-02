import React, { useState } from "react";
import axios from "axios";
import "./Footer.css";
import { FaYoutube } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = async () => {
    try {
      // Make API call to backend
      await axios.post("http://localhost:3000/subscribe", { email });

      // Optionally, you can handle success here (e.g., show a success message)
      console.log("Subscription successful");
    } catch (error) {
      // Handle error (e.g., show an error message)
      console.error("Subscription failed", error);
    }
  };
  return (
    <div>
      <div className="footer">
        <div className="upper">
          <div className="part">
            <div className="part1">
              <div className="heading_footer">XYZ INDUSTRIES</div>
              <div className="para_footer">
                XYZ Industries: Where real estate dreams meet seamless
                transactions, transforming aspirations into achievements.
              </div>

              <div className="btn1">
                <button>Explore</button>
              </div>
            </div>
            <div className="part2">
              <ul className="footer_ul">
                <li>About US</li>
                <li>Blog</li>
                <li>Testimonials</li>
                <li>Terma and Conditon</li>
                <li>Privacy Policy</li>
                <li>Site Map</li>
              </ul>
            </div>
            <div className="part3">
              <ul className="footer_ul">
                <li>Customer Support</li>
                <li>FeedBack</li>
                <li>Report a Problem</li>
                <li>Request a Call Back</li>
              </ul>
            </div>
            <div className="part4">
              <div>Subscribe Us</div>
              <div>Subscribe to our weekly newsletter</div>
             
              <div className="btn2">
                <div>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button className="btn_sub" onClick={handleSubscribe}>Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="lower">
          <div className="icons">
            <FaYoutube />
            <FaTwitter />
            <IoLogoInstagram />
            <FaFacebook />
          </div>
          <div className="lower_info">terms | policy &#169; 2024 XYZ</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
