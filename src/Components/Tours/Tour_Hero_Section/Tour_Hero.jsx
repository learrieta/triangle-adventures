import React from 'react'
import imgTourBanner from '../../../assets/tour_banner.jpg'
import './tour_hero.css'

const Tour_Hero = () => {
  return (
    <div className="tour--container">
        <img src={imgTourBanner} className='banner--tour' loading='eager' title='clayton sunset' alt='clayotn-sunset'></img>
            
        <h1 className='banner--tour--title text-white'>Discover Our E-bike Tours</h1>
    </div>
    
    
  )
}

export default Tour_Hero