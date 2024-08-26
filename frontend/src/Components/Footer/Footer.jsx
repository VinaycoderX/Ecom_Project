import React from "react";
import { TiLocationArrowOutline } from "react-icons/ti";
import payments from "../../assets/payments.png";
import "./Footer.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
            eligendi. Dolores animi quasi rem vero nesciunt eum laborum quaerat
            est?
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <TiLocationArrowOutline />
            <div className="text">Bareilly, Uttar Pradesh</div>
          </div>
          <div className="c-item">
            <TiLocationArrowOutline />
            <div className="text">Phone : 0010</div>
          </div>
          <div className="c-item">
            <TiLocationArrowOutline />
            <div className="text">Email : @test.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <span className="text">Headphone</span>
          <span className="text">Headphone</span>
          <span className="text">Headphone</span>
        </div>

        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Policy</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </div>
          <img src={payments} />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
