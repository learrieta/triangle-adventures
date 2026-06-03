import { Link } from 'react-router-dom'
import SEO from '../Components/SEO/SEO'

const NotFound = () => (
  <main className="container py-5 text-center">
    <SEO
      title="Page Not Found | Triangle Adventures"
      description="This Triangle Adventures page could not be found. Explore guided e-bike tours in Raleigh, Durham, Cary, Clayton, and across the Triangle area."
      path="/404"
      noindex
    />
    <h1>Page not found</h1>
    <p>Sorry, that adventure route does not exist anymore.</p>
    <Link to="/tours" className="large--button">
      View Tours
    </Link>
  </main>
)

export default NotFound
