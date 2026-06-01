import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
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
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // split nav items for left / right around the brand
  const mid = Math.ceil(navItems.length / 2)
  const leftItems = navItems.slice(0, mid)
  const rightItems = navItems.slice(mid)

  return (
    <header className={`site-navbar${scrolled ? ' site-navbar--scrolled' : ''}`}>
      <div className="site-navbar__inner">
        <nav className="site-navbar__links site-navbar__links--left" aria-label="Primary navigation">
          {leftItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                ['site-navbar__link', isActive ? 'site-navbar__link--active' : ''].join(' ')
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <NavLink className="site-navbar__brand" to="/" aria-label="Blue Whale Resort home">
          <svg className="site-navbar__whale" viewBox="0 0 40 40" fill="none" aria-hidden="true">
            <ellipse cx="20" cy="22" rx="14" ry="10" fill="currentColor" opacity=".18"/>
            <path d="M6 22c0-7.732 6.268-14 14-14s14 6.268 14 14c0 4-1.8 7.6-4.6 10H10.6C7.8 29.6 6 26 6 22Z" fill="currentColor"/>
            <path d="M34 16c2-1 5-1 6 2-2 0-4 1-6 3v-5Z" fill="currentColor"/>
            <circle cx="27" cy="19" r="1.5" fill="#fff"/>
            <path d="M10 32c1 3 3 5 6 6M20 32c0 3 1 5 3 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <span className="site-navbar__brand-text">
            <strong>Blue Whale</strong>
            <small>Resort & Holidays</small>
          </span>
        </NavLink>

        <nav className="site-navbar__links site-navbar__links--right" aria-label="Primary navigation">
          {rightItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                ['site-navbar__link', isActive ? 'site-navbar__link--active' : ''].join(' ')
              }
            >
              {item.label}
            </NavLink>
          ))}

          <div className="site-navbar__actions">
            <NavLink className="site-navbar__book" to="/contact">
              Reserve
            </NavLink>
            <button
              className="site-navbar__burger"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span /><span /><span />
            </button>
          </div>
        </nav>
      </div>

      {open && (
        <nav className="site-navbar__mobile" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                ['site-navbar__mobile-link', isActive ? 'site-navbar__mobile-link--active' : ''].join(' ')
              }
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink className="site-navbar__mobile-book" to="/contact" onClick={() => setOpen(false)}>
            Book Now
          </NavLink>
        </nav>
      )}
    </header>
  )
}
