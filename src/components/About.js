import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="about-text">
          <h3>About Me</h3>
          <h2>Who Am I?</h2>
          <p>
            I am a passionate back-end developer with a knack for transforming
            complex problems into elegant, efficient, and scalable solutions.
            With over three years of hands-on experience, I specialize in
            Node.js and have a deep understanding of database technologies like
            MongoDB, MySQL, and PostgreSQL.
          </p>
          <p>
            {" "}
            My journey from Mechanical Engineering to software development has
            equipped me with a unique problem-solving perspective and a
            relentless drive for precision and quality. I thrive on building
            robust server-side applications and RESTful APIs that power seamless
            user experiences. I am not just a coder; I am a craftsman dedicated
            to building reliable and high-performance software that makes a
            difference.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
