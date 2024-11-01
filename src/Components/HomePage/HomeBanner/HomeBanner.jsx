import React from 'react'
import './homebanner.css'
import imgBanner from '../../../assets/banner-picture.png'

const HomeBanner = () => {
  return (
    <div>
        
        <div className="banner--container">
            <img src={imgBanner} className='banner-image' loading='eager' title='clayton sunset' alt='clayotn-sunset'></img>
            
            <h1 className='banner--title text-white'>The Triangle's<br /> only E-Bike <br />Touring Company.</h1>
            <a type="button" className="large--button banner--position" href='https://fareharbor.com/embeds/book/triangleadventures/items/?full-items=yes' target='_blank'> Book a Tour!</a>
        </div>
    </div>
  )
}

export default HomeBanner