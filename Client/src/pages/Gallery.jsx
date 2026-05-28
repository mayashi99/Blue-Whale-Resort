import ResortPage from '../components/common/ResortPage.jsx'

export default function Gallery() {
  return (
    <ResortPage
      eyebrow="Gallery"
      title="Moments from the Resort"
      description="A glimpse of the rooms, pool, gardens, dining, and coastal atmosphere at Blue Whale Resort."
      ctaLabel="Visit the Resort"
      noteTitle="See the Feeling Before You Arrive"
      note="Browse the resort mood through warm light, easy spaces, and the relaxed coastal details that shape a Kalpitiya stay."
      features={[
        {
          eyebrow: 'Rooms',
          title: 'Comfortable Stays',
          description: 'Preview restful rooms and the quiet spaces that make the resort feel private and personal.',
        },
        {
          eyebrow: 'Resort',
          title: 'Pool and Gardens',
          description: 'Look through the outdoor spaces made for slow afternoons and relaxed family time.',
        },
        {
          eyebrow: 'Coast',
          title: 'Kalpitiya Atmosphere',
          description: 'Feel the mix of lagoon adventure, warm sunsets, and peaceful resort living.',
        },
      ]}
    />
  )
}
