import './tours.css'
import imgOne from '../../../assets/Home/scenary.png'
import imgTwo from '../../../assets/Home/fooddrink.png'
import imgThree from '../../../assets/Home/mystery.png'

import { Link } from 'react-router-dom'

const wilmingtonTourImage = 'https://ezelectricbikerentals.com/cdn/shop/files/ez-electric-bike-rentals-image-of-bikes-on-tour-de-wilmington.jpg?v=1746580005&width=1200'

const Tours = () => {
  return (
    <section className='section--tours'>
        <div className="container">
          <div className="text-center">
            <p className="tours--subtitle">Adventure to new places</p>
            <div className="tours--title">
              <h3 >Popular <span>Tours</span></h3>
            </div>
            
            <p className="tours--text">This eco-friendly adventure takes you through scenic routes and hidden gems, combining the excitement of cycling with the ease of electric assistance. Perfect for all fitness levels, our knowledgeable guides will share fascinating insights and stories about local history, culture, and landmarks.</p>
          </div>
          <div className="tours--container">
            <div className="card--container home--tour-card-grid">
              <article className="card--article">
                <img src={imgOne} alt="Scenic Clayton greenway e-bike tour with Triangle Adventures" loading='lazy' className="card--img" />
                <div className="card--data">
                  <span className="card--description">Raleigh Area</span>
                  <h2 className="card--title">Greenery, Scenery & Mindfulness</h2>
                  <Link to={'/locations/raleigh/scenic-tour'} className="card--button">Learn More</Link>
                </div>
              </article>

              <article className="card--article">
                <img src={imgTwo} alt="Food and drinks e-bike tour in Clayton NC" loading='lazy' className="card--img" />
                <div className="card--data">
                  <span className="card--description">Raleigh Area</span>
                  <h2 className="card--title">Tacos, Margaritas & History</h2>
                  <Link to={'/locations/raleigh/foods-and-drinks-tour'} className="card--button">Learn More</Link>
                </div>
              </article>

              <article className="card--article">
                <img src={imgThree} alt="Raleigh ghost and history e-bike tour" loading='lazy' className="card--img" />
                <div className="card--data">
                  <span className="card--description">Raleigh, NC</span>
                  <h2 className="card--title">Ghosts, Mystery, Raleigh History</h2>
                  <Link to={'/locations/raleigh/ghost-and-mysteries'} className="card--button">Learn More</Link>
                </div>
              </article>
            </div>
          </div>

          <div className="new-tour-feature text-center">
            <p className="tours--subtitle">Featured Tour</p>
            <div className="tours--title">
              <h3>Wilmington: <span>True Crime & Weird History</span></h3>
            </div>
            <p className="tours--text new-tour-feature__text">The stories your history teacher skipped. Explore Wilmington&apos;s most infamous crimes, bizarre legends, forgotten scandals, and strange local history.</p>
            <div className="tours--container new-tour-feature__container">
              <article className="card--article new--tour-card">
                <span className="new-tour-badge">Featured Tour</span>
                <img src={wilmingtonTourImage} alt="Wilmington True Crime and Weird History e-bike tour" loading='lazy' className="card--img" />
                <div className="card--data">
                  <span className="card--description">Wilmington, NC</span>
                  <h2 className="card--title">Wilmington: True Crime & Weird History</h2>
                  <Link to={'/locations/wilmington/true-crime-tour'} className="card--button">Featured Tour</Link>
                </div>
              </article>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Tours