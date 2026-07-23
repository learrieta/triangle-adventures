
import foodTourSmall from '../../../assets/3hour/food_drink_fun-optimized-800.webp'
import foodTourLarge from '../../../assets/3hour/food_drink_fun-optimized-1600.webp'
import mobileImgSmall from '../../../assets/Tours/mobileImg-optimized-800.webp'
import mobileImgLarge from '../../../assets/Tours/mobileImg-optimized-1600.webp'

const ThreeHeronSection = () => {
  return (
    <div className="tour--container">
        <picture>
          <source
            media="(max-width: 576px)"
            srcSet={`${mobileImgSmall} 800w, ${mobileImgLarge} 1600w`}
            sizes="100vw"
            width="1600"
            height="1200"
          />
          <img
            src={foodTourLarge}
            srcSet={`${foodTourSmall} 800w, ${foodTourLarge} 1600w`}
            sizes="100vw"
            width="1600"
            height="632"
            className="banner--tour"
            loading="eager"
            alt="Guests enjoying the Raleigh area food and drinks e-bike tour"
          />
        </picture>
            
        <h1 className='banner--tour--title text-white'>Food & Drinks Tour</h1>
    </div>
  )
}

export default ThreeHeronSection
