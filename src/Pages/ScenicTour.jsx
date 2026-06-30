import TwoHeronSection from '../Components/TwoHours/TwoHourHeroSection/TwoHeronSection'
import QuickDetails from '../Components/TwoHours/QuickDetails/QuickDetails'
import SEO from '../Components/SEO/SEO'
import JsonLd from '../Components/SEO/JsonLd'
import TourReviews from '../Components/Reviews/TourReviews'
import TripAdvisorWidget from '../Components/Social/TripAdvisorWidget'
import { breadcrumbSchema, tourProductSchema } from '../data/seoSchemas'

const ScenicTour = () => {
  const path = '/locations/raleigh/scenic-tour'

  return (
    <div>
      <SEO
        title="Scenic E-Bike Tour in Raleigh Area NC | Triangle Adventures"
        description="Ride a beginner-friendly scenic e-bike tour in the Raleigh area with greenways, local history, photo stops, and an easy guided route."
        path={path}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Locations', path: '/locations' },
          { name: 'Raleigh', path: '/locations/raleigh' },
          { name: 'Scenic E-Bike Tour', path },
        ])}
      />
      <JsonLd
        data={tourProductSchema({
          name: 'Greenery, Scenery and Mindfulness E-Bike Tour',
          description: 'A beginner-friendly scenic e-bike tour in the Raleigh area with greenways, local history, photo stops, and an easy guided route.',
          price: '69',
          path,
          areaServed: 'Raleigh Area, NC',
        })}
      />

      <TwoHeronSection />
      <QuickDetails />
      <TourReviews tourSlug="scenic-tour" />
      <TripAdvisorWidget />
    </div>
  )
}

export default ScenicTour
