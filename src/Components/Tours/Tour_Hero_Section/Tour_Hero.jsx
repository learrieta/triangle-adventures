import React from 'react'
import imgTourBanner from '../../../assets/Tours/tour_banner.jpg'
import mobileTourBanner from '../../../assets/Tours/mobileTourBanner.jpg'
import './tour_hero.css'

const Tour_Hero = () => {
  return (
    <div className="tour--container">
        <picture>
          <source 
            media="(max-width: 776px)" 
            srcSet={mobileTourBanner} 
          />
          <img 
            src={imgTourBanner} 
            className="banner--tour"
            alt="Triangle Adventures guided e-bike tours in the Raleigh area"
          />
        </picture>
            
        <h1 className='banner--tour--title text-white'>Raleigh Area E-Bike Tours</h1>
    </div>
  )
}

export default Tour_Hero
