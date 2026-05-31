import { Link } from 'react-router-dom'
import { useState } from 'react'
import {
  FaUmbrellaBeach, FaUtensils, FaWind, FaPeopleRoof,
  FaArrowRight, FaStar, FaPlay, FaChevronLeft, FaChevronRight,
} from 'react-icons/fa6'
import resortHero from '../assets/images/resort-hero.png'
import heroImage   from '../assets/hero.png'
import '../styles/home.css'

/* ─── data ─────────────────────────────────────────── */
const stats = [
  { value: '160km', label: 'From Colombo'   },
  { value: '5★',    label: 'Rated Resort'   },
  { value: '12+',   label: 'Luxury Suites'  },
  { value: '365',   label: 'Days of Sun'    },
]

const offers = [
  {
    tag: 'Accommodation',
    icon: FaUmbrellaBeach,
    title: 'Ocean-View Chalets',
    desc:  'Wake to the sound of waves in our beach-facing chalets — each with a private terrace and uninterrupted sea views.',
    img:   resortHero,
    link:  '/rooms',
  },
  {
    tag: 'Adventure',
    icon: FaWind,
    title: 'Kitesurfing Lagoon',
    desc:  'Ride world-class trade winds across Kalpitiya\'s legendary lagoon with our certified instructors.',
    img:   heroImage,
    link:  '/kitesurfing',
  },
  {
    tag: 'Dining',
    icon: FaUtensils,
    title: 'Coastal Cuisine',
    desc:  'Fresh Sri Lankan seafood and international dishes served on our open-air terrace overlooking the ocean.',
    img:   resortHero,
    link:  '/dining',
  },
  {
    tag: 'Family',
    icon: FaPeopleRoof,
    title: 'Family Retreats',
    desc:  'Spacious garden villas with private pools, kids\' activities, and the unhurried pace of island life.',
    img:   heroImage,
    link:  '/rooms',
  },
]

const testimonials = [
  {
    name:   'Sarah & James',
    origin: 'United Kingdom',
    stars:  5,
    text:   '"Absolutely breathtaking. The chalet was immaculate, the staff were incredibly warm, and waking up to the ocean every morning was pure magic. We\'ll be back."',
  },
  {
    name:   'Priya Nair',
    origin: 'India',
    stars:  5,
    text:   '"The kitesurfing experience was world-class and the dining was exceptional. Blue Whale Resort exceeded every expectation — a true hidden gem of Sri Lanka."',
  },
  {
    name:   'Marco & Elena',
    origin: 'Italy',
    stars:  5,
    text:   '"From the moment we arrived, we felt completely at ease. The resort is stunning, the food is incredible, and the lagoon views are unlike anything we\'ve seen."',
  },
]

const galleryStrip = [
  { src: resortHero, alt: 'Resort pool at sunset',    pos: 'center' },
  { src: heroImage,  alt: 'Beachfront chalet',        pos: 'center top' },
  { src: resortHero, alt: 'Kitesurfing lagoon',       pos: 'left center' },
  { src: heroImage,  alt: 'Tropical garden suite',    pos: 'center' },
  { src: resortHero, alt: 'Ocean dining terrace',     pos: 'right center' },
  { src: heroImage,  alt: 'Sunset over the lagoon',   pos: 'center bottom' },
]

/* ─── component ─────────────────────────────────────── */
export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const loopStrip = [...galleryStrip, ...galleryStrip]

  const prev = () => setActiveTestimonial((i) => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setActiveTestimonial((i) => (i + 1) % testimonials.length)

  return (
    <div className="w-full overflow-x-hidden" style={{ fontFamily: 'var(--font-sans)' }}>

      {/* ══════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════ */}
      <section className="relative h-[75vh] min-h-[520px] overflow-hidden">

        {/* bg with Ken Burns */}
        <div
          className="hero-bg absolute inset-0"
          style={{ backgroundImage: `url(${resortHero})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />

        {/* teal-to-transparent gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b3d3a]/85 via-[#0b3d3a]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071e1c]/70 via-transparent to-transparent" />

        {/* top teal bar */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#2a9d8f] via-[#52b5a8] to-[#2a9d8f]" />

        {/* content — left aligned */}
        <div className="relative z-10 flex h-full flex-col justify-center px-8 sm:px-16 lg:px-24 max-w-[1400px] mx-auto">

          {/* hero badge removed */}

          {/* headline — serif display font */}
          <h1
            className="max-w-2xl text-[3.2rem] sm:text-[4.5rem] lg:text-[6rem] leading-[1.0] text-white"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 300 }}
          >
            Escape to the<br />
            <span className="italic text-[#7dd8cc]">Edge of the</span><br />
            Ocean
          </h1>

          <p className="mt-6 max-w-sm text-sm text-white/65 leading-relaxed">
            A boutique beachfront sanctuary in Kalpitiya — where pristine
            lagoons, trade winds, and tropical warmth create the perfect escape.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/rooms"
              className="group inline-flex items-center gap-3 rounded-full bg-[#2a9d8f] px-8 py-4 text-xs font-semibold tracking-[0.14em] uppercase text-white shadow-lg shadow-[#2a9d8f]/40 transition-all duration-300 hover:bg-[#52b5a8] hover:shadow-[#52b5a8]/40 hover:gap-4"
            >
              Reserve a Room
              <FaArrowRight className="text-[10px] transition-transform group-hover:translate-x-1" />
            </Link>
            <button className="inline-flex items-center gap-3 text-xs font-medium tracking-[0.14em] uppercase text-white/70 transition hover:text-white">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 transition hover:border-white/70">
                <FaPlay className="text-[9px] ml-0.5" />
              </span>
              Watch Film
            </button>
          </div>
        </div>

        {/* scroll cue */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <div className="scroll-dot h-8 w-px bg-white/40" />
          <span className="text-[9px] tracking-[0.3em] text-white/40 uppercase">Scroll</span>
        </div>

        {/* floating stats card */}
        <div className="absolute bottom-10 right-8 sm:right-16 z-10 hidden sm:grid grid-cols-2 gap-px bg-white/10 backdrop-blur-md border border-white/15 overflow-hidden">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center justify-center gap-0.5 px-6 py-4 bg-[#0b3d3a]/60">
              <span className="text-xl font-semibold text-[#7dd8cc]">{s.value}</span>
              <span className="text-[9px] tracking-[0.18em] text-white/45 uppercase">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          2. INTRO STRIP
      ══════════════════════════════════════════ */}
      <div className="bg-[#f0faf8] border-b border-[#2a9d8f]/15">
        <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* intro paragraph removed */}
          {/* ratings removed */}
        </div>
      </div>

      {/* ══════════════════════════════════════════
          3. ABOUT — split layout
      ══════════════════════════════════════════ */}
      <section className="bg-white py-24 lg:py-32 px-6">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-16 items-center">

          {/* image side */}
          <div className="relative">
            <div className="relative overflow-hidden" style={{ height: '520px' }}>
              <img src={resortHero} alt="Blue Whale Resort" className="h-full w-full object-cover" />
              {/* teal corner frames */}
              <div className="absolute top-4 left-4 w-14 h-14 border-t-2 border-l-2 border-[#2a9d8f]" />
              <div className="absolute bottom-4 right-4 w-14 h-14 border-b-2 border-r-2 border-[#2a9d8f]" />
            </div>
            {/* floating badge */}
            <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-[#0b3d3a] text-white px-6 py-5 shadow-xl">
              <p className="text-3xl font-light text-[#7dd8cc]" style={{ fontFamily: 'var(--font-display)' }}>Since</p>
              <p className="text-4xl font-semibold tracking-tight">2010</p>
              <p className="text-[10px] tracking-[0.2em] text-white/50 uppercase mt-1">Est. Kalpitiya</p>
            </div>
          </div>

          {/* text side */}
          <div className="lg:pl-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-[#2a9d8f]" />
              <span className="text-[10px] font-semibold tracking-[0.28em] text-[#2a9d8f] uppercase">About the Resort</span>
            </div>

            <h2
              className="text-4xl sm:text-5xl text-[#0b3d3a] leading-[1.1]"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 300 }}
            >
              A <em>boutique sanctuary</em><br />by the Indian Ocean
            </h2>

            <p className="mt-6 text-[#0b3d3a]/60 leading-relaxed text-sm">
              Blue Whale Resort is a luxury beachfront escape dedicated to world-class
              hospitality. Located in Kalpitiya — Sri Lanka's kite surfing capital —
              we offer elegant beach-facing chalets, a renowned lagoon, fresh coastal
              dining, and the kind of unhurried warmth that only the tropics can offer.
            </p>

            {/* mini stats row */}
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-[#2a9d8f]/15 pt-8">
              {[
                { n: '12+', l: 'Suites' },
                { n: '4',   l: 'Dining Spots' },
                { n: '10k+',l: 'Guests' },
              ].map((s) => (
                <div key={s.l}>
                  <p className="text-2xl font-light text-[#2a9d8f]" style={{ fontFamily: 'var(--font-display)' }}>{s.n}</p>
                  <p className="text-[11px] tracking-wide text-[#0b3d3a]/45 uppercase mt-0.5">{s.l}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/about-us"
                className="inline-flex items-center gap-2 rounded-full bg-[#0b3d3a] px-7 py-3.5 text-xs font-semibold tracking-[0.12em] uppercase text-white transition hover:bg-[#2a9d8f]"
              >
                Our Story <FaArrowRight className="text-[10px]" />
              </Link>
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 rounded-full border border-[#2a9d8f]/40 px-7 py-3.5 text-xs font-semibold tracking-[0.12em] uppercase text-[#2a9d8f] transition hover:bg-[#f0faf8]"
              >
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          4. WHAT WE OFFER
      ══════════════════════════════════════════ */}
      <section className="bg-[#f7fffe] py-24 px-6">
        <div className="mx-auto max-w-6xl">

          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#2a9d8f]" />
              <span className="text-[10px] font-semibold tracking-[0.28em] text-[#2a9d8f] uppercase">Experiences</span>
              <div className="h-px w-8 bg-[#2a9d8f]" />
            </div>
            <h2
              className="text-4xl sm:text-5xl text-[#0b3d3a]"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 300 }}
            >
              Crafted for every kind of traveller
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {offers.map((o) => {
              const Icon = o.icon
              return (
                <Link
                  key={o.tag}
                  to={o.link}
                  className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-500"
                  style={{ aspectRatio: '3/4' }}
                >
                  <img
                    src={o.img}
                    alt={o.title}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  {/* gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071e1c]/95 via-[#071e1c]/30 to-transparent" />

                  {/* tag pill */}
                  <div className="absolute top-4 left-4 rounded-full bg-[#2a9d8f]/80 backdrop-blur-sm px-3 py-1 text-[9px] font-semibold tracking-[0.18em] uppercase text-white">
                    {o.tag}
                  </div>

                  {/* content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#2a9d8f]/20 border border-[#2a9d8f]/40">
                      <Icon className="text-[#7dd8cc] text-sm" />
                    </div>
                    <h3 className="text-base font-semibold text-white leading-snug">{o.title}</h3>
                    <p className="mt-2 text-xs text-white/50 leading-relaxed line-clamp-2 transition-all duration-500 group-hover:text-white/70">
                      {o.desc}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-[#7dd8cc] text-xs font-semibold opacity-0 translate-y-2 transition-all duration-400 group-hover:opacity-100 group-hover:translate-y-0">
                      Explore <FaArrowRight className="text-[9px]" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          5. FULL-BLEED FEATURE BANNER
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ height: '480px' }}>
        <img src={heroImage} alt="Kalpitiya lagoon" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b3d3a]/90 via-[#0b3d3a]/60 to-transparent" />

        <div className="relative z-10 flex h-full flex-col justify-center px-8 sm:px-16 lg:px-24 max-w-[1400px] mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-[#7dd8cc]" />
            <span className="text-[10px] font-semibold tracking-[0.28em] text-[#7dd8cc] uppercase">Kalpitiya Lagoon</span>
          </div>
          <h2
            className="max-w-xl text-4xl sm:text-5xl text-white leading-tight"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 300 }}
          >
            Sri Lanka's premier<br />
            <em className="text-[#7dd8cc]">kitesurfing destination</em>
          </h2>
          <p className="mt-5 max-w-sm text-sm text-white/60 leading-relaxed">
            Consistent trade winds, flat warm water, and expert guides make
            Kalpitiya the top kite spot in Asia — right at our doorstep.
          </p>
          <Link
            to="/kitesurfing"
            className="mt-8 inline-flex w-fit items-center gap-3 rounded-full border border-[#7dd8cc]/50 px-7 py-3.5 text-xs font-semibold tracking-[0.14em] uppercase text-[#7dd8cc] transition hover:bg-[#7dd8cc]/10"
          >
            Learn More <FaArrowRight className="text-[10px]" />
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          6. GALLERY STRIP
      ══════════════════════════════════════════ */}
      <div className="overflow-hidden bg-[#f0faf8] py-5 border-y border-[#2a9d8f]/10">
        <div className="photo-strip-track flex w-max gap-4">
          {loopStrip.map((p, i) => (
            <figure key={`${p.alt}-${i}`} className="m-0 h-56 w-72 flex-shrink-0 overflow-hidden rounded-xl lg:h-72 lg:w-96">
              <img
                src={p.src}
                alt={i < galleryStrip.length ? p.alt : ''}
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
                style={{ objectPosition: p.pos }}
              />
            </figure>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════
          7. TESTIMONIALS
      ══════════════════════════════════════════ */}
      <section className="bg-[#0b3d3a] py-24 px-6">
        <div className="mx-auto max-w-4xl text-center">

          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#7dd8cc]/50" />
            <span className="text-[10px] font-semibold tracking-[0.28em] text-[#7dd8cc] uppercase">Guest Stories</span>
            <div className="h-px w-8 bg-[#7dd8cc]/50" />
          </div>

          <h2
            className="text-4xl sm:text-5xl text-white mb-14"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 300 }}
          >
            What our guests say
          </h2>

          {/* testimonial card */}
          <div className="relative bg-white/5 border border-white/10 rounded-2xl px-8 sm:px-14 py-12">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(testimonials[activeTestimonial].stars)].map((_, i) => (
                <FaStar key={i} className="text-[#e76f51] text-sm" />
              ))}
            </div>
            <p
              className="text-xl sm:text-2xl text-white/85 leading-relaxed italic"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 300 }}
            >
              {testimonials[activeTestimonial].text}
            </p>
            <div className="mt-8 flex flex-col items-center gap-1">
              <p className="text-sm font-semibold text-[#7dd8cc]">{testimonials[activeTestimonial].name}</p>
              <p className="text-xs text-white/35 tracking-wide">{testimonials[activeTestimonial].origin}</p>
            </div>
          </div>

          {/* controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/50 transition hover:border-[#7dd8cc]/50 hover:text-[#7dd8cc]"
            >
              <FaChevronLeft className="text-xs" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === activeTestimonial ? 'w-6 bg-[#2a9d8f]' : 'w-1.5 bg-white/20'}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/50 transition hover:border-[#7dd8cc]/50 hover:text-[#7dd8cc]"
            >
              <FaChevronRight className="text-xs" />
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          8. CTA BANNER
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#f7fffe] py-28 px-6">
        {/* decorative teal circle */}
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[#2a9d8f]/8 pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#2a9d8f]/6 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-[#2a9d8f]" />
            <span className="text-[10px] font-semibold tracking-[0.28em] text-[#2a9d8f] uppercase">Limited Availability</span>
            <div className="h-px w-8 bg-[#2a9d8f]" />
          </div>

          <h2
            className="text-4xl sm:text-5xl lg:text-6xl text-[#0b3d3a] leading-tight"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 300 }}
          >
            Your perfect<br />
            <em className="text-[#2a9d8f]">island escape</em> awaits
          </h2>

          <p className="mt-6 text-[#0b3d3a]/55 leading-relaxed max-w-lg mx-auto text-sm">
            Reserve your stay at Blue Whale Resort and experience the finest
            beachfront hospitality Sri Lanka has to offer.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-[#0b3d3a] px-10 py-4 text-xs font-semibold tracking-[0.16em] uppercase text-white shadow-lg shadow-[#0b3d3a]/20 transition hover:bg-[#2a9d8f] hover:shadow-[#2a9d8f]/30"
            >
              Book Your Stay <FaArrowRight className="text-[10px] transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/packages"
              className="inline-flex items-center gap-3 rounded-full border border-[#2a9d8f]/40 px-10 py-4 text-xs font-semibold tracking-[0.16em] uppercase text-[#2a9d8f] transition hover:bg-[#f0faf8]"
            >
              View Packages
            </Link>
          </div>

          {/* trust row */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-[11px] text-[#0b3d3a]/35 tracking-wide">
            {['Free Cancellation', 'Best Rate Guarantee', 'Instant Confirmation'].map((t) => (
              <span key={t} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-[#2a9d8f]" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
