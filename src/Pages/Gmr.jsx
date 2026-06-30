import QuickDetails from '../Components/Fourhours/QuickDetails/QuickDetails'
import FourHeronSection from '../Components/Fourhours/FourHourSection/FourHeronSection'
import SEO from '../Components/SEO/SEO'
import JsonLd from '../Components/SEO/JsonLd'
import TourReviews from '../Components/Reviews/TourReviews'
import TripAdvisorWidget from '../Components/Social/TripAdvisorWidget'
import { breadcrumbSchema, tourProductSchema } from '../data/seoSchemas'

const Gmr = () => {
  const path = '/locations/raleigh/ghost-and-mysteries'

  return (
    <div>
      <SEO
        title="Ghost & History E-Bike Tour in Raleigh NC | Triangle Adventures"
        description="Explore Raleigh ghost stories, local history, Dorothea Dix Park, Meredith College, NC State, and the Art to Heart Trail on a guided e-bike tour."
        path={path}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Locations', path: '/locations' },
          { name: 'Raleigh', path: '/locations/raleigh' },
          { name: 'Ghost & History E-Bike Tour', path },
        ])}
      />
      <JsonLd
        data={tourProductSchema({
          name: 'Ghosts, Mystery, Raleigh History E-Bike Tour',
          description: 'A guided Raleigh e-bike tour featuring ghost stories, local history, Dorothea Dix Park, Meredith College, NC State, and the Art to Heart Trail.',
          price: '85',
          path,
          areaServed: 'Raleigh, NC',
        })}
      />

      <FourHeronSection />
      <QuickDetails />
      <TourReviews tourSlug="ghost-and-mysteries" />
      <TripAdvisorWidget />
    </div>
  )
}

export default Gmr
