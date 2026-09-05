import Reveal from './Reveal';
import './Capabilities.css';

const Icon = ({ paths }) => (
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
    {paths}
  </svg>
);

const CAPABILITIES = [
  {
    title: 'Backend Systems',
    desc: 'Designing APIs, services, business logic and data layers.',
    icon: <Icon paths={<><rect x="3.5" y="4" width="17" height="6.5" rx="1.8" /><rect x="3.5" y="13.5" width="17" height="6.5" rx="1.8" /><path d="M7 7.2h.01M7 16.7h.01" /></>} />,
  },
  {
    title: 'Real-Time Systems',
    desc: 'Telemetry, event processing, MQTT-style data flows and live state management.',
    icon: <Icon paths={<path d="M2.5 12a9.5 9.5 0 0 1 19 0M6 12a6 6 0 0 1 12 0M9.5 12a2.5 2.5 0 0 1 5 0M12 15.5v.01" />} />,
  },
  {
    title: 'Payment Systems',
    desc: 'Payment gateway integrations, wallet systems and transaction workflows.',
    icon: <Icon paths={<><rect x="2.5" y="5.5" width="19" height="13" rx="2" /><path d="M2.5 10h19M6 15h4" /></>} />,
  },
  {
    title: 'Data Systems',
    desc: 'Relational and NoSQL databases, data modeling and persistence strategies.',
    icon: <Icon paths={<><ellipse cx="12" cy="5.5" rx="7.5" ry="2.8" /><path d="M4.5 5.5v13c0 1.55 3.35 2.8 7.5 2.8s7.5-1.25 7.5-2.8v-13" /><path d="M4.5 12c0 1.55 3.35 2.8 7.5 2.8s7.5-1.25 7.5-2.8" /></>} />,
  },
  {
    title: 'Integrations',
    desc: 'Connecting applications with third-party APIs and external platforms.',
    icon: <Icon paths={<><path d="M9.5 13.5a4.2 4.2 0 0 0 6.3.45l2.5-2.5a4.2 4.2 0 0 0-5.94-5.94l-1.4 1.4" /><path d="M14.5 10.5a4.2 4.2 0 0 0-6.3-.45l-2.5 2.5a4.2 4.2 0 0 0 5.94 5.94l1.4-1.4" /></>} />,
  },
  {
    title: 'Cloud & Deployment',
    desc: 'Containerized applications, CI/CD, cloud deployment and production environments.',
    icon: <Icon paths={<path d="M7 18.5a4.5 4.5 0 0 1-.4-8.98A6 6 0 0 1 18.3 11a3.75 3.75 0 0 1-.8 7.5H7Z" />} />,
  },
  {
    title: 'Security',
    desc: 'JWT authentication, RBAC, permissions, secure password storage and audit logging.',
    icon: <Icon paths={<><path d="M12 3 5 6v5c0 4.4 3 8.4 7 9.6 4-1.2 7-5.2 7-9.6V6l-7-3Z" /><path d="m9 11.5 2.2 2.2L15.5 9.4" /></>} />,
  },
  {
    title: 'Product Engineering',
    desc: 'Turning business requirements into complete working products.',
    icon: <Icon paths={<><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" /><path d="M12 12 4 7.5M12 12l8-4.5M12 12v9" /></>} />,
  },
];

const Capabilities = () => (
  <section id="engineering" className="capabilities section">
    <div className="container">
      <Reveal className="section-head center">
        <p className="section-label mono">Capabilities</p>
        <h2 className="section-title">What I can build for you.</h2>
        <p className="section-lead">
          The engineering areas I work in — from API design to production deployment.
        </p>
      </Reveal>

      <div className="capabilities-grid">
        {CAPABILITIES.map((cap, i) => (
          <Reveal key={cap.title} className="capability card" delay={Math.min(i * 60, 240)}>
            <span className="capability-icon">{cap.icon}</span>
            <h3 className="capability-title">{cap.title}</h3>
            <p className="capability-desc">{cap.desc}</p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Capabilities;
