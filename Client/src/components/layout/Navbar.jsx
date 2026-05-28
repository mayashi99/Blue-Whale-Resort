import { NavLink } from 'react-router-dom'
import '../../styles/navbar.css'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Rooms', path: '/rooms' },
  { label: 'Packages', path: '/packages' },
  { label: 'Kitesurfing', path: '/kitesurfing' },
  { label: 'Dining', path: '/dining' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'About Us', path: '/about-us' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  return (
    <header className="site-navbar">
      <div className="site-navbar__inner">
        <NavLink className="site-navbar__brand" to="/" aria-label="Blue Whale Resort home">
          <span></span>
          <strong>Whale</strong>
        </NavLink>

        <nav className="site-navbar__links" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                [
                  'site-navbar__link',
                  isActive ? 'site-navbar__link--active' : '',
                ].join(' ')
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="site-navbar__actions">
          <NavLink className="site-navbar__book" to="/contact">
            Book
          </NavLink>
        </div>
      </div>
    </header>
  )
}
