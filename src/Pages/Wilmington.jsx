import SEO from '../Components/SEO/SEO'
import JsonLd from '../Components/SEO/JsonLd'
import { breadcrumbSchema } from '../data/seoSchemas'
import { Link } from 'react-router-dom'
import imgTrueCrime from '../assets/Home/mystery.png'
import '../Components/HomePage/Tours/tours.css'

const Wilmington = () => {
  return (
    <div>
      <SEO
        title="Wilmington E-Bike Tours | True Crime & Weird History"
        description="Explore Triangle Adventures in Wilmington, NC with a new True Crime and Weird History guided e-bike tour featuring unsolved mysteries, local history, and wild stories."
        path="/locations/wilmington"
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Locations', path: '/locations' },
          { name: 'Wilmington', path: '/locations/wilmington' },
        ])}
      />

      <section className="section--tours locations-page">
        <div className="container pt-5">
          <div className="text-center">
            <p className="tours--subtitle">New city. New stories.</p>
            <div className="tours--title">
              <h3>Wilmington <span>Tours</span></h3>
            </div>
            <p className="tours--text">
              Triangle Adventures is expanding to Wilmington with a darker, stranger, story-packed e-bike experience through historic neighborhoods, downtown streets, Greenfield Lake, and the Cargo District.
            </p>
          </div>

          <div className="tours--container">
            <div className="card--container wilmington-card-grid">
              <article className="card--article location--card-new">
                <span className="new-tour-badge">New Tour</span>
                <img src={imgTrueCrime} alt="Wilmington True Crime and Weird History e-bike tour" loading="lazy" className="card--img" />
                <div className="card--data">
                  <span className="card--description">Wilmington, NC</span>
                  <h2 className="card--title">True Crime & Weird History</h2>
                  <Link to="/locations/wilmington/true-crime-tour" className="card--button">Learn More</Link>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Wilmington
