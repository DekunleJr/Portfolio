import profile from '../data/profile';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-id">
          <p className="footer-name">{profile.name}</p>
          <p className="footer-role mono">{profile.role}</p>
        </div>

        <ul className="footer-links">
          <li>
            <a href={profile.github.url} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          {profile.linkedin.url && (
            <li>
              <a href={profile.linkedin.url} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
          )}
          <li>
            <a href={`mailto:${profile.email}`}>Email</a>
          </li>
        </ul>

        <p className="footer-copy">© {year} {profile.name}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
