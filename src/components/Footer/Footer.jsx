import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import user_icon from "../../assets/user_icon.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt="Logo" />
          <p>
            This portfolio website is designed by Sahil Roy & I confirmed all
            the details are verified.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-home-button">
            <AnchorLink className="anchor-link" href="#home">
              Home
            </AnchorLink>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          {" "}
          This portfolio website is designed by Sahil Roy & I confirmed all the
          details are verified. <span class="copyright">@S.Roy</span>
        </p>
        <div className="footer-bootom-right">
          <p>Terms of Services</p>
          <p>Privacy Policies</p>
          <p>Connect With me</p>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Footer;
