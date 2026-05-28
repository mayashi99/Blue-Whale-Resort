import ResortPage from '../components/common/ResortPage.jsx'

export default function Kitesurfing() {
  return (
    <ResortPage
      eyebrow="Kitesurfing"
      title="Ride the Kalpitiya Wind"
      description="Lessons, lagoon sessions, and breezy coastal adventure shaped for first-timers and confident riders."
      ctaLabel="Book a Session"
      noteTitle="Wind, Water, and Easy Resort Days"
      note="Step from a calm resort morning into Kalpitiya's open lagoon conditions, then return for poolside rest, fresh meals, and sunset evenings."
      features={[
        {
          eyebrow: 'Lessons',
          title: 'Beginner Friendly Coaching',
          description: 'Clear instruction, steady progression, and shallow-water practice for guests starting their first kitesurfing journey.',
        },
        {
          eyebrow: 'Lagoon',
          title: 'Seasonal Wind Escapes',
          description: 'Plan your stay around the best wind windows with relaxed resort comfort waiting after every session.',
        },
        {
          eyebrow: 'Adventure',
          title: 'Resort Based Sessions',
          description: 'Pair active days on the water with garden privacy, dining, and unhurried time close to the coast.',
        },
      ]}
    />
  )
}
