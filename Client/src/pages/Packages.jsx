import ResortPage from '../components/common/ResortPage.jsx'

export default function Packages() {
  return (
    <ResortPage
      eyebrow="Packages"
      title="Resort Holiday Packages"
      description="Stay, dining, and adventure combinations for easy Kalpitiya holidays without overplanning."
      ctaLabel="Ask for Packages"
      noteTitle="Everything Arranged Around Your Stay"
      note="Choose a slower poolside break, an activity-led escape, or a balanced family holiday with the resort details brought together for you."
      features={[
        {
          eyebrow: 'Escape',
          title: 'Relaxing Stay Packages',
          description: 'Room-focused holidays with breakfast, pool time, and quiet resort comfort built in.',
        },
        {
          eyebrow: 'Adventure',
          title: 'Kitesurfing Retreats',
          description: 'Combine resort nights with wind season sessions, lessons, and lagoon experiences.',
        },
        {
          eyebrow: 'Family',
          title: 'Private Group Holidays',
          description: 'Plan an easy coastal stay for families or friends with dining and activities close by.',
        },
      ]}
    />
  )
}
