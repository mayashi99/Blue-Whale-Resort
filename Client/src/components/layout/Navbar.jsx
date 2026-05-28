import { NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Kitesurfing', path: '/kitesurfing' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Rooms', path: '/rooms' },
  { label: 'Packages', path: '/packages' },
  { label: 'Activities', path: '/activities' },
  { label: 'Dining', path: '/dining' },
  { label: 'About Us', path: '/about-us' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-amber-200 via-cyan-200 to-cyan-500 text-sm font-bold tracking-[0.2em] text-slate-950 shadow-lg shadow-cyan-500/20">
            BW
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white">Blue Whale Resort</p>
            <p className="text-xs text-slate-400">Hotel and kitesurfing resort</p>
          </div>
        </div>

        <nav className="flex flex-wrap justify-end gap-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) =>
              [
                'rounded-full px-4 py-2 text-sm font-medium transition duration-200',
                isActive
                  ? 'bg-gradient-to-r from-amber-200 to-cyan-200 text-slate-950 shadow-lg shadow-cyan-500/10'
                  : 'text-slate-300 hover:bg-white/5 hover:text-white',
              ].join(' ')
            }
          >
            {item.label}
          </NavLink>
        ))}
        </nav>
      </div>
    </header>
  )
}