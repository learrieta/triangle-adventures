import AboutHero from '../Components/About/AboutHero/AboutHero'
import AboutDetails from '../Components/About/Details/AboutDetails'
import SEO from '../Components/SEO/SEO'
import JsonLd from '../Components/SEO/JsonLd'
import { breadcrumbSchema } from '../data/seoSchemas'

const AboutUs = () => {
  return (
    <div>
      <SEO
        title="About Triangle Adventures | Guided E-Bike Tours in NC"
        description="Meet Triangle Adventures, a guided e-bike tour company serving Raleigh, Durham, Cary, Clayton, and the Triangle area with scenic, food, drink, ghost, and history tours."
        path="/aboutus"
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'About', path: '/aboutus' },
        ])}
      />
      <AboutHero />
      <AboutDetails />
    </div>
  )
}

export default AboutUs
