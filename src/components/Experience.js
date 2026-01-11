import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h2>Professional Experience</h2>
      <div className="experience-item">
        <h3>Back-End Developer</h3>
        <p className="company">Cabvibe Services Limited – Abuja, Nigeria</p>
        <p className="date">June 2025 – Present</p>
        <ul>
          <li>
            Designed and maintained server-side applications, ensuring high
            performance and scalability for web and mobile applications.
          </li>
          <li>
            Worked closely with front-end teams to ensure seamless integration
            of user-facing elements with the back-end logic.
          </li>
          <li>
            Optimized database operations and implemented caching techniques to
            reduce load and improve speed, achieving up to 30% faster response
            times.
          </li>
          <li>
            Developed and maintained RESTful APIs, enhancing data flow between
            applications and third-party services.
          </li>
          <li>
            Delivered well structured API documentation using tools like postman
            and Swagger, to support seamless integration for frontend teams and
            third-party developers.
          </li>
        </ul>
      </div>
      <div className="experience-item">
        <h3>Full-Stack Developer</h3>
        <p className="company">Iammcoding Services Limited – Abuja, Nigeria</p>
        <p className="date">Jan 2025 – May 2025</p>
        <ul>
          <li>
            Built and maintained full-stack web applications using React for the frontend and Node.js,
            Express, and TypeScript for the backend.
          </li>
          <li>
            Developed intuitive and responsive user interfaces in React,
            implementing reusable components and efficient state management (Context API/Redux).
          </li>
          <li>
            Engineered high-performance server-side logic and
            RESTful APIs with secure JWT/OAuth2 authentication, error handling, and API versioning.
          </li>
          <li>
            Optimized system performance using PostgreSQL
            & MongoDB through indexing, query optimization and Redis caching.
          </li>
          <li>
            Ensured seamless integration between frontend and backend using Swagger,
            Postman, and GitHub collaboration workflows.
          </li>
          <li>
            Implemented CI/CD pipelines via GitHub Actions and Docker Compose,
            enabling automated testing, builds and deployments.
          </li>
        </ul>
      </div>
      <div className="experience-item">
        <h3>Full-Stack Developer</h3>
        <p className="company">Locai – Abuja, Nigeria</p>
        <p className="date">Sept 2024 – March 2025</p>
        <ul>
          <li>
            Developed and consumed RESTful APIs, ensuring smooth frontend–backend
            integration using Swagger, Postman, and GitHub
          </li>
          <li>
            Built responsive, reusable, and dynamic UI components in React,
            integrating state management (Context API/Redux) and optimized rendering for performance.
          </li>
          <li>
            Designed, developed, and maintained full-stack applications
            using React (frontend) and Node.js, Express, TypeScript (backend).
          </li>
          <li>
            Integrated CI/CD pipelines using GitHub Actions and
            Docker Compose, automating builds, tests, and deployments.
          </li>
          <li>
            Optimized application performance with PostgreSQL
            & MongoDB queries, indexing, and Redis caching for speed and scalability.
          </li>
          <li>
            Collaborated cross-functionally with designers and product
            teams to deliver intuitive user experiences and high-quality features.
          </li>
        </ul>
      </div>
      <div className="experience-item">
        <h3>Back-End Developer</h3>
        <p className="company">MultiChoice Nigeria – Abuja, Nigeria</p>
        <p className="date">November 2022 – September 2024</p>
        <ul>
          <li>
            Designed and maintained server-side applications, ensuring high
            performance and scalability for web and mobile applications.
          </li>
          <li>
            Worked closely with front-end teams to ensure seamless integration
            of user-facing elements with the back-end logic.
          </li>
          <li>
            Optimized database operations and implemented caching techniques to
            reduce load and improve speed, achieving up to 30% faster response
            times.
          </li>
          <li>
            Developed and maintained RESTful APIs, enhancing data flow between
            applications and third-party services.
          </li>
          <li>
            Leveraged cloud infrastructure (AWS) for storage, load balancing,
            and computing power, contributing to a 40% reduction in
            infrastructure costs.
          </li>
        </ul>
      </div>
      <div className="experience-item">
        <h3>Software Engineer</h3>
        <p className="company">ALX Africa – Remote</p>
        <p className="date">June 2021 – August 2022</p>
        <ul>
          <li>
            Contributed to back-end development projects using Python and
            Node.js, focusing on reliability and high performance in remote
            environments.
          </li>
          <li>
            Managed MySQL and MongoDB databases, optimizing data queries and
            improving access times by implementing indexing and data
            structuring.
          </li>
          <li>
            Collaborated with cross-functional teams to design and implement
            features in line with agile methodology and project goals.
          </li>
          <li>
            Enhanced system security and data protection measures, reducing
            potential vulnerabilities in the application.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
