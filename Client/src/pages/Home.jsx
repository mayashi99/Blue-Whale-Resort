import { Link } from 'react-router-dom'
import { FaPeopleRoof, FaUmbrellaBeach, FaUtensils } from 'react-icons/fa6'
import resortHero from '../assets/images/resort-hero.png'
import heroImage from '../assets/hero.png'
import '../styles/home.css'

function KitesurfingLogo(props) {
  return (
    <svg viewBox="0 0 96 96" fill="none" {...props}>
      <path
        d="M44 14c18 1 31 14 37 34-14-10-29-14-48-11 1-11 4-19 11-23Z"
        fill="currentColor"
      />
      <path
        d="M69 20c8 6 13 15 16 27"
        stroke="#fff7eb"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M48 37 35 61M81 48 47 62M35 61l12 7 34-20"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30 52a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM30 52c-7 4-9 11-6 21h15c2-5 0-10-5-14l11 6 4-6-13-8c-2-1-4-1-6 1Z"
        fill="currentColor"
      />
      <path
        d="M16 75c10-6 21-7 34-3-11 8-25 10-42 6 3-1 5-2 8-3Z"
        fill="currentColor"
      />
      <path
        d="M7 84c10-5 21-5 33 0M5 90c8-4 17-4 28 0"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  )
}

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
    label: 'Kitesurfing Adventures',
    icon: KitesurfingLogo,
  },
]

const collagePhotos = [
  { src: resortHero, alt: 'Blue Whale Resort pool and palms', position: 'left center' },
  { src: heroImage, alt: 'Coastal resort stay', position: 'center' },
  { src: resortHero, alt: 'Lagoon and sunset view', position: 'right center' },
  { src: heroImage, alt: 'Relaxed resort moment', position: 'center top' },
  { src: resortHero, alt: 'Garden and beach atmosphere', position: 'center bottom' },
]

export default function Home() {
  const movingPhotos = [...collagePhotos, ...collagePhotos]

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
          <h1></h1>
          <p>
           
          </p>
          <div className="home-hero__cta"><br />  <br />  <br />  
            <Link className="home-hero__link" to="/rooms">
              Book your Stay
            </Link>
            
          </div>
        </div>
      </section>

      <section className="home-intro">
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
              
              <div className="home-amenity" key={item.label} >
                <Icon aria-hidden="true" />
                <span>{item.label}</span>
              </div>
            )
          })}
        </div>
      </section>

      

      <section className="home-photo-collage" aria-label="Blue Whale Resort photo collage">
        <div className="home-photo-collage__track">
          {movingPhotos.map((photo, index) => (
            <figure className="home-photo-collage__item" key={`${photo.alt}-${index}`}>
              <img src={photo.src} alt={index < collagePhotos.length ? photo.alt : ''} style={{ objectPosition: photo.position }} />
            </figure>
          ))}
        </div>
      </section>

      <section className="home-testimonial">
        <p className="home-section-label">Guest note</p>
        <h2>Blue Whale Resort Kalpitiya</h2 >
        <blockquote>
          Blue Whale Boutique Beach Resort is a luxury beachfront resort in Kalpitiya, Sri Lanka, dedicated to delivering world-class hospitality and innovative guest experiences. Located just 160 km north of Colombo and steps away from the Indian Ocean, the resort offers elegant beach-facing chalets, access to renowned kite surfing lagoons, and a relaxing tropical atmosphere surrounded by natural beauty and local hospitality.


        </blockquote>
       
      </section>
    </div>
  )
}
