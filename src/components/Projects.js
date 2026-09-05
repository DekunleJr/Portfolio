import Reveal from './Reveal';
import projects from '../data/projects';
import './Projects.css';

const ProjectLink = ({ link, featured = false }) => {
  const cls =
    link.kind === 'internal' || featured
      ? 'btn btn-primary btn-sm'
      : 'project-link';
  const external = link.kind === 'external';
  return (
    <a
      className={cls}
      href={link.href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {link.label}
      {external && (
        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M7 17 17 7M9 7h8v8" />
        </svg>
      )}
    </a>
  );
};

const Projects = () => {
  const flagship = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <Reveal className="section-head">
          <p className="section-label mono">Projects</p>
          <h2 className="section-title">Work in production.</h2>
          <p className="section-lead">
            Systems I have built and shipped — from a production insurance platform to backend
            services powering live products.
          </p>
        </Reveal>

        {flagship && (
          <Reveal className="project-flagship" delay={80}>
            <div className="project-flagship-meta mono">
              <span className="flagship-tag">Flagship</span>
              <span>{flagship.type}</span>
            </div>
            <div className="project-flagship-body">
              <h3 className="project-flagship-title">{flagship.name}</h3>
              <p className="project-flagship-desc">{flagship.description}</p>
              <p className="project-flagship-built">{flagship.built}</p>
              <div className="project-tech">
                {flagship.tech.map((t) => (
                  <span key={t} className="tech-chip">{t}</span>
                ))}
              </div>
              <div className="project-links">
                {flagship.links.map((l) => (
                  <ProjectLink key={l.href + l.label} link={l} featured />
                ))}
              </div>
            </div>
          </Reveal>
        )}

        <div className="projects-grid">
          {rest.map((project, i) => (
            <Reveal key={project.id} className="project-card card" delay={Math.min(i * 70, 210)}>
              {project.image && (
                <div className="project-brand">
                  <img src={project.image} alt={project.imageAlt} loading="lazy" />
                </div>
              )}
              <p className="project-type mono">{project.type}</p>
              <h3 className="project-name">{project.name}</h3>
              <p className="project-desc">{project.description}</p>
              <p className="project-built">{project.built}</p>
              <div className="project-tech">
                {project.tech.map((t) => (
                  <span key={t} className="tech-chip">{t}</span>
                ))}
              </div>
              <div className="project-links">
                {project.links.map((l) => (
                  <ProjectLink key={l.href + l.label} link={l} />
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
