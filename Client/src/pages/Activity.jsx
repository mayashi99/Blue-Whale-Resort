import ResortPage from '../components/common/ResortPage.jsx'

export default function Activity() {
  return (
    <ResortPage
      eyebrow="Activities"
      title="Coastal Resort Activities"
      description="Lagoon days, poolside calm, nearby excursions, and light adventure from your Kalpitiya base."
      ctaLabel="Plan Activities"
      noteTitle="Do as Much or as Little as You Like"
      note="Blue Whale Resort gives every day a natural rhythm, from quiet garden mornings to active lagoon afternoons and golden evenings."
      features={[
        {
          eyebrow: 'Water',
          title: 'Lagoon Adventures',
          description: 'Explore Kalpitiya through water-based experiences shaped around the season and your pace.',
        },
        {
          eyebrow: 'Resort',
          title: 'Poolside Slow Days',
          description: 'Stay close to your room, swim, read, dine, and let the holiday unfold without a schedule.',
        },
        {
          eyebrow: 'Explore',
          title: 'Local Coastal Outings',
          description: 'Use the resort as your base for relaxed nearby discoveries, beaches, and sunset views.',
        },
      ]}
    />
  )
}
