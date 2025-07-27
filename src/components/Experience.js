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
