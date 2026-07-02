import SEO from '../Components/SEO/SEO'
import JsonLd from '../Components/SEO/JsonLd'
import { breadcrumbSchema } from '../data/seoSchemas'
import { Link } from 'react-router-dom'
import raleighImg from '../assets/Home/scenary.png'
import { wilmingtonTourImage } from '../data/wilmingtonTourImage'
import '../Components/HomePage/Tours/tours.css'

const Locations = () => {
  return (
    <div>
      <SEO
        title="E-Bike Tour Locations in NC | Raleigh, Clayton & Wilmington"
        description="Choose a Triangle Adventures location for guided e-bike tours in Raleigh, Clayton, the Triangle area, or Wilmington, NC with scenic rides, food tours, ghost stories, true crime, and local history."
        path="/locations"
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Locations', path: '/locations' },
        ])}
      />

      <section className="section--tours locations-page">
        <div className="container pt-5">
          <div className="text-center">
            <p className="tours--subtitle">Choose your city</p>
            <div className="tours--title">
              <h3>Adventure <span>Locations</span></h3>
            </div>
            <p className="tours--text">
              Pick your starting city and explore guided e-bike tours in Raleigh, Clayton, the Triangle area, and Wilmington built around local stories, hidden history, scenic routes, and memorable stops.
            </p>
          </div>

          <div className="tours--container">
            <div className="card--container locations-card-grid">
              <article className="card--article location--card">
                <img src={raleighImg} alt="Raleigh Clayton and Triangle area e-bike tours" loading="lazy" className="card--img" />
                <div className="card--data location--card-data">
                  <span className="card--description">Raleigh & Clayton Area</span>
                  <h2 className="card--title">Raleigh & The Triangle</h2>
                  <Link to="/locations/raleigh" className="card--button">View Tours</Link>
                </div>
              </article>

              <article className="card--article location--card location--card-new">
                <span className="new-tour-badge">Featured Tour</span>
                <img src={wilmingtonTourImage} alt="Wilmington: True Crime & Weird History tour poster" loading="lazy" className="card--img" />
                <div className="card--data location--card-data">
                  <span className="card--description">Wilmington, NC</span>
                  <h2 className="card--title">Wilmington: True Crime & Weird History</h2>
                  <Link to="/locations/wilmington" className="card--button">View Tours</Link>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Locations