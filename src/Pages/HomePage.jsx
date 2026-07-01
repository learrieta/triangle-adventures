import Ebike from '../Components/HomePage/E-bike/Ebikes'
import HeroSection from '../Components/HomePage/HeroSection/HeroSection'
import Pictures from '../Components/HomePage/Pictures/Pictures'
import Testimonials from '../Components/HomePage/Testimonials/Testimonials'
import Tours from '../Components/HomePage/Tours/Tours'
import HomeBanner from '../Components/HomePage/HomeBanner/HomeBanner'
import Partners from '../Components/HomePage/Partners/Partners'
import SEO from '../Components/SEO/SEO'
import JsonLd from '../Components/SEO/JsonLd'
import { localBusinessSchema, websiteSchema } from '../data/seoSchemas'
import TripAdvisorWidget from '../Components/Social/TripAdvisorWidget'

const HomePage = () => {
  return (
    <div>
      <SEO
        title="Raleigh, Clayton & Wilmington E-Bike Tours | Triangle Adventures"
        description="Book guided e-bike tours in Raleigh, Clayton, and Wilmington, NC. Explore scenic rides, tacos and margaritas, ghost stories, true crime, weird history, and local North Carolina adventures."
        path="/"
      />
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={websiteSchema} />

      <HomeBanner />
      <HeroSection />
      <Ebike />
      <Tours />
      <Testimonials />
      <TripAdvisorWidget />
      <Pictures />
      <Partners />
    </div>
  )
}

export default HomePage