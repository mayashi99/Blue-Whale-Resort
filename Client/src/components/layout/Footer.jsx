// import { Link } from 'react-router-dom'
// import { FaInstagram, FaFacebookF, FaXTwitter, FaYoutube } from 'react-icons/fa6'
// import { FaLocationDot, FaPhone, FaEnvelope, FaArrowRight } from 'react-icons/fa6'

// const explore = [
//   { label: 'Rooms & Suites', to: '/rooms' },
//   { label: 'Packages',       to: '/packages' },
//   { label: 'Kitesurfing',    to: '/kitesurfing' },
//   { label: 'Dining',         to: '/dining' },
//   { label: 'Gallery',        to: '/gallery' },
//   { label: 'About Us',       to: '/about-us' },
// ]

// const support = [
//   { label: 'Contact Us',        to: '/contact' },
//   { label: 'Booking Policy',    to: '/contact' },
//   { label: 'Cancellation',      to: '/contact' },
//   { label: 'FAQ',               to: '/contact' },
//   { label: 'Privacy Policy',    to: '/contact' },
// ]

// const socials = [
//   { icon: FaInstagram, href: '#', label: 'Instagram' },
//   { icon: FaFacebookF, href: '#', label: 'Facebook'  },
//   { icon: FaXTwitter,  href: '#', label: 'X'         },
//   { icon: FaYoutube,   href: '#', label: 'YouTube'   },
// ]

// export default function Footer() {
//   return (
//     <footer className="w-full bg-[#071e1c] text-white">

//       {/* ── gold top rule ── */}
//       <div className="h-px w-full bg-gradient-to-r from-transparent via-[#2a9d8f]/60 to-transparent" />

//       {/* ── main grid ── */}
//       <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 pt-20 pb-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.4fr] gap-12 lg:gap-8">

//         {/* col 1 — brand */}
//         <div>
//           {/* logo */}
//           <Link to="/" className="inline-flex items-center gap-3 mb-6 group">
//             <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#2a9d8f]/50 text-[#7dd8cc] text-xs font-bold tracking-widest transition group-hover:bg-[#2a9d8f] group-hover:text-white">
//               BW
//             </div>
//             <div className="flex flex-col leading-tight">
//               <span className="text-sm font-bold tracking-[0.1em] uppercase text-white">Blue Whale</span>
//               <span className="text-[10px] tracking-[0.22em] text-[#7dd8cc]/70 uppercase">Resort & Holidays</span>
//             </div>
//           </Link>

//           <p className="text-sm text-white/45 leading-relaxed max-w-xs font-light">
//             A boutique beachfront sanctuary in Kalpitiya, Sri Lanka — where
//             pristine lagoons, world-class kitesurfing, and refined hospitality
//             converge into an unforgettable escape.
//           </p>

//           {/* contact details */}
//           <ul className="mt-8 space-y-3">
//             {[
//                 { icon: FaLocationDot, text: 'Kalpitiya, North Western Province, Sri Lanka' },
//               { icon: FaPhone,       text: '+94 77 000 0000' },
//               { icon: FaEnvelope,    text: 'hello@bluewhaleresort.lk' },
//             ].map(({ icon: Icon, text }) => (
//               <li key={text} className="flex items-start gap-3 text-xs text-white/45 font-light">
//                 <Icon className="text-[#2a9d8f] mt-0.5 flex-shrink-0 text-[11px]" />
//                 {text}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* col 2 — explore */}
//         <div>
//           <h4 className="text-[10px] font-bold tracking-[0.28em] uppercase text-[#7dd8cc] mb-6">
//             Explore
//           </h4>
//           <ul className="space-y-3">
//             {explore.map((l) => (
//               <li key={l.to}>
//                 <Link
//                   to={l.to}
//                   className="text-sm text-white/50 font-light transition-all duration-200 hover:text-white hover:pl-1 inline-block"
//                 >
//                   {l.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* col 3 — support */}
//         <div>
//           <h4 className="text-[10px] font-bold tracking-[0.28em] uppercase text-[#7dd8cc] mb-6">
//             Support
//           </h4>
//           <ul className="space-y-3">
//             {support.map((l) => (
//               <li key={l.label}>
//                 <Link
//                   to={l.to}
//                   className="text-sm text-white/50 font-light transition-all duration-200 hover:text-white hover:pl-1 inline-block"
//                 >
//                   {l.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* col 4 — newsletter + socials */}
//         <div>
//           <h4 className="text-[10px] font-bold tracking-[0.28em] uppercase text-[#7dd8cc] mb-6">
//             Stay in Touch
//           </h4>
//           <p className="text-sm text-white/45 font-light leading-relaxed mb-5">
//             Get exclusive offers and resort updates delivered to your inbox.
//           </p>

//           {/* email input */}
//           <div className="flex border border-white/10 focus-within:border-[#2a9d8f]/60 transition-colors">
//             <input
//               type="email"
//               placeholder="Your email address"
//               className="flex-1 min-w-0 bg-transparent px-4 py-3 text-xs text-white placeholder-white/25 outline-none"
//             />
//             <button
//               type="button"
//               aria-label="Subscribe"
//               className="flex items-center justify-center px-4 bg-[#2a9d8f] text-white transition hover:bg-[#52b5a8]"
//             >
//               <FaArrowRight className="text-xs" />
//             </button>
//           </div>

//           {/* socials */}
//           <div className="mt-8">
//             <p className="text-[10px] tracking-[0.22em] uppercase text-white/25 mb-4">Follow Us</p>
//             <div className="flex items-center gap-3">
//               {socials.map(({ icon: Icon, href, label }) => (
//                 <a
//                   key={label}
//                   href={href}
//                   aria-label={label}
//                   className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/40 transition hover:border-[#2a9d8f]/60 hover:text-[#7dd8cc]"
//                 >
//                   <Icon className="text-xs" />
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ── divider ── */}
//       <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
//         <div className="h-px bg-white/6" />
//       </div>

//       {/* ── bottom bar ── */}
//       <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
//         <p className="text-[11px] text-white/25 tracking-wide">
//           © {new Date().getFullYear()} Blue Whale Resort & Holidays. All rights reserved.
//         </p>
//         <div className="flex items-center gap-1 text-[11px] text-white/20">
//           <span>Crafted with care in</span>
//           <span className="text-[#7dd8cc]/60 mx-1">Sri Lanka</span>
//           <span>🇱🇰</span>
//         </div>
//       </div>

//     </footer>
//   )
// }







import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#4A3A32] to-[#2B221D] text-[#F5EFE6]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1.4fr] gap-8">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Blue Whale Resort</h2>

            <div className="w-16 h-1 bg-[#C89A53] mb-5 rounded-full"></div>

            <p className="text-[#D9CFC3] leading-7">
              Experience luxury, comfort, and unforgettable moments in the heart
              of Kalpitiya. Discover elegant accommodations, fine dining, and
              exciting lagoon adventures.
            </p>
          </div>

          

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-5 text-white">
              Contact Us
            </h3>

            <div className="space-y-4 text-[#D9CFC3]">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#C89A53]" />
                <span>Kalpitiya, Sri Lanka</span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#C89A53]" />
                <span>+94 77 123 4567</span>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[#C89A53]" />
                <span>info@bluewhaleresort.com</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8">
              <a
                href="#"
                className="w-11 h-11 rounded-full border border-[#8D7668] flex items-center justify-center hover:border-[#C89A53] hover:text-[#C89A53] transition-all duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full border border-[#8D7668] flex items-center justify-center hover:border-[#C89A53] hover:text-[#C89A53] transition-all duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full border border-[#8D7668] flex items-center justify-center hover:border-[#C89A53] hover:text-[#C89A53] transition-all duration-300"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
          {/* Location card */}
          <div>
            <h3 className="text-xl font-semibold mb-5 text-white">Find Us</h3>

            <div className="rounded-2xl border border-[#5C4A42] bg-[#3C332D] p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-[#C89A53] mt-1" />
                <div>
                  <p className="text-[#D9CFC3] font-semibold">Blue Whale Resort</p>
                  <p className="text-[#BFB3AA]">Kalpitiya, Sri Lanka</p>
                </div>
              </div>

              <a
                href="https://maps.google.com/maps?q=Blue%20Whale%20Resort%20Kalpitiya"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center justify-center rounded-full border border-[#C89A53] bg-transparent px-5 py-3 text-sm font-semibold text-[#C89A53] transition hover:bg-[#C89A53] hover:text-[#2B221D]"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#5C4A42] mt-14 pt-6 flex flex-col md:flex-row justify-between items-center text-[#C8BDB0] text-sm">
          <p>©️ 2026 Blue Whale Resort. All Rights Reserved.</p>

          <p className="mt-3 md:mt-0">
            Designed for Luxury Coastal Experiences
          </p>
        </div>
      </div>
    </footer>
  );
}