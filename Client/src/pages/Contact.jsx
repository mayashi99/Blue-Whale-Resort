import ResortPage from '../components/common/ResortPage.jsx'

export default function Contact() {
  return (
    <ResortPage
      eyebrow="Contact"
      title="Plan Your Blue Whale Stay"
      description="Tell us about your dates, rooms, dining plans, or kitesurfing ideas and we will help shape the visit."
      ctaLabel="Send an Inquiry"
      noteTitle="Start with a Simple Message"
      note="Share what kind of holiday you have in mind, from a quiet room stay to a full coastal adventure, and the resort team can guide the next step."
      features={[
        {
          eyebrow: 'Stay',
          title: 'Room Requests',
          description: 'Ask about room options, availability, family stays, and the details that matter for your visit.',
        },
        {
          eyebrow: 'Experience',
          title: 'Dining and Activities',
          description: 'Plan meals, lagoon experiences, kitesurfing sessions, or a calm poolside escape.',
        },
        {
          eyebrow: 'Support',
          title: 'Friendly Trip Help',
          description: 'Get practical guidance before you arrive so your holiday feels easy from the first day.',
        },
      ]}
    />
  )
}
