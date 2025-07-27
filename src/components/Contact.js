import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <div className="contact-info">
        <p>
          <i className="fas fa-envelope"></i> Email:
          <a href="mailto:adekunlesa10@gmail.com">adekunlesa10@gmail.com</a>
        </p>
        <p>
          <i className="fas fa-phone"></i> Phone: +2347062743233
        </p>
        <p>
          <i className="fab fa-github"></i> GitHub:
          <a
            href="https://github.com/DekunleJr"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Profile
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
