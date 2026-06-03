import TwoHeronSection from '../Components/TwoHours/TwoHourHeroSection/TwoHeronSection'
import QuickDetails from '../Components/TwoHours/QuickDetails/QuickDetails'
import SEO from '../Components/SEO/SEO'
import JsonLd from '../Components/SEO/JsonLd'
import TourReviews from '../Components/Reviews/TourReviews'
import TripAdvisorWidget from '../Components/Social/TripAdvisorWidget'
import { breadcrumbSchema, tourProductSchema } from '../data/seoSchemas'

const ScenicTour = () => {
  const path = '/tours/scenic-tour'

  return (
    <div>
      <SEO
        title="Scenic E-Bike Tour in Clayton NC | Triangle Adventures"
        description="Ride a beginner-friendly scenic e-bike tour in Clayton, NC with greenways, local history, photo stops, and an easy guided route."
        path={path}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Tours', path: '/tours' },
          { name: 'Scenic E-Bike Tour', path },
        ])}
      />
      <JsonLd
        data={tourProductSchema({
          name: 'Greenery, Scenery and Mindfulness E-Bike Tour',
          description: 'A beginner-friendly scenic e-bike tour in Clayton, NC with greenways, local history, photo stops, and an easy guided route.',
          price: '69',
          path,
          areaServed: 'Clayton, NC',
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
