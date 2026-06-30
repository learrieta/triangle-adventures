
import './tours_options.css'
import imgOne from '../../../assets/Home/scenary.png'
import imgTwo from '../../../assets/Home/fooddrink.png'
import imgThree from '../../../assets/Home/mystery.png'
import { Link } from 'react-router-dom'

const Tours_Options = () => {
  return (
    <section className='section--tours'>
        <div className="container">
          <div className="text-center">
            <div className="tours--title">
              <h3 >Pick <span> a Raleigh Area Tour</span></h3>
            </div>         
          </div>
          <div className="tours--container">
            <div className="card--container">
              <article className="card--article">
                <img src={imgOne} alt="Scenic Clayton greenway e-bike tour with Triangle Adventures" loading='lazy' className="card--img" />
                <div className="card--data">
                  <span className="card--description">Raleigh Area</span>
                  <h2 className="card--title">Greenery, Scenery & Mindfulness</h2>
                  <p className='card--description'>2 hours of smooth, scenic riding on hand-picked sections of the most beautiful scenery on NC Mountains to Sea Trail. Picturesque moments, some local history, exhilarating e-bike ride. </p>   
                  <Link to={'/locations/raleigh/scenic-tour'} className="card--button">Learn More</Link>
                </div>
              </article>

              <article className="card--article">
                <img src={imgTwo} alt="Food and drinks e-bike tour in Clayton NC" loading='lazy' className="card--img" />
                <div className="card--data">
                  <span className="card--description">Raleigh Area</span>
                  <h2 className="card--title">Tacos, Margaritas & History</h2>
                  <p className='card--description'>Are you a foodie? Do you enjoy an adult beverage or two? Then these tours are for you.<br /> 1. Tacos, Taps, and Local Facts <br /> 2. Burgers, Brews, and History too</p>   
                  <Link to={'/locations/raleigh/foods-and-drinks-tour'} className="card--button">Learn More</Link>
                </div>
              </article>

              <article className="card--article">
                <img src={imgThree} alt="Raleigh ghost and history e-bike tour" loading='lazy' className="card--img" />
                <div className="card--data">
                  <span className="card--description">Raleigh, NC</span>
                  <h2 className="card--title">Ghosts, Mystery, Raleigh History</h2>
                  <p className='card--description'>Experience haunted spirits at Dorothea Dix Insane Asylum. See what makes Meredith College a ghostly hotspot. Talk to spirits with real witching rods... and lots more!</p>   
                  <Link to={'/locations/raleigh/ghost-and-mysteries'} className="card--button">Learn More</Link>
                </div>
              </article>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Tours_Options
