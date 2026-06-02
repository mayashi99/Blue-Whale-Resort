import { Link } from 'react-router-dom'
import {
  FaArrowRight,
  FaBath,
  FaBed,
  FaBriefcase,
  FaCalendarCheck,
  FaChampagneGlasses,
  FaCircleCheck,
  FaMugSaucer,
  FaPeopleGroup,
  FaRulerCombined,
  FaSnowflake,
  FaTree,
  FaTv,
  FaUmbrellaBeach,
  FaWater,
  FaWifi,
} from 'react-icons/fa6'
import resortHero from '../assets/images/resort-hero.png'
import roomImage from '../assets/hero.png'
import blueResort from '../assets/images/bluewhale resort.png'
import '../styles/rooms.css'

const roomTypes = [
  {
    name: 'Casa Sul Mare',
    category: 'Sea view room',
    bestFor: 'Couples and solo stays',
    image: resortHero,
    price: 'From €120',
    description: 'Sea-view room for couples, families, solo travelers, and kitesurfers.',
    features: [
      { icon: FaRulerCombined, label: '40 m²' },
      { icon: FaBed, label: 'Queen / Twin' },
      { icon: FaWifi, label: 'Wi-Fi' },
      { icon: FaWater, label: 'Sea View' },
    ],
  },
  {
    name: 'Superior Chalet',
    category: 'Garden chalet',
    bestFor: 'Quiet poolside stays',
    image: roomImage,
    price: 'From €95',
    description: 'Eco-friendly villa with garden and poolside views.',
    features: [
      { icon: FaRulerCombined, label: '32 m²' },
      { icon: FaBed, label: 'Queen / Twin' },
      { icon: FaTree, label: 'Garden View' },
      { icon: FaBriefcase, label: 'Work Desk' },
    ],
  },
  {
    name: 'Two Bed Room Chalet',
    category: 'Family chalet',
    bestFor: 'Families and groups',
    image: blueResort,
    price: 'From €185',
    description: 'Spacious family chalet with two bedrooms and separate bathrooms.',
    features: [
      { icon: FaRulerCombined, label: '55 m²' },
      { icon: FaPeopleGroup, label: 'Family' },
      { icon: FaBath, label: '2 Bathrooms' },
      { icon: FaWater, label: 'Sea / Garden' },
    ],
  },
  {
    name: 'Blue Whale Suite With Ocean View',
    category: 'Ocean suite',
    bestFor: 'Premium holidays',
    image: resortHero,
    price: 'From €185',
    description: 'Luxury suite with garden, pool, and sea views.',
    features: [
      { icon: FaRulerCombined, label: '33 m²' },
      { icon: FaBed, label: 'Queen / Twin' },
      { icon: FaBath, label: 'Bath Tub' },
      { icon: FaTv, label: 'TV' },
    ],
  },
]

const amenities = [
  { icon: FaSnowflake, label: 'Air conditioning' },
  { icon: FaWifi, label: 'High-speed Wi-Fi' },
  { icon: FaMugSaucer, label: 'Breakfast available' },
  { icon: FaBath, label: 'Private bathroom' },
  { icon: FaUmbrellaBeach, label: 'Pool access' },
  { icon: FaChampagneGlasses, label: 'Dining nearby' },
]

const stayHighlights = [
  { value: '12+', label: 'Guest rooms' },
  { value: 'Pool', label: 'Garden access' },
  { value: 'Lagoon', label: 'Nearby adventures' },
]

const bookingSteps = [
  { label: 'Arrival', value: 'Select dates' },
  { label: 'Guests', value: '2 adults' },
  { label: 'Room style', value: 'Suite or chalet' },
]

export default function Rooms() {
  return (
    <div className="rooms-page">
      <section className="rooms-hero">
        <img src={resortHero} alt="Blue Whale Resort room and pool view" />
        <div className="rooms-hero__shade" />
        <div className="rooms-hero__content">
          <p className="rooms-eyebrow">Blue Whale Resort rooms</p>
          <h1>Boutique coastal stays shaped for rest.</h1>
          <p>
            Settle into modern rooms and private chalets with cool interiors,
            garden calm, ocean air, and easy access to dining, pool time, and
            Kalpitiya lagoon adventures.
          </p>
          <div className="rooms-hero__actions">
            <Link className="rooms-button rooms-button--primary" to="/contact">
              Request availability <FaArrowRight aria-hidden="true" />
            </Link>
            <a className="rooms-button rooms-button--ghost" href="#room-options">
              Explore rooms
            </a>
          </div>
        </div>
      </section>

      <section className="rooms-stats" aria-label="Room stay highlights">
        {stayHighlights.map((item) => (
          <div className="rooms-stat" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section className="rooms-planner" aria-label="Availability planner">
        {bookingSteps.map((item) => (
          <div className="rooms-planner__item" key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </div>
        ))}
        <Link className="rooms-planner__button" to="/contact">
          Check Availability <FaArrowRight aria-hidden="true" />
        </Link>
      </section>

      <section className="rooms-catalog" id="room-options" aria-label="Available room types">
        <div className="rooms-catalog__header">
          <div>
            <p className="rooms-eyebrow">Stay your way</p>
            <h2>Available Room Types</h2>
            <p>
              Select the room that fits your holiday style. Starting rates may
              change by season, dates, meal plan, and occupancy.
            </p>
          </div>
          <Link className="rooms-availability" to="/contact">
            <FaCalendarCheck aria-hidden="true" />
            Request Availability
          </Link>
        </div>

        <div className="rooms-grid">
          {roomTypes.map((room) => (
            <article className="room-card" key={room.name}>
              <div className="room-card__image">
                <img src={room.image} alt={`${room.name} at Blue Whale Resort`} />
                <span className="room-card__category">{room.category}</span>
                <strong>{room.price}</strong>
              </div>
              <div className="room-card__body">
                <div className="room-card__title">
                  <p>{room.bestFor}</p>
                  <h3>{room.name}</h3>
                </div>
                <p className="room-card__description">{room.description}</p>
                <div className="room-card__features" aria-label={`${room.name} features`}>
                  {room.features.map((feature) => {
                    const Icon = feature.icon
                    return (
                      <span key={feature.label}>
                        <Icon aria-hidden="true" />
                        {feature.label}
                      </span>
                    )
                  })}
                </div>
                <div className="room-card__actions">
                  <Link className="room-card__book" to="/contact">
                    Book Now
                  </Link>
                  <Link className="room-card__details" to="/contact">
                    View Details <FaArrowRight aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rooms-amenities" aria-label="Room amenities">
        <div className="rooms-amenities__header">
          <p className="rooms-eyebrow">Included comforts</p>
          <h2>Everything you need for an easy stay.</h2>
        </div>
        <div className="rooms-amenities__grid">
          {amenities.map((item) => {
            const Icon = item.icon
            return (
              <div className="rooms-amenity" key={item.label}>
                <Icon aria-hidden="true" />
                <span>{item.label}</span>
              </div>
            )
          })}
        </div>
      </section>

      <section className="rooms-booking">
        <div>
          <p className="rooms-eyebrow">Plan your stay</p>
          <h2>Tell us your dates and guest count.</h2>
          <p>
            We will help match the right room type for your stay, whether it is
            a couple escape, family break, or activity-led holiday.
          </p>
          <div className="rooms-booking__checks">
            <span><FaCircleCheck aria-hidden="true" /> Best room match</span>
            <span><FaCircleCheck aria-hidden="true" /> Seasonal rates</span>
            <span><FaCircleCheck aria-hidden="true" /> Direct resort support</span>
          </div>
        </div>
        <Link className="rooms-button rooms-button--primary" to="/contact">
          Check availability <FaArrowRight aria-hidden="true" />
        </Link>
      </section>
    </div>
  )
}
