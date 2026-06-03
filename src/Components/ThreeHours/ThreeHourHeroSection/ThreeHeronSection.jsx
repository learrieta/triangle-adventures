import React from 'react'

import twoHour from '../../../assets/3hour/food_drink_fun.jpg'
import mobileImg from '../../../assets/Tours/mobileImg.jpg'

const ThreeHeronSection = () => {
  return (
    <div className="tour--container">
        <picture>
          <source media="(max-width: 576px)" srcSet={mobileImg} />
          <img
            src={twoHour}
            className="banner--tour"
            loading="eager"
            alt="Food and drinks tour"
          />
        </picture>
            
        <h1 className='banner--tour--title text-white'>Food & Drinks Tour</h1>
    </div>
  )
}

export default ThreeHeronSection