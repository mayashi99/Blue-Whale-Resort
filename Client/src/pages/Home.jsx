import { Link } from 'react-router-dom'
import { FaPeopleRoof, FaRegCompass, FaUmbrellaBeach, FaUtensils } from 'react-icons/fa6'
import resortHero from '../assets/images/resort-hero.png'
import '../styles/home.css'

const resortCards = [
  {
    name: 'Lagoon Luxury Rooms',
    location: 'Kalpitiya, Sri Lanka',
    to: '/rooms',
  },
  {
    name: 'Kitesurfing Retreat',
    location: 'Wind season escapes',
    to: '/kitesurfing',
  },
  {
    name: 'Private Coastal Dining',
    location: 'Poolside and garden',
    to: '/dining',
  },
]

const amenities = [
  {
    label: 'Private Resort Rooms',
    icon: FaUmbrellaBeach,
  },
  {
    label: 'Family Privacy & Comfort',
    icon: FaPeopleRoof,
  },
  {
    label: 'Fresh Dining & Services',
    icon: FaUtensils,
  },
  {
    label: 'Lagoon Adventures',
    icon: FaRegCompass,
  },
]

export default function Home() {
  return (
    <div className="home-page">
      <section className="home-hero" style={{ backgroundImage: `url(${resortHero})` }}>
        <div className="home-hero__shade" />
        <div className="home-brand-mark" aria-label="Blue Whale Resort">
          <span>BW</span>
          <strong>Blue Whale</strong>
          <small>Resort & Holidays</small>
        </div>
        <div className="home-hero__content">
          <h1>Welcome to Blue Whale Resort</h1>
          <p>
            Thoughtful coastal stays, lagoon adventures, and slow sunset evenings
            by the pool.
          </p>
          <Link className="home-hero__link" to="/rooms">
            Explore Stays
          </Link>
        </div>
      </section>

      <section className="home-intro">
        <span className="home-intro__jewel" aria-hidden="true" />
        <p className="home-section-label">Kalpitiya coastal hideaway</p>
        <h2>Luxury Resort Living by the Lagoon</h2>
        <p>
          Blue Whale Resort is a serene Sri Lankan escape for bright rooms,
          garden privacy, kitesurfing wind, fresh dining, and unhurried poolside
          days close to the sea.
        </p>

        <div className="home-amenities" aria-label="Resort amenities">
          {amenities.map((item) => {
            const Icon = item.icon

            return (
              <div className="home-amenity" key={item.label}>
                <Icon aria-hidden="true" />
                <span>{item.label}</span>
              </div>
            )
          })}
        </div>
      </section>

      <section className="home-retreats">
        <span className="home-divider" aria-hidden="true" />
        <h2>Our Top Resort Experiences</h2>
        <div className="home-retreat-grid">
          {resortCards.map((card) => (
            <Link className="home-retreat-card" to={card.to} key={card.name}>
              <img src={resortHero} alt="" />
              <span className="home-retreat-card__content">
                <strong>{card.name}</strong>
                <small>{card.location}</small>
                <em>View Details</em>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-testimonial">
        <p className="home-section-label">Guest note</p>
        <h2>Timeless, Easy Stays</h2>
        <blockquote>
          "Every detail felt easy: the pool, the food, the lagoon, and the sunset
          view. Blue Whale Resort is made for unhurried holidays."
        </blockquote>
        <Link to="/contact">Plan Your Stay</Link>
      </section>
    </div>
  )
}
