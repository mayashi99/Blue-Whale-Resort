import { Link } from 'react-router-dom'
import resortHero from '../../assets/images/resort-hero.png'
import '../../styles/resort-page.css'

export default function ResortPage({
  eyebrow,
  title,
  description,
  ctaLabel = 'Plan Your Stay',
  ctaTo = '/contact',
  features = [],
  noteTitle,
  note,
}) {
  return (
    <div className="resort-page">
      <section className="resort-page__hero" style={{ backgroundImage: `url(${resortHero})` }}>
        <div className="resort-page__shade" />
        <div className="resort-page__hero-content">
          <p className="resort-page__label">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{description}</p>
          <Link className="resort-page__button" to={ctaTo}>
            {ctaLabel}
          </Link>
        </div>
      </section>

      <section className="resort-page__intro">
        <span className="resort-page__jewel" aria-hidden="true" />
        <p className="resort-page__label">Blue Whale Resort</p>
        <h2>{noteTitle}</h2>
        <p>{note}</p>
      </section>

      {features.length > 0 ? (
        <section className="resort-page__features" aria-label={`${title} highlights`}>
          {features.map((feature) => (
            <article className="resort-page__card" key={feature.title}>
              <img src={feature.image || resortHero} alt="" />
              <div>
                <p>{feature.eyebrow}</p>
                <h3>{feature.title}</h3>
                <span>{feature.description}</span>
              </div>
            </article>
          ))}
        </section>
      ) : null}
    </div>
  )
}
