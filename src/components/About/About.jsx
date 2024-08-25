import React from "react";
import "./About.css";
import theme from "../../assets/theme_pattern.svg";
import about_profile from "../../assets/Aboutprofile.jpg";

const About = () => {
  return (
    <div id="About" className="about">
      <div className="about-title">
        <h1>
          <span>About Me</span>
        </h1>
        <img src={theme} alt="theme" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={about_profile} alt="profile img" />
        </div>
        <div className="about_right">
          <div className="about-para">
            <p>
              Hello! I'm a passionate frontend developer with a strong focus on
              creating visually appealing and user-friendly web interfaces. With
              a solid foundation in HTML, CSS, and JavaScript, I have experience
              building responsive and accessible websites that deliver seamless
              experiences across devices.
            </p>
            <p>
              When I'm not coding, you can find me exploring the latest design
              trends, contributing to open-source projects, or experimenting
              with new frontend libraries.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Javascripts</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>JAVA</p>
              <hr style={{ width: "85%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>FRESHER</h1>
          <p> Enthusiastic & Energized</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>20+</h1>
          <p> PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>CERTIFICATION</p>
        </div>
      </div>
    </div>
  );
};

export default About;
