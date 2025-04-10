
import './tours_options.css'
import imgOne from '../../../assets/Home/scenary.jpg'
import imgTwo from '../../../assets/Home/fooddrink.jpg'
import imgThree from '../../../assets/Home/mystery.jpeg'
import { Link } from 'react-router-dom'

const Tours_Options = () => {
  return (
    <section className='section--tours'>
        <div className="container">
          <div className="text-center">
            
            <div className="tours--title">
              <h3 >Pick <span> a Tour</span></h3>
            </div>         
          </div>
          <div className="tours--container">
            <div className="card--container">
              <article className="card--article">
                <img src={imgOne} alt="image" loading='eager' title='ebike tours' className="card--img" />
                <div className="card--data">
                  <span className="card--description">Clayton, NC</span>
                  <h2 className="card--title">Greenery, Scenery & Mindfulness</h2>
                  <p className='card--description'>2 hours of smooth, scenic riding on hand-picked sections of the most beautiful scenery on NC Mountains to Sea Trail. Picturesque moments, some local history, exhilarating e-bike ride. Snack included.</p>   
                  <Link to={'/tours/scenic-tour'} className="card--button">Learn More</Link>
                  
                </div>
              </article>

              <article className="card--article">
                <img src={imgTwo} alt="image" loading='eager' title='ebike tours' className="card--img" />
                <div className="card--data">
                  <span className="card--description">Clayton, NC</span>
                  <h2 className="card--title">Food and Drink Tours</h2>
                  <p className='card--description'>Are you a foodie? Do you enjoy an adult beverage or two? Then these tours are for you.<br /> 1. Tacos, Taps, and Local Facts <br /> 2. Burgers, Brews, and History too</p>   
                  <Link to={'/tours/foods-and-drinks-tour'} className="card--button">Learn More</Link>
                </div>
              </article>

              <article className="card--article">
                <img src={imgThree} alt="image" loading='eager' title='ebike tours' className="card--img" />
                <div className="card--data">
                  <span className="card--description">Raleigh, NC</span>
                  <h2 className="card--title">Ghosts, Mystery, Raleigh History</h2>
                  <p className='card--description'>Experience haunted spirits at Dorothea Dix Insane Asylum. See what makes Meredith College a ghostly hotspot. Talk to spirits with real witching rod... and lots more!</p>   
                  <a href="#" className="card--button">Learn More</a>
                </div>
              </article>
              
            </div>
          </div>
        </div>
    </section>
  )
}

export default Tours_Options