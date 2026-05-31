import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebookF, FaXTwitter, FaYoutube } from 'react-icons/fa6'
import { FaLocationDot, FaPhone, FaEnvelope, FaArrowRight } from 'react-icons/fa6'

const explore = [
  { label: 'Rooms & Suites', to: '/rooms' },
  { label: 'Packages',       to: '/packages' },
  { label: 'Kitesurfing',    to: '/kitesurfing' },
  { label: 'Dining',         to: '/dining' },
  { label: 'Gallery',        to: '/gallery' },
  { label: 'About Us',       to: '/about-us' },
]

const support = [
  { label: 'Contact Us',        to: '/contact' },
  { label: 'Booking Policy',    to: '/contact' },
  { label: 'Cancellation',      to: '/contact' },
  { label: 'FAQ',               to: '/contact' },
  { label: 'Privacy Policy',    to: '/contact' },
]

const socials = [
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaFacebookF, href: '#', label: 'Facebook'  },
  { icon: FaXTwitter,  href: '#', label: 'X'         },
  { icon: FaYoutube,   href: '#', label: 'YouTube'   },
]

export default function Footer() {
  return (
    <footer className="w-full bg-[#071e1c] text-white">

      {/* ── gold top rule ── */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#2a9d8f]/60 to-transparent" />

      {/* ── main grid ── */}
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 pt-20 pb-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.4fr] gap-12 lg:gap-8">

        {/* col 1 — brand */}
        <div>
          {/* logo */}
          <Link to="/" className="inline-flex items-center gap-3 mb-6 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#2a9d8f]/50 text-[#7dd8cc] text-xs font-bold tracking-widest transition group-hover:bg-[#2a9d8f] group-hover:text-white">
              BW
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-bold tracking-[0.1em] uppercase text-white">Blue Whale</span>
              <span className="text-[10px] tracking-[0.22em] text-[#7dd8cc]/70 uppercase">Resort & Holidays</span>
            </div>
          </Link>

          <p className="text-sm text-white/45 leading-relaxed max-w-xs font-light">
            A boutique beachfront sanctuary in Kalpitiya, Sri Lanka — where
            pristine lagoons, world-class kitesurfing, and refined hospitality
            converge into an unforgettable escape.
          </p>

          {/* contact details */}
          <ul className="mt-8 space-y-3">
            {[
                { icon: FaLocationDot, text: 'Kalpitiya, North Western Province, Sri Lanka' },
              { icon: FaPhone,       text: '+94 77 000 0000' },
              { icon: FaEnvelope,    text: 'hello@bluewhaleresort.lk' },
            ].map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-3 text-xs text-white/45 font-light">
                <Icon className="text-[#2a9d8f] mt-0.5 flex-shrink-0 text-[11px]" />
                {text}
              </li>
            ))}
          </ul>
        </div>

        {/* col 2 — explore */}
        <div>
          <h4 className="text-[10px] font-bold tracking-[0.28em] uppercase text-[#7dd8cc] mb-6">
            Explore
          </h4>
          <ul className="space-y-3">
            {explore.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-sm text-white/50 font-light transition-all duration-200 hover:text-white hover:pl-1 inline-block"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* col 3 — support */}
        <div>
          <h4 className="text-[10px] font-bold tracking-[0.28em] uppercase text-[#7dd8cc] mb-6">
            Support
          </h4>
          <ul className="space-y-3">
            {support.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  className="text-sm text-white/50 font-light transition-all duration-200 hover:text-white hover:pl-1 inline-block"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* col 4 — newsletter + socials */}
        <div>
          <h4 className="text-[10px] font-bold tracking-[0.28em] uppercase text-[#7dd8cc] mb-6">
            Stay in Touch
          </h4>
          <p className="text-sm text-white/45 font-light leading-relaxed mb-5">
            Get exclusive offers and resort updates delivered to your inbox.
          </p>

          {/* email input */}
          <div className="flex border border-white/10 focus-within:border-[#2a9d8f]/60 transition-colors">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 min-w-0 bg-transparent px-4 py-3 text-xs text-white placeholder-white/25 outline-none"
            />
            <button
              type="button"
              aria-label="Subscribe"
              className="flex items-center justify-center px-4 bg-[#2a9d8f] text-white transition hover:bg-[#52b5a8]"
            >
              <FaArrowRight className="text-xs" />
            </button>
          </div>

          {/* socials */}
          <div className="mt-8">
            <p className="text-[10px] tracking-[0.22em] uppercase text-white/25 mb-4">Follow Us</p>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/40 transition hover:border-[#2a9d8f]/60 hover:text-[#7dd8cc]"
                >
                  <Icon className="text-xs" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── divider ── */}
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="h-px bg-white/6" />
      </div>

      {/* ── bottom bar ── */}
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[11px] text-white/25 tracking-wide">
          © {new Date().getFullYear()} Blue Whale Resort & Holidays. All rights reserved.
        </p>
        <div className="flex items-center gap-1 text-[11px] text-white/20">
          <span>Crafted with care in</span>
          <span className="text-[#7dd8cc]/60 mx-1">Sri Lanka</span>
          <span>🇱🇰</span>
        </div>
      </div>

    </footer>
  )
}
