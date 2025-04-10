import './tours.css'
import imgOne from '../../../assets/Home/scenary.jpg'
import imgTwo from '../../../assets/Home/fooddrink.jpg'
import imgThree from '../../../assets/Home/mystery.jpeg'

import { Link } from 'react-router-dom'
const Tours = () => {
  return (
    <section className='section--tours'>
        <div className="container">
          <div className="text-center">
            <p className="tours--subtitle">Adventure to new places</p>
            <div className="tours--title">
              <h3 >Popular <span>Tours</span></h3>
            </div>
            
            <p className="tours--text">This eco-friendly adventure takes you through scenic routes and hidden gems, combining the excitement of cycling with the ease of electric assistance. Perfect for all fitness levels, our knowledgeable guides will share fascinating insights and stories about the towns history, culture, and landmarks.</p>
          </div>
          <div className="tours--container">
            <div className="card--container">
              <article className="card--article">
                <img src={imgOne} alt="image" loading='eager' title='ebike tours' className="card--img" />
                <div className="card--data">
                  <span className="card--description">Clayton, NC</span>
                  <h2 className="card--title">Greenery, Scenery & Mindfulness</h2>
                  <Link to={'/tours/scenic-tour'} className="card--button">Learn More</Link>
                </div>
              </article>

              <article className="card--article">
                <img src={imgTwo} alt="image" loading='eager' title='ebike tours' className="card--img" />
                <div className="card--data">
                  <span className="card--description">Clayton, NC</span>
                  <h2 className="card--title">Food and Drink Tours</h2>
                  <a href="#" className="card--button">Learn More</a>
                </div>
              </article>

              <article className="card--article">
                <img src={imgThree} alt="image" loading='eager' title='ebike tours' className="card--img" />
                <div className="card--data">
                  <span className="card--description">Raleigh, NC</span>
                  <h2 className="card--title">Ghosts, Mystery, Raleigh History</h2>
                  <a href="#" className="card--button">Learn More</a>
                </div>
              </article>
              
            </div>
          </div>
          
          
        
        
        
        </div>
    </section>
  )
}

export default Tours