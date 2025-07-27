import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <section id="education" className="education">
      <h2>Education & Certifications</h2>
      <div className="education-item">
        <h3>Bachelor of Engineering in Mechanical Engineering</h3>
        <p className="institution">Federal University of Technology, Akure</p>
        <p className="location">Ondo State, Nigeria</p>
        <p className="date">Graduated: 2018</p>
      </div>
      <div className="certifications">
        <h3>Certifications</h3>
        <ul>
          <li>ALX Software Engineering</li>
          <li>Python for Everyone (Coursera)</li>
          <li>Node.js (Udemy)</li>
        </ul>
      </div>
    </section>
  );
};

export default Education;
