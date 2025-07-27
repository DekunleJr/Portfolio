import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h2>Hi!</h2>
        <h2>I'm Samuel</h2>
        <p>I'm a Back-End Developer</p>
        <a href="#projects" className="btn">
          View My Projects
        </a>
      </div>
    </section>
  );
};

export default Hero;
