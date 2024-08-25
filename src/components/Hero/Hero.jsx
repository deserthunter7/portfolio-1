import React from "react";
import "./Hero.css";
import Profile_pic from "../../assets/MyPhoto.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={Profile_pic} alt="Profile Picture" />
      <h1>
        <span1>I'm Sahil Roy </span1>,
        <span>Web Developer based in Kolkata,West Bengal</span>
      </h1>
      <p>
        A passionate web developer with expertise in creating responsive,
        user-friendly websites. Proficient in HTML, CSS, JavaScript, and modern
        frameworks. Dedicated to continuous learning and delivering
        high-quality, efficient code. Adept at problem-solving and committed to
        crafting seamless digital experiences that meet client needs and exceed
        expectations.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          {" "}
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect
          </AnchorLink>
        </div>
        <div className="hero-resume">Resume</div>
      </div>
    </div>
  );
};

export default Hero;
