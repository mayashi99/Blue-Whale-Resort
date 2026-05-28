import ResortPage from '../components/common/ResortPage.jsx'

export default function AboutUs() {
  return (
    <ResortPage
      eyebrow="About Us"
      title="Blue Whale Resort Story"
      description="A peaceful Kalpitiya hideaway for guests who want comfort, privacy, coastal adventure, and warm Sri Lankan hospitality."
      ctaLabel="Contact the Team"
      noteTitle="Made for Unhurried Holidays"
      note="Blue Whale Resort brings together lagoon access, family-friendly privacy, fresh dining, and a gentle resort rhythm close to Sri Lanka's northwest coast."
      features={[
        {
          eyebrow: 'Place',
          title: 'Kalpitiya Coastal Base',
          description: 'Stay near the lagoon, sea, and wind season experiences while keeping resort comfort close.',
        },
        {
          eyebrow: 'Hospitality',
          title: 'Warm Local Service',
          description: 'Feel looked after with practical help, friendly attention, and easy holiday planning.',
        },
        {
          eyebrow: 'Mood',
          title: 'Quiet Resort Living',
          description: 'Enjoy a calm setting designed for families, couples, adventure guests, and long weekends.',
        },
      ]}
    />
  )
}
