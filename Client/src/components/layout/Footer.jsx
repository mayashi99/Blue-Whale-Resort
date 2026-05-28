import { Link } from 'react-router-dom'
import '../../styles/footer.css'

const footerLinks = [
  { label: 'Rooms', to: '/rooms' },
  { label: 'Packages', to: '/packages' },
  { label: 'Kitesurfing', to: '/kitesurfing' },
  { label: 'Dining', to: '/dining' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__decor" aria-hidden>
        <svg className="site-footer__wave" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C300,120 900,0 1200,100 L1200,120 L0,120 Z" fill="rgba(6,10,15,0.16)" />
          <path d="M0,20 C300,120 900,20 1200,80 L1200,120 L0,120 Z" fill="rgba(6,10,15,0.08)" />
        </svg>
      </div>
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <span>BW</span>
          <div>
            <strong>Blue Whale Resort</strong>
            <p>Kalpitiya coastal hideaway for rooms, dining, and lagoon adventure.</p>
          </div>
        </div>

        <nav className="site-footer__links" aria-label="Footer navigation">
          {footerLinks.map((link) => (
            <Link key={link.to} to={link.to}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="site-footer__contact">
          <p>Kalpitiya, Sri Lanka</p>
          <Link to="/contact">Plan Your Stay</Link>
        </div>
      </div>

      <div className="site-footer__bottom">
        <p>© 2026 Blue Whale Resort. All rights reserved.</p>
        <p>Resort & Holidays</p>
        <div className="site-footer__social" aria-label="Social links">
          <a href="#" aria-label="Instagram" title="Instagram" className="social-link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor"/></svg>
          </a>
          <a href="#" aria-label="Facebook" title="Facebook" className="social-link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 8h2.5V4.5H15c-2.2 0-3.5 1.3-3.5 3.5V11H9v3h2.5v7h3v-7H17l.5-3h-2.5V8z" fill="currentColor"/></svg>
          </a>
          <a href="#" aria-label="Twitter" title="Twitter" className="social-link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 7.5c-.6.3-1.2.5-1.9.6.7-.4 1.2-1 1.4-1.8-.7.4-1.5.7-2.3.9C16.6 6 15.6 5.5 14.5 5.5c-1.7 0-3 1.4-3 3 0 .2 0 .4.1.6C8.2 9 6 7.8 4.6 6.1c-.2.4-.3.9-.3 1.4 0 1.1.6 2.1 1.5 2.6-.5 0-1-.2-1.4-.4v.1c0 1.5 1.1 2.8 2.6 3.1-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.2 3 2.2-1.1.9-2.5 1.5-4 1.5H6c1.5.9 3.2 1.4 5 1.4 6 0 9.3-5 9.3-9.3v-.4c.6-.4 1.1-1 1.5-1.7-.6.3-1.2.5-1.9.6z" fill="currentColor"/></svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
