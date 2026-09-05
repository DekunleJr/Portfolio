import { useState } from 'react';
import Reveal from './Reveal';
import experiences from '../data/experience';
import './Experience.css';

const ExperienceItem = ({ job, defaultOpen = false, featured = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = `exp-${job.id}`;

  return (
    <article className={`exp-item${featured ? ' featured' : ''}${open ? ' open' : ''}`}>
      <button
        type="button"
        className="exp-header"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className="exp-heading">
          <div className="exp-titles">
            <h3 className="exp-role">
              {job.role}
              {job.current && <span className="exp-badge mono">Current</span>}
            </h3>
            <p className="exp-company">{job.company}</p>
            <p className="exp-period mono">{job.period}</p>
          </div>
          <span className="exp-chevron" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </span>
        </div>
        <p className="exp-summary">{job.summary}</p>
      </button>

      <div id={panelId} className="exp-body" hidden={!open}>
        <ul className="exp-points">
          {job.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        {job.stack.length > 0 && (
          <div className="exp-stack">
            {job.stack.map((tech) => (
              <span key={tech} className="tech-chip">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

const Experience = () => (
  <section id="experience" className="experience section">
    <div className="container">
      <Reveal className="section-head">
        <p className="section-label mono">Experience</p>
        <h2 className="section-title">Professional experience.</h2>
        <p className="section-lead">
          Five years across backend and full-stack roles — from intensive training through to
          running a production telematics insurance platform.
        </p>
      </Reveal>

      <div className="exp-timeline">
        {experiences.map((job, i) => (
          <Reveal key={job.id} className="exp-reveal" delay={Math.min(i * 60, 180)}>
            <ExperienceItem job={job} featured={job.featured} defaultOpen={job.featured} />
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
