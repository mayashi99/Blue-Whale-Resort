import ResortPage from '../components/common/ResortPage.jsx'

export default function Rooms() {
  return (
    <ResortPage
      eyebrow="Rooms"
      title="Lagoon Luxury Rooms"
      description="Bright resort rooms made for privacy, comfort, and calm days between the sea, garden, and pool."
      ctaLabel="Explore Availability"
      noteTitle="A Quiet Place to Unwind"
      note="Our rooms are designed for easy coastal living: soft light, restful space, and the privacy families, couples, and adventure guests need after a day outside."
      features={[
        {
          eyebrow: 'Comfort',
          title: 'Restful Guest Rooms',
          description: 'Settle into simple luxury with cool interiors, practical amenities, and space to slow down.',
        },
        {
          eyebrow: 'Privacy',
          title: 'Garden Resort Setting',
          description: 'Enjoy a peaceful stay with room to breathe, away from the rush and close to resort facilities.',
        },
        {
          eyebrow: 'Holiday',
          title: 'Pool and Lagoon Access',
          description: 'Move easily between your room, the pool, dining, and Kalpitiya adventure experiences.',
        },
      ]}
    />
  )
}
