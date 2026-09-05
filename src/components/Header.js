import { useEffect, useState } from 'react';
import profile from '../data/profile';
import './Header.css';

const LINKS = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'engineering', label: 'Engineering', href: '#engineering' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return undefined;
    const sections = LINKS.map((l) => document.querySelector(l.href)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-35% 0px -60% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', menuOpen);
    return () => document.body.classList.remove('no-scroll');
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`header${scrolled ? ' is-scrolled' : ''}${menuOpen ? ' has-open-menu' : ''}`}>
      <div className="container header-inner">
        <a className="header-brand" href="#home" onClick={closeMenu}>
          <span className="header-brand-mark" aria-hidden="true">SA</span>
          <span className="header-brand-name">
            {profile.firstName} <span className="header-brand-muted">Oyebamiji</span>
          </span>
        </a>

        <nav
          id="site-nav"
          className={`header-nav${menuOpen ? ' open' : ''}`}
          aria-label="Primary"
        >
          <ul className="header-links">
            {LINKS.map((l) => (
              <li key={l.id}>
                <a
                  href={l.href}
                  className={active === l.id ? 'active' : ''}
                  aria-current={active === l.id ? 'true' : undefined}
                  onClick={closeMenu}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="btn btn-primary btn-sm header-cta" href="#contact" onClick={closeMenu}>
            Let&apos;s talk
          </a>
        </nav>

        <button
          type="button"
          className={`menu-toggle${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
};

export default Header;
