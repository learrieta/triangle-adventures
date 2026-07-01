import TwoHeronSection from '../Components/TwoHours/TwoHourHeroSection/TwoHeronSection'
import QuickDetails from '../Components/TwoHours/QuickDetails/QuickDetails'
import SEO from '../Components/SEO/SEO'
import JsonLd from '../Components/SEO/JsonLd'
import TourReviews from '../Components/Reviews/TourReviews'
import TripAdvisorWidget from '../Components/Social/TripAdvisorWidget'
import { breadcrumbSchema, tourProductSchema, tourServiceSchema } from '../data/seoSchemas'

const ScenicTour = () => {
  const path = '/locations/raleigh/scenic-tour'

  return (
    <div>
      <SEO
        title="Scenic E-Bike Tour Near Raleigh & Clayton NC | Triangle Adventures"
        description="Book a beginner-friendly scenic e-bike tour near Raleigh and Clayton, NC with greenways, local history, photo stops, and Triangle Adventures guides."
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
          description: 'A beginner-friendly scenic e-bike tour near Raleigh and Clayton, NC with greenways, local history, photo stops, and Triangle Adventures guides.',
          price: '69',
          path,
          areaServed: 'Raleigh and Clayton Area, NC',
          category: 'Scenic E-Bike Tour',
        })}
      />
      <JsonLd
        data={tourServiceSchema({
          name: 'Scenic E-Bike Tour Near Raleigh and Clayton',
          description: 'A guided scenic e-bike tour near Raleigh and Clayton with greenways, local history, beginner-friendly riding, and photo stops.',
          path,
          areaServed: ['Raleigh, NC', 'Clayton, NC', 'The Triangle, NC'],
          serviceType: 'Scenic Guided E-Bike Tour',
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