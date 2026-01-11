import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h3>What I do?</h3>
      <h2>Here are some of the projects I've worked on:</h2>
      <div className="projects-grid">
        <a
          href="https://mioshio.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-item"
        >
          <img src="/mioshio.svg" alt="Mioshio Project" />
          <h3>Backend Development (mioshio)</h3>
          <p>
            Designed and implemented a scalable backend for a dynamic web
            application using Node.js and Express.js, featuring robust API
            development and MySQL integration.
          </p>
        </a>
        <a
          href="https://www.citedu.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-item"
        >
          <img src="/cit.jpg" alt="CIT Project" />
          <h3>Custom Web Application Backend Development (CIT)</h3>
          <p>
            Designed and implemented a scalable backend for a dynamic web
            application using Node.js and Express.js, featuring robust API
            development and MongoDB integration.
          </p>
        </a>
        <a
          href="https://tradereturn.online/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-item"
        >
          <img src="/tradereturn_favicon.png" alt="Trade Return Project" />
          <h3>Custom Web Application Backend Development (Trade Return)</h3>
          <p>
            Developed and tested a highly efficient and scalable REST API using
            Express.js and Node.js, ensuring robust error handling and external
            API integration with MySQL.
          </p>
        </a>
        <a
          href="https://github.com/DekunleJr/Mini-Ecommerce"
          target="_blank"
          rel="noopener noreferrer"
          className="project-item"
        >
          <img src="/mini.png" alt="Mini E-Commerce Website" />
          <h3>Mini E-Commerce Website</h3>
          <p>
            Designed and implemented a REST API backend for an e-commerce
            platform using Node.js and Express.js, with secure data storage in
            PostgreSQL and comprehensive user authentication.
          </p>
        </a>
      </div>
    </section>
  );
};

export default Projects;
