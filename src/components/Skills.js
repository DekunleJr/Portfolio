import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>
      <div className="skill-category">
        <h3>Languages:</h3>
        <div className="skill-items-container">
          <div className="skill-item">
            <span>JavaScript(Node.js)</span>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: "98%", backgroundColor: "#F7DF1E" }}
              >
                98%
              </div>
            </div>
          </div>
          <div className="skill-item">
            <span>Python(Fastapi)</span>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: "80%", backgroundColor: "#3776AB" }}
              >
                50%
              </div>
            </div>
          </div>
          <div className="skill-item">
            <span>Java</span>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: "30%", backgroundColor: "#007396" }}
              >
                30%
              </div>
            </div>
          </div>
          <div className="skill-item">
            <span>TypeScript</span>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: "80%", backgroundColor: "#007ACC" }}
              >
                80%
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="skill-category">
        <h3>Databases:</h3>
        <div className="skill-items-container">
          <div className="skill-item">
            <span>MongoDB</span>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: "90%", backgroundColor: "#47A248" }}
              >
                90%
              </div>
            </div>
          </div>
          <div className="skill-item">
            <span>MySQL</span>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: "90%", backgroundColor: "#4479A1" }}
              >
                90%
              </div>
            </div>
          </div>
          <div className="skill-item">
            <span>PostgreSQL</span>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: "80%", backgroundColor: "#336791" }}
              >
                80%
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="skill-category">
        <h3>Cloud Platforms:</h3>
        <div className="skill-items-container">
          <div className="skill-item">
            <span>AWS</span>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: "60%", backgroundColor: "#FF9900" }}
              >
                60%
              </div>
            </div>
          </div>
          <div className="skill-item">
            <span>Render</span>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: "90%", backgroundColor: "#4945FF" }}
              >
                90%
              </div>
            </div>
          </div>
          <div className="skill-item">
            <span>Heroku</span>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: "80%", backgroundColor: "#430098" }}
              >
                80%
              </div>
            </div>
          </div>
          <div className="skill-item">
            <span>Azure</span>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: "50%", backgroundColor: "#0078D4" }}
              >
                50%
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="skill-category">
        <h3>Tools & Technologies:</h3>
        <div className="skill-items-container">
          <div className="skill-item">
            <span>RESTful APIs</span>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: "95%", backgroundColor: "#FF6F00" }}
              >
                95%
              </div>
            </div>
          </div>
          <div className="skill-item">
            <span>Git</span>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: "98%", backgroundColor: "#F1502F" }}
              >
                98%
              </div>
            </div>
          </div>
          <div className="skill-item">
            <span>Express.js</span>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: "95%", backgroundColor: "#68A063" }}
              >
                95%
              </div>
            </div>
          </div>
          <div className="skill-item">
            <span>React</span>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: "90%", backgroundColor: "#61DAFB" }}
              >
                90%
              </div>
            </div>
          </div>
          <div className="skill-item">
            <span>Mongoose</span>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: "95%", backgroundColor: "#880000" }}
              >
                95%
              </div>
            </div>
          </div>
          <div className="skill-item">
            <span>Sequelize</span>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: "95%", backgroundColor: "#52B0E7" }}
              >
                95%
              </div>
            </div>
          </div>
          <div className="skill-item">
            <span>Fastapi</span>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: "95%", backgroundColor: "#009688" }}
              >
                95%
              </div>
            </div>
          </div>
          <div className="skill-item">
            <span>Sqlalchemy</span>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: "90%", backgroundColor: "#2B5D82" }}
              >
                90%
              </div>
            </div>
          </div>
          <div className="skill-item">
            <span>Alembic</span>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: "95%", backgroundColor: "#2E8B57" }}
              >
                95%
              </div>
            </div>
          </div>
          <div className="skill-item">
            <span>Nginx</span>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: "70%", backgroundColor: "#269539" }}
              >
                70%
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="skill-category">
        <h3>Other Skills:</h3>
        <div className="skill-items-container">
          <div className="skill-item">
            <span>Problem-solving</span>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: "100%", backgroundColor: "#6C757D" }}
              >
                100%
              </div>
            </div>
          </div>
          <div className="skill-item">
            <span>Collaboration</span>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: "100%", backgroundColor: "#6C757D" }}
              >
                100%
              </div>
            </div>
          </div>
          <div className="skill-item">
            <span>Independent work</span>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: "100%", backgroundColor: "#6C757D" }}
              >
                100%
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
