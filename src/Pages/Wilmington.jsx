import SEO from '../Components/SEO/SEO'
import JsonLd from '../Components/SEO/JsonLd'
import { breadcrumbSchema, tourServiceSchema } from '../data/seoSchemas'
import { Link } from 'react-router-dom'
import { wilmingtonTourImage } from '../data/wilmingtonTourImage'
import downtownFoodImage from '../assets/2hour/w-3-optimized-1600.webp'
import waterfrontImage from '../assets/2hour/w-4-optimized-1600.webp'
import localHistoryImage from '../assets/2hour/w-1.jpg'
import '../Components/HomePage/Tours/tours.css'
import '../Components/Wilmington/wilmington.css'

const wilmingtonHeroImage = '/images/wilmington-true-crime-header.jpg'

const nearbyItems = [
  {
    number: '01',
    title: 'Explore the Riverwalk',
    text: 'Take in Cape Fear River views, downtown shops, waterfront patios, and classic Wilmington riverfront scenery before or after your ride.',
    image: wilmingtonHeroImage,
    width: 1705,
    height: 920,
    alt: 'Wilmington Riverwalk by the Cape Fear River',
  },
  {
    number: '02',
    title: 'Grab food downtown',
    text: 'Plan time for riverfront dining, coffee, dessert, or a relaxed meal around Historic Downtown and the Cargo District.',
    image: downtownFoodImage,
    width: 1600,
    height: 1200,
    alt: 'E-bike riders near downtown Wilmington restaurants',
  },
  {
    number: '03',
    title: 'Ride the waterfront',
    text: 'Enjoy Cape Fear River views, open sky, and memorable waterfront landmarks while exploring Wilmington by e-bike.',
    image: waterfrontImage,
    width: 1600,
    height: 1200,
    alt: 'Triangle Adventures rider beside the Wilmington waterfront',
  },
  {
    number: '04',
    title: 'Discover local history',
    text: 'Visit historic sites and hidden corners while your guide shares Wilmington stories, mysteries, and local legends.',
    image: localHistoryImage,
    width: 798,
    height: 599,
    alt: 'Triangle Adventures guide sharing Wilmington history with guests',
  },
]

const Wilmington = () => {
  return (
    <div>
      <SEO
        title="Wilmington E-Bike Tours | True Crime, Weird History & Riverfront Rides"
        description="Book Wilmington, NC e-bike tours with Triangle Adventures. Explore true crime, weird history, Historic Downtown, Greenfield Lake, the Cargo District, beaches, and riverfront stops."
        path="/locations/wilmington"
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Locations', path: '/locations' },
          { name: 'Wilmington', path: '/locations/wilmington' },
        ])}
      />
      <JsonLd
        data={tourServiceSchema({
          name: 'Wilmington NC Guided E-Bike Tours',
          description: 'Guided e-bike tours in Wilmington, NC featuring true crime, weird history, Historic Downtown, Greenfield Lake, the Cargo District, beaches, and Cape Fear River scenery.',
          path: '/locations/wilmington',
          areaServed: ['Wilmington, NC', 'Wrightsville Beach, NC', 'Carolina Beach, NC'],
        })}
      />

      <section className="wilmington-landing-hero">
        <img src={wilmingtonHeroImage} width="1705" height="920" alt="Wilmington North Carolina Riverwalk" className="wilmington-landing-hero__image" />
        <div className="wilmington-landing-hero__overlay"></div>
        <div className="wilmington-landing-hero__content">
          <p className="wilmington-landing-hero__eyebrow">Not your typical tour company.</p>
          <h1>Wilmington</h1>
          <p>If you&apos;re looking for another ordinary sightseeing tour... this probably isn&apos;t it.</p>
          <Link to="/locations/wilmington/true-crime-tour" className="wilmington-landing-hero__button">Explore Tours</Link>
        </div>
      </section>

      <section className="wilmington-intro-section">
        <div className="container">
          <div className="wilmington-intro-grid">
            <div>
              <p className="tours--subtitle">Not your typical tour</p>
              <div className="tours--title">
                <h3>Welcome to <span>Wilmington</span></h3>
              </div>
            </div>
            <p className="wilmington-intro-copy">
              Anyone can show you historic buildings. We bring the stories behind them to life. Explore Wilmington on immersive guided e-bike adventures filled with fascinating history, hidden places, unexpected twists, and plenty of personality.
            </p>
          </div>
        </div>
      </section>

      <section className="section--tours wilmington-tour-section">
        <div className="container">
          <div className="text-center">
            <p className="tours--subtitle">Featured tour</p>
            <div className="tours--title">
              <h3>Wilmington: <span>True Crime & Weird History</span></h3>
            </div>
            <p className="tours--text">
              The stories your history teacher skipped. Explore Wilmington&apos;s most infamous crimes, bizarre legends, forgotten scandals, and strange local history as you explore Historic Downtown, Greenfield Lake, the Cargo District, and other unforgettable stops.
            </p>
          </div>

          <div className="tours--container">
            <div className="card--container wilmington-card-grid">
              <article className="card--article location--card-new">
                <img src={wilmingtonTourImage} width="1024" height="1536" alt="Wilmington: True Crime & Weird History tour poster" loading="lazy" decoding="async" className="card--img" />
                <div className="card--data">
                  <span className="card--description">Wilmington, NC</span>
                  <h2 className="card--title">Wilmington: True Crime & Weird History</h2>
                  <Link to="/locations/wilmington/true-crime-tour" className="card--button">Learn More</Link>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="wilmington-things-section">
        <div className="container">
          <div className="text-center wilmington-things-heading">
            <p className="tours--subtitle">Make a day of it</p>
            <div className="tours--title">
              <h3>Things to do <span>Nearby</span></h3>
            </div>
            <p className="tours--text">
              Turn your Wilmington tour into a full coastal day with riverfront walks, beach time, local dining, and historic downtown exploring.
            </p>
          </div>

          <div className="wilmington-nearby-list">
            {nearbyItems.map((item, index) => (
              <article className={`wilmington-nearby-row ${index % 2 === 1 ? 'wilmington-nearby-row--reverse' : ''}`} key={item.number}>
                <div className="wilmington-nearby-content">
                  <span>{item.number}</span>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
                <div className="wilmington-nearby-image-wrap">
                  <img src={item.image} width={item.width} height={item.height} alt={item.alt} loading="lazy" decoding="async" className="wilmington-nearby-image" />
                </div>
              </article>
            ))}
          </div>

          <div className="wilmington-map-card">
            <div className="wilmington-map-copy">
              <p className="tours--subtitle">Beach walk idea</p>
              <h3>Wrightsville Beach Walk</h3>
              <p>Want to extend the day after your tour? Add a relaxed walk near Johnnie Mercers Pier at Wrightsville Beach for ocean views, fresh air, and a classic coastal stop near Wilmington.</p>
            </div>
            <div className="wilmington-map-frame">
              <iframe
                title="Wrightsville Beach walk map"
                src={`https://www.google.com/maps?q=${encodeURIComponent('Johnnie Mercers Fishing Pier Wrightsville Beach NC')}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Wilmington
