import ThreeHeronSection from '../Components/ThreeHours/ThreeHourHeroSection/ThreeHeronSection'
import QuickDetails from '../Components/ThreeHours/QuickDetails/QuickDetails'
import SEO from '../Components/SEO/SEO'
import JsonLd from '../Components/SEO/JsonLd'
import TourReviews from '../Components/Reviews/TourReviews'
import TripAdvisorWidget from '../Components/Social/TripAdvisorWidget'
import { breadcrumbSchema, tourProductSchema } from '../data/seoSchemas'

const FoodsandDrink = () => {
  const path = '/locations/raleigh/foods-and-drinks-tour'

  return (
    <div>
      <SEO
        title="Food & Drinks E-Bike Tour in Raleigh Area NC | Triangle Adventures"
        description="Join a guided Raleigh area food and drinks e-bike tour with tacos, margaritas, local history, scenic trails, and beginner-friendly riding."
        path={path}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Locations', path: '/locations' },
          { name: 'Raleigh', path: '/locations/raleigh' },
          { name: 'Food & Drinks E-Bike Tour', path },
        ])}
      />
      <JsonLd
        data={tourProductSchema({
          name: 'Food & Drinks E-Bike Tour',
          description: 'A guided Raleigh area food and drinks e-bike tour with tacos, margaritas, local history, scenic trails, and beginner-friendly riding.',
          price: '99',
          path,
          areaServed: 'Raleigh Area, NC',
        })}
      />

      <ThreeHeronSection />
      <QuickDetails />
      <TourReviews tourSlug="foods-and-drinks-tour" />
      <TripAdvisorWidget />
    </div>
  )
}

export default FoodsandDrink
