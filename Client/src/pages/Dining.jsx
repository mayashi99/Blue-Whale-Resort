import ResortPage from '../components/common/ResortPage.jsx'

export default function Dining() {
  return (
    <ResortPage
      eyebrow="Dining"
      title="Fresh Coastal Dining"
      description="Simple, generous meals for slow mornings, poolside lunches, and warm Sri Lankan evenings."
      ctaLabel="Reserve a Table"
      noteTitle="Food That Fits the Day"
      note="Whether you are returning from the lagoon or settling into a quiet family evening, dining at Blue Whale Resort stays relaxed, fresh, and close at hand."
      features={[
        {
          eyebrow: 'Breakfast',
          title: 'Slow Morning Plates',
          description: 'Start the day with easy resort breakfasts before heading to the beach, lagoon, or pool.',
        },
        {
          eyebrow: 'Poolside',
          title: 'Lunch by the Water',
          description: 'Keep the day light with casual meals and cool drinks around the resort garden and pool.',
        },
        {
          eyebrow: 'Evening',
          title: 'Private Coastal Dinners',
          description: 'Gather after sunset for comforting dishes, friendly service, and a peaceful holiday mood.',
        },
      ]}
    />
  )
}
