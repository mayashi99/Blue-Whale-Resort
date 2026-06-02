import { Link } from 'react-router-dom'
import { useState } from 'react'
import {
  FaUmbrellaBeach, FaUtensils, FaWind, FaPeopleRoof,
  FaArrowRight, FaStar, FaPlay, FaChevronLeft, FaChevronRight,
} from 'react-icons/fa6'
import { motion, useScroll, useTransform } from 'framer-motion'
import resortHero from '../assets/images/resort-hero.png'
import blueResort from '../assets/images/bluewhale resort.png'
import heroVideo from '../assets/videos/web.mp4'
import heroImage   from '../assets/hero.png'
import '../styles/home.css'
import siteLogo from '../assets/images/Untitled design.png'

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
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 500], [0, 200])

  const prev = () => setActiveTestimonial((i) => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setActiveTestimonial((i) => (i + 1) % testimonials.length)

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: "-50px" },
    transition: { staggerChildren: 0.15 }
  }

  return (
    <div className="w-full overflow-x-hidden" style={{ fontFamily: "Proxima Nova, var(--font-sans)" }}>

      {/* ══════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════ */}
      <section className="relative h-[85vh] min-h-[600px] overflow-hidden">

        {/* bg with Ken Burns - video fallback to image poster */}
        <motion.video
          className="hero-bg absolute inset-0 object-cover w-full h-full"
          src={heroVideo}
          poster={blueResort}
          autoPlay
          loop
          muted
          playsInline
          style={{ y: heroY, objectFit: 'cover' }}
        />

        {/* refined gradient overlay */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(var(--color-primary-rgb), 0.38), rgba(var(--color-primary-rgb), 0.26), transparent)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071e1c]/60 via-transparent to-transparent" />

        {/* content — left aligned */}
        <div className="relative z-10 flex h-full flex-col justify-center px-8 sm:px-16 lg:px-24 max-w-[1400px] mx-auto">

          {/* headline — serif display font */}
          <motion.h1
            className="max-w-3xl text-[3.5rem] sm:text-[5rem] lg:text-[6.5rem] leading-[1.05] text-white tracking-tight"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 300 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <br />
            <span className="italic text-primary"></span><br />
            
          </motion.h1>

          <motion.p 
            className="mt-8 max-w-md text-base text-white/80 leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          ><br /> <br /> <br /> <br /> <br />  <br /> <br />  <br /> <br /> 
           


          </motion.p>

          {/* CTAs */}
          <motion.div 
            className="mt-16 flex flex-wrap items-center gap-5 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link
              to="/rooms"
              className="group inline-flex items-center gap-3 rounded-full bg-primary px-10 py-4 text-sm font-semibold tracking-[0.12em] uppercase text-white shadow-lg shadow-primary transition-all duration-300 hover:opacity-90"
            >
              Reserve a Room
              <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
        {/* scroll cue */}
        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div 
            className="scroll-dot h-10 w-px bg-white/50"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-[10px] tracking-[0.25em] text-white/50 uppercase font-medium"></span>
        </motion.div>

        {/* floating stats card removed per request */}
      </section>

      {/* ══════════════════════════════════════════
          2. INTRO STRIP
      ══════════════════════════════════════════ */}
    



      {/* ══════════════════════════════════════════
          5. FULL-BLEED FEATURE BANNER
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-white py-24 lg:py-32 px-6">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            {...fadeInUp}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-[11px] font-semibold tracking-[0.25em] text-primary uppercase">Kalpitiya Lagoon</span>
            </div>
              <h2
              className="text-4xl sm:text-5xl lg:text-6xl text-primary leading-tight"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 300 }}
            >
              Sri Lanka's premier<br />
              <em className="text-primary">kitesurfing destination</em>
            </h2>
            <p className="mt-6 text-base text-primary-70 leading-relaxed font-light">
              Consistent trade winds, flat warm water, and expert guides make
              Kalpitiya the top kite spot in Asia — right at our doorstep.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                to="/kitesurfing"
                className="mt-8 inline-flex items-center gap-3 rounded-full border-2 border-primary-40 px-8 py-4 text-sm font-semibold tracking-[0.1em] uppercase text-primary transition hover:bg-primary-10 hover:border-primary"
              >
                Learn More <FaArrowRight className="text-xs" />
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            className="relative"
            {...fadeInUp}
            transition={{ delay: 0.15 }}
          >
            <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
              <motion.img
                src={heroImage}
                alt="Kitesurfing at Kalpitiya Lagoon"
                className="h-full w-full object-cover"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.7 }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          6. GALLERY STRIP
      ══════════════════════════════════════════ */}
      <div className="overflow-hidden bg-gray-50 py-8 border-y border-gray-200">
        <motion.div 
          className="photo-strip-track flex w-max gap-5"
          animate={{ x: [0, -1200] }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: "linear",
            repeatType: "loop"
          }}
        >
          {loopStrip.map((p, i) => (
            <figure 
              key={`${p.alt}-${i}`} 
              className="m-0 h-64 w-80 flex-shrink-0 overflow-hidden rounded-xl lg:h-72 lg:w-96 shadow-sm"
            >
              <img
                src={p.src}
                alt={i < galleryStrip.length ? p.alt : ''}
                className="h-full w-full object-cover"
                style={{ objectPosition: p.pos }}
              />
            </figure>
          ))}
        </motion.div>
      </div>

      {/* ══════════════════════════════════════════
          7. TESTIMONIALS
      ══════════════════════════════════════════ */}
      <section className="bg-white py-28 px-6">
        <div className="mx-auto max-w-4xl text-center">

          <motion.div 
            className="flex items-center justify-center gap-3 mb-5"
            {...fadeInUp}
          >
            <div className="h-px w-12 bg-primary-50" />
            <span className="text-[11px] font-semibold tracking-[0.25em] text-primary uppercase">Guest Stories</span>
            <div className="h-px w-12 bg-primary-50" />
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl text-primary mb-16"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 300 }}
            {...fadeInUp}
            transition={{ delay: 0.1 }}
          >
            What our guests say
          </motion.h2>

          {/* testimonial card */}
          <motion.div 
            className="relative bg-white border border-gray-200 rounded-2xl px-10 sm:px-16 py-14 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            key={activeTestimonial}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-center gap-1.5 mb-8">
              {[...Array(testimonials[activeTestimonial].stars)].map((_, i) => (
                <FaStar key={i} className="text-[#e76f51] text-base" />
              ))}
            </div>
              <p
              className="text-xl sm:text-2xl text-[#071e1c] leading-relaxed italic font-light"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 300 }}
            >
              {testimonials[activeTestimonial].text}
            </p>
            <div className="mt-10 flex flex-col items-center gap-2">
              <p className="text-base font-semibold text-primary">{testimonials[activeTestimonial].name}</p>
              <p className="text-sm text-gray-500 tracking-wide">{testimonials[activeTestimonial].origin}</p>
            </div>
          </motion.div>

          {/* controls */}
          <motion.div 
            className="mt-10 flex items-center justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <button
              onClick={prev}
              className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-200 text-gray-500 transition hover:border-primary hover:text-primary hover:shadow-md"
            >
              <FaChevronLeft className="text-sm" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === activeTestimonial ? 'w-8 bg-primary' : 'w-2 bg-gray-200'}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-200 text-gray-500 transition hover:border-primary hover:text-primary hover:shadow-md"
            >
              <FaChevronRight className="text-sm" />
            </button>
          </motion.div>
        </div>
      </section>


    </div>
  )
}
