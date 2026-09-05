import Reveal from './Reveal';
import profile from '../data/profile';
import './Contact.css';

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.36 9.36 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.5 7 8.5 6 8.5-6" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 4h4l1.5 4.5L8 10a12 12 0 0 0 6 6l1.5-2.5L20 15v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.5c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21h-4V9Z" />
  </svg>
);

const CONTACT_CARDS = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: <MailIcon />,
  },
  {
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s+/g, '')}`,
    icon: <PhoneIcon />,
  },
  {
    label: 'GitHub',
    value: profile.github.url.replace('https://', ''),
    href: profile.github.url,
    icon: <GithubIcon />,
    external: true,
  },
  ...(profile.linkedin.url
    ? [
        {
          label: 'LinkedIn',
          value: profile.linkedin.url.replace('https://', ''),
          href: profile.linkedin.url,
          icon: <LinkedinIcon />,
          external: true,
        },
      ]
    : []),
];

const Contact = () => (
  <section id="contact" className="contact section">
    <div className="container">
      <Reveal className="contact-head">
        <p className="section-label mono">Contact</p>
        <h2 className="contact-title">Have a product or system you want to build?</h2>
        <p className="contact-lead">Let&apos;s talk.</p>
        <a className="btn btn-primary contact-cta" href={`mailto:${profile.email}`}>
          Start a conversation
        </a>
      </Reveal>

      <div className="contact-grid">
        {CONTACT_CARDS.map((card, i) => (
          <Reveal key={card.label} delay={Math.min(i * 70, 210)}>
            <a
              className="contact-card card"
              href={card.href}
              {...(card.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <span className="contact-icon">{card.icon}</span>
              <span className="contact-text">
                <span className="contact-label mono">{card.label}</span>
                <span className="contact-value">{card.value}</span>
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Contact;
