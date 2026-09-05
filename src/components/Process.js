import Reveal from './Reveal';
import './Process.css';

const STEPS = [
  { label: 'Requirements', note: 'Understand the business problem first' },
  { label: 'Architecture', note: 'Design the system before writing code' },
  { label: 'API & Data Design', note: 'Contracts and models that last' },
  { label: 'Implementation', note: 'Clean, service-layered code' },
  { label: 'Testing', note: 'Verify behavior before it ships' },
  { label: 'Deployment', note: 'Containerized, automated releases' },
  { label: 'Monitoring', note: 'Know what is happening in production' },
  { label: 'Iteration', note: 'Improve continuously and safely' },
];

const PRINCIPLES = [
  'Separation of concerns',
  'Service-layer architecture',
  'Database design',
  'External integrations',
  'Background processing',
  'Authentication & authorization',
  'Maintainability',
  'Scalability',
  'Reliability',
];

const Process = () => (
  <section id="process" className="process section">
    <div className="container">
      <Reveal className="section-head">
        <p className="section-label mono">Engineering maturity</p>
        <h2 className="section-title">How I build systems.</h2>
        <p className="section-lead">
          Software is more than syntax. Every system I work on follows the same disciplined
          path — from understanding the problem to keeping it healthy in production.
        </p>
      </Reveal>

      <Reveal className="process-steps" delay={80}>
        {STEPS.map((step, i) => (
          <div key={step.label} className="process-step">
            <span className="process-index mono">{String(i + 1).padStart(2, '0')}</span>
            <p className="process-label">{step.label}</p>
            <p className="process-note">{step.note}</p>
            {i < STEPS.length - 1 && <span className="process-connector" aria-hidden="true" />}
          </div>
        ))}
      </Reveal>

      <Reveal className="process-principles" delay={140}>
        <p className="process-principles-label mono">What I optimize for</p>
        <div className="process-principles-chips">
          {PRINCIPLES.map((p) => (
            <span key={p} className="tech-chip">{p}</span>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

export default Process;
