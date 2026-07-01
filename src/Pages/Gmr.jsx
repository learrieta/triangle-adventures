import QuickDetails from '../Components/Fourhours/QuickDetails/QuickDetails'
import FourHeronSection from '../Components/Fourhours/FourHourSection/FourHeronSection'
import SEO from '../Components/SEO/SEO'
import JsonLd from '../Components/SEO/JsonLd'
import TourReviews from '../Components/Reviews/TourReviews'
import TripAdvisorWidget from '../Components/Social/TripAdvisorWidget'
import { breadcrumbSchema, tourProductSchema, tourServiceSchema } from '../data/seoSchemas'

const Gmr = () => {
  const path = '/locations/raleigh/ghost-and-mysteries'

  return (
    <div>
      <SEO
        title="Raleigh Ghost Tour by E-Bike | Mystery, History & Haunted Stories"
        description="Book a Raleigh ghost and mystery e-bike tour with local history, haunted stories, Dorothea Dix Park, Meredith College, NC State, and the Art to Heart Trail."
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
          name: 'Raleigh Ghosts, Mystery and History E-Bike Tour',
          description: 'A guided Raleigh e-bike tour featuring ghost stories, local history, Dorothea Dix Park, Meredith College, NC State, and the Art to Heart Trail.',
          price: '85',
          path,
          areaServed: 'Raleigh, NC',
          category: 'Ghost and History E-Bike Tour',
        })}
      />
      <JsonLd
        data={tourServiceSchema({
          name: 'Raleigh Ghost and Mystery E-Bike Tour',
          description: 'A guided Raleigh ghost tour by e-bike with local history, mystery stories, haunted stops, Dorothea Dix Park, Meredith College, NC State, and the Art to Heart Trail.',
          path,
          areaServed: ['Raleigh, NC', 'The Triangle, NC'],
          serviceType: 'Ghost and History Guided E-Bike Tour',
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