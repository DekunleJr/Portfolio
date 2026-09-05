import { Fragment } from 'react';
import Reveal from './Reveal';
import './Hero.css';

const ICON_PATHS = {
  user: (
    <>
      <circle cx="12" cy="7.5" r="3.5" />
      <path d="M5 20a7 7 0 0 1 14 0" />
    </>
  ),
  app: (
    <>
      <rect x="3.5" y="4" width="17" height="16" rx="2" />
      <path d="M3.5 9h17" />
      <path d="M6.5 6.6h.01M9 6.6h.01" />
    </>
  ),
  api: (
    <>
      <rect x="3.5" y="4" width="17" height="6.5" rx="1.8" />
      <rect x="3.5" y="13.5" width="17" height="6.5" rx="1.8" />
      <path d="M7 7.2h.01M7 16.7h.01" />
    </>
  ),
  data: (
    <>
      <ellipse cx="12" cy="5.5" rx="7.5" ry="2.8" />
      <path d="M4.5 5.5v6.5c0 1.55 3.35 2.8 7.5 2.8s7.5-1.25 7.5-2.8V5.5" />
      <path d="M4.5 12v6.5c0 1.55 3.35 2.8 7.5 2.8s7.5-1.25 7.5-2.8V12" />
    </>
  ),
  plug: (
    <>
      <path d="M9.5 13.5a4.2 4.2 0 0 0 6.3.45l2.5-2.5a4.2 4.2 0 0 0-5.94-5.94l-1.4 1.4" />
      <path d="M14.5 10.5a4.2 4.2 0 0 0-6.3-.45l-2.5 2.5a4.2 4.2 0 0 0 5.94 5.94l1.4-1.4" />
    </>
  ),
};

const FLOW = [
  { key: 'user', label: 'User', note: 'Web · mobile', icon: 'user' },
  { key: 'app', label: 'Application', note: 'React · Next.js', icon: 'app' },
  { key: 'api', label: 'Backend', note: 'APIs · services', icon: 'api' },
  { key: 'data', label: 'Data', note: 'PostgreSQL · Redis', icon: 'data' },
  { key: 'int', label: 'Integrations', note: 'Payments · telemetry', icon: 'plug' },
];

const FlowIcon = ({ name }) => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {ICON_PATHS[name]}
  </svg>
);

const Hero = () => (
  <section id="home" className="hero">
    <div className="hero-glow" aria-hidden="true" />
    <div className="container hero-inner">
      <Reveal className="hero-copy">
        <p className="hero-eyebrow mono">Software Engineer · Backend &amp; Full-Stack</p>
        <h1 className="hero-title">Samuel Adekunle Oyebamiji</h1>
        <p className="hero-tagline">
          I build production-ready web systems — APIs, services, data and the interfaces
          that use them.
        </p>
        <p className="hero-support">
          Backend and full-stack engineering across payment systems, real-time telemetry,
          databases and cloud infrastructure.
        </p>
        <div className="hero-ctas">
          <a className="btn btn-primary" href="#projects">
            View My Work
          </a>
          <a className="btn btn-ghost" href="#contact">
            Let&apos;s Work Together
          </a>
        </div>
      </Reveal>

      <Reveal className="hero-visual" delay={150}>
        <p className="hero-visual-label mono">What I build</p>
        <div
          className="system-flow"
          role="img"
          aria-label="System flow: user, application, backend, data, integrations"
        >
          {FLOW.map((node, i) => (
            <Fragment key={node.key}>
              <div className="flow-node">
                <span className="flow-node-icon">
                  <FlowIcon name={node.icon} />
                </span>
                <span className="flow-node-text">
                  <span className="flow-node-label">{node.label}</span>
                  <span className="flow-node-note mono">{node.note}</span>
                </span>
              </div>
              {i < FLOW.length - 1 && (
                <div className="flow-connector" aria-hidden="true">
                  <span className="flow-pulse" />
                </div>
              )}
            </Fragment>
          ))}
        </div>
        <p className="hero-visual-caption">
          End-to-end systems: from the interface down to the database and the third-party
          services behind it.
        </p>
      </Reveal>
    </div>
  </section>
);

export default Hero;
