import SEO from '../Components/SEO/SEO'
import JsonLd from '../Components/SEO/JsonLd'
import { breadcrumbSchema } from '../data/seoSchemas'
import { Link } from 'react-router-dom'
import imgTrueCrime from '../assets/Home/mystery.png'
import '../Components/HomePage/Tours/tours.css'
import '../Components/Wilmington/wilmington.css'

const wilmingtonHeroImage = 'https://www.southport-nc.com/images/uploads/place/3206/0526-469.jpg'

const Wilmington = () => {
  return (
    <div>
      <SEO
        title="Wilmington E-Bike Tours | True Crime & Weird History"
        description="Explore Triangle Adventures in Wilmington, NC with a new True Crime and Weird History guided e-bike tour, riverfront scenery, beaches, downtown history, and coastal things to do."
        path="/locations/wilmington"
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Locations', path: '/locations' },
          { name: 'Wilmington', path: '/locations/wilmington' },
        ])}
      />

      <section className="wilmington-landing-hero">
        <img src={wilmingtonHeroImage} alt="Wilmington North Carolina Riverwalk" className="wilmington-landing-hero__image" />
        <div className="wilmington-landing-hero__overlay"></div>
        <div className="wilmington-landing-hero__content">
          <p className="wilmington-landing-hero__eyebrow">Triangle Adventures expands to the coast</p>
          <h1>Wilmington</h1>
          <p>Riverfront charm, coastal history, eerie stories, and a brand-new guided e-bike adventure.</p>
          <Link to="/locations/wilmington/true-crime-tour" className="wilmington-landing-hero__button">View New Tour</Link>
        </div>
      </section>

      <section className="wilmington-intro-section">
        <div className="container">
          <div className="wilmington-intro-grid">
            <div>
              <p className="tours--subtitle">New city. New stories.</p>
              <div className="tours--title">
                <h3>Welcome to <span>Wilmington</span></h3>
              </div>
            </div>
            <p className="wilmington-intro-copy">
              Wilmington blends a historic riverfront, coastal neighborhoods, nearby beaches, and the kind of strange local history that makes every street feel like it has a story. Our Wilmington experience is built for riders who want something fun, easy, memorable, and a little darker than the usual sightseeing tour.
            </p>
          </div>
        </div>
      </section>

      <section className="section--tours wilmington-tour-section">
        <div className="container">
          <div className="text-center">
            <p className="tours--subtitle">Book the new tour</p>
            <div className="tours--title">
              <h3>Wilmington <span>True Crime</span></h3>
            </div>
            <p className="tours--text">
              A darker, stranger, story-packed ride through Wilmington true crime, weird history, Historic Downtown, Greenfield Lake, the Cargo District, and more.
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

      <section className="wilmington-things-section">
        <div className="container">
          <div className="text-center">
            <p className="tours--subtitle">Make a day of it</p>
            <div className="tours--title">
              <h3>Things to do <span>Nearby</span></h3>
            </div>
            <p className="tours--text">
              Turn your Wilmington tour into a full coastal day with riverfront walks, beach time, local dining, and historic downtown exploring.
            </p>
          </div>

          <div className="wilmington-things-grid">
            <div className="wilmington-thing-card">
              <span>01</span>
              <h4>Explore the Riverwalk</h4>
              <p>Take in Cape Fear River views, downtown shops, waterfront patios, and classic Wilmington riverfront scenery before or after your ride.</p>
            </div>
            <div className="wilmington-thing-card">
              <span>02</span>
              <h4>Grab food downtown</h4>
              <p>Plan time for riverfront dining, coffee, dessert, or a relaxed meal around Historic Downtown and the Cargo District.</p>
            </div>
            <div className="wilmington-thing-card">
              <span>03</span>
              <h4>Visit the beaches</h4>
              <p>Wrightsville Beach and Carolina Beach are easy add-ons for guests who want sunshine, ocean views, or a coastal walk.</p>
            </div>
            <div className="wilmington-thing-card">
              <span>04</span>
              <h4>Walk historic streets</h4>
              <p>Wilmington is full of old homes, hidden corners, and local legends that pair perfectly with the True Crime and Weird History theme.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Wilmington
