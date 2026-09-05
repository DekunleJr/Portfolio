import { Fragment } from 'react';
import Reveal from './Reveal';
import useInView from '../hooks/useInView';
import useCountUp from '../hooks/useCountUp';
import useReducedMotion from '../hooks/useReducedMotion';
import trulaju from '../data/trulaju';
import './Trulaju.css';

const ShieldIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 3 5 6v5c0 4.4 3 8.4 7 9.6 4-1.2 7-5.2 7-9.6V6l-7-3Z" />
    <path d="m9 11.5 2.2 2.2L15.5 9.4" />
  </svg>
);

const Metric = ({ metric }) => {
  const [ref, inView] = useInView({ threshold: 0.35 });
  const reduced = useReducedMotion();
  const count = useCountUp(metric.value, { start: inView, duration: reduced ? 0 : 1500 });

  return (
    <div ref={ref} className="metric">
      <p className="metric-value mono">
        {metric.prefix}
        {count.toLocaleString()}
        {metric.suffix}
      </p>
      <p className="metric-label">{metric.label}</p>
      <p className="metric-note">{metric.note}</p>
    </div>
  );
};

const stepsOf = (steps) => steps.map((s) => (typeof s === 'string' ? { label: s } : s));

const FlowList = ({ steps }) => (
  <ol className="flow-list">
    {stepsOf(steps).map((step, i) => (
      <li key={step.label} className="flow-step">
        <span className="flow-step-index mono">{String(i + 1).padStart(2, '0')}</span>
        <div>
          <p className="flow-step-label">{step.label}</p>
          {step.note && <p className="flow-step-note">{step.note}</p>}
        </div>
      </li>
    ))}
  </ol>
);

const ArchArrow = () => (
  <div className="arch-arrow" aria-hidden="true">
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 4v14m0 0-5-5m5 5 5-5" />
    </svg>
  </div>
);

const ArchRow = ({ label, children }) => (
  <div className="arch-row">
    <p className="arch-row-label mono">{label}</p>
    <div className="arch-row-body">{children}</div>
  </div>
);

const Trulaju = () => (
  <section id="trulaju" className="trulaju section">
    <div className="container">
      <Reveal className="trulaju-head">
        <p className="section-label mono">Case Study</p>
        <div className="trulaju-meta mono">
          <span>{trulaju.role}</span>
          <span aria-hidden="true">·</span>
          <span>{trulaju.period}</span>
        </div>
        <h2 className="section-title">
          {trulaju.name} — pay-per-kilometer vehicle insurance, powered by telemetry.
        </h2>
        <p className="trulaju-hook">{trulaju.hook}</p>
      </Reveal>

      <div className="trulaju-columns">
        <Reveal className="trulaju-col">
          <h3 className="trulaju-sub">The engineering problem</h3>
          <p>{trulaju.problem}</p>
        </Reveal>
        <Reveal className="trulaju-col" delay={90}>
          <h3 className="trulaju-sub">What I build</h3>
          <p>{trulaju.contribution}</p>
        </Reveal>
      </div>

      <Reveal className="trulaju-block">
        <h3 className="trulaju-sub">How the system connects</h3>
        <p className="trulaju-block-lead">
          From hardware in the vehicle to the workflows the business runs on.
        </p>
        <div
          className="pipeline"
          role="img"
          aria-label="Pipeline: GPS trackers, Flespi MQTT, Trulaju backend, mileage accounting, charging and wallet, policy, claims and notifications"
        >
          {trulaju.pipeline.map((stage, i) => (
            <Fragment key={stage.label}>
              <div className="pipe-node">
                <span className="pipe-index mono">{String(i + 1).padStart(2, '0')}</span>
                <p className="pipe-label">{stage.label}</p>
                <p className="pipe-note mono">{stage.note}</p>
              </div>
              {i < trulaju.pipeline.length - 1 && (
                <span className="pipe-arrow" aria-hidden="true" />
              )}
            </Fragment>
          ))}
        </div>
      </Reveal>

      <Reveal className="trulaju-block">
        <h3 className="trulaju-sub">Architecture at a glance</h3>
        <p className="trulaju-block-lead">
          A simplified view of the major layers — data sources, telemetry gateway, backend,
          data stores and the external systems the business depends on.
        </p>
        <div className="arch">
          <ArchRow label="Data sources">
            <div className="arch-single">GPS Trackers</div>
          </ArchRow>
          <ArchArrow />
          <ArchRow label="Telemetry gateway">
            <div className="arch-single">Flespi MQTT</div>
          </ArchRow>
          <ArchArrow />
          <div className="arch-backend">
            <p className="arch-backend-title mono">Trulaju Backend — FastAPI</p>
            <div className="arch-layers">
              {trulaju.backendLayers.map((layer) => (
                <div className="arch-layer" key={layer.name}>
                  <p className="arch-layer-name">{layer.name}</p>
                  <p className="arch-layer-note">{layer.note}</p>
                  <p className="arch-layer-scope mono">{layer.scope}</p>
                </div>
              ))}
            </div>
          </div>
          <ArchArrow />
          <ArchRow label="Data stores">
            {trulaju.dataStores.map((s) => (
              <span key={s} className="arch-chip">{s}</span>
            ))}
          </ArchRow>
          <ArchArrow />
          <ArchRow label="External systems">
            {trulaju.externalSystems.map((s) => (
              <span key={s} className="arch-chip">{s}</span>
            ))}
          </ArchRow>
        </div>
      </Reveal>

      <Reveal className="trulaju-block">
        <h3 className="trulaju-sub">Real-time telemetry</h3>
        <p className="trulaju-block-lead">
          Every vehicle continuously sends mileage and location data. The backend processes it
          in real time — keeping history, updating current state and driving pay-per-kilometer
          billing.
        </p>
        <div className="telemetry">
          <div className="telemetry-source">
            <div className="tele-node">GPS Device</div>
            <span className="tele-arrow" aria-hidden="true" />
            <div className="tele-node">Flespi MQTT</div>
            <span className="tele-arrow" aria-hidden="true" />
            <div className="tele-node tele-node-accent">Trulaju Backend</div>
          </div>
          <div className="telemetry-outputs">
            {trulaju.telemetryOutputs.map((out) => (
              <div className="tele-out" key={out.label}>
                <p className="tele-out-label">{out.label}</p>
                <p className="tele-out-note">{out.note}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal className="trulaju-block">
        <h3 className="trulaju-sub">Complete business workflows</h3>
        <p className="trulaju-block-lead">
          Not just APIs — the end-to-end lifecycle of the product.
        </p>
        <div className="flows-grid">
          <div className="flow-card card">
            <h4 className="flow-card-title">Policy lifecycle</h4>
            <FlowList steps={trulaju.businessFlow} />
          </div>
          <div className="flow-card card">
            <h4 className="flow-card-title">Claims</h4>
            <FlowList steps={trulaju.claimsFlow} />
          </div>
        </div>
      </Reveal>

      <Reveal className="trulaju-block">
        <h3 className="trulaju-sub">The scale behind it</h3>
        <p className="trulaju-block-lead">
          The system has evolved into a substantial production backend supporting multiple
          business domains, integrations, data stores and automated processes.
        </p>
        <div className="metrics-grid">
          {trulaju.metrics.map((m) => (
            <Metric key={m.label} metric={m} />
          ))}
        </div>
      </Reveal>

      <Reveal className="trulaju-block">
        <h3 className="trulaju-sub">Background processing</h3>
        <p className="trulaju-block-lead">{trulaju.backgroundCopy}</p>
        <div className="background-grid">
          <div className="bg-sync card">
            <p className="bg-title mono">On request</p>
            <p className="bg-desc">User / API request → immediate response</p>
          </div>
          <div className="bg-async card">
            <p className="bg-title mono">In the background — Redis + ARQ</p>
            <div className="bg-jobs">
              {trulaju.backgroundJobs.map((job) => (
                <span key={job} className="tech-chip">{job}</span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal className="trulaju-block">
        <h3 className="trulaju-sub">Security</h3>
        <p className="trulaju-block-lead">{trulaju.securityNote}</p>
        <ul className="security-grid">
          {trulaju.security.map((item) => (
            <li key={item} className="security-item card">
              <span className="security-icon"><ShieldIcon /></span>
              {item}
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  </section>
);

export default Trulaju;



