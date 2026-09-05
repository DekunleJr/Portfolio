import Reveal from './Reveal';
import profile from '../data/profile';
import './About.css';

const About = () => (
  <section id="about" className="about section">
    <div className="container">
      <Reveal className="section-head">
        <p className="section-label mono">About</p>
        <h2 className="section-title">From mechanical engineering to production software.</h2>
      </Reveal>

      <div className="about-grid">
        <Reveal className="about-text" delay={80}>
          <p>
            I studied Mechanical Engineering at the Federal University of Technology, Akure,
            and moved into software engineering in 2021 through ALX Africa. Since then I have
            worked across backend and full-stack roles — building APIs, data systems,
            integrations, payments and real-time features for products in production.
          </p>
          <p>
            Today I&apos;m a Full-Stack Engineer at Trulaju, a telematics-based,
            pay-per-kilometer vehicle insurance platform. I work on a substantial production
            backend: GPS telemetry pipelines, mileage accounting, policy and claims workflows,
            payment integrations, background processing and cloud deployment.
          </p>
          <p>
            My background gives me a practical, problem-first approach: understand the
            business, design the system, build it, deploy it — and keep it running.
          </p>
        </Reveal>

        <Reveal className="about-card card" delay={180}>
          <div className="about-id">
            <img className="about-photo" src={profile.photo} alt={`Portrait of ${profile.name}`} />
            <div>
              <h3 className="about-name">{profile.name}</h3>
              <p className="about-role mono">{profile.role}</p>
              <p className="about-location">{profile.location}</p>
            </div>
          </div>

          <dl className="about-facts">
            <div className="about-fact">
              <dt>Education</dt>
              <dd>
                {profile.education.degree}, {profile.education.institution} ({profile.education.year})
              </dd>
            </div>
            <div className="about-fact">
              <dt>Certifications</dt>
              <dd>
                <ul className="about-certs">
                  {profile.certifications.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </div>
  </section>
);

export default About;
