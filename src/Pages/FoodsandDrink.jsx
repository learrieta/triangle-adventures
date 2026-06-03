import ThreeHeronSection from '../Components/ThreeHours/ThreeHourHeroSection/ThreeHeronSection'
import QuickDetails from '../Components/ThreeHours/QuickDetails/QuickDetails'
import SEO from '../Components/SEO/SEO'
import JsonLd from '../Components/SEO/JsonLd'
import TourReviews from '../Components/Reviews/TourReviews'
import TripAdvisorWidget from '../Components/Social/TripAdvisorWidget'
import { breadcrumbSchema, tourProductSchema } from '../data/seoSchemas'

const FoodsandDrink = () => {
  const path = '/tours/foods-and-drinks-tour'

  return (
    <div>
      <SEO
        title="Food & Drinks E-Bike Tour in Clayton NC | Triangle Adventures"
        description="Join a guided Clayton, NC food and drinks e-bike tour with tacos, margaritas, local history, scenic trails, and beginner-friendly riding."
        path={path}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Tours', path: '/tours' },
          { name: 'Food & Drinks E-Bike Tour', path },
        ])}
      />
      <JsonLd
        data={tourProductSchema({
          name: 'Food & Drinks E-Bike Tour',
          description: 'A guided Clayton, NC food and drinks e-bike tour with tacos, margaritas, local history, scenic trails, and beginner-friendly riding.',
          price: '99',
          path,
          areaServed: 'Clayton, NC',
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
