import React from 'react'
import './homebanner.css'

import homeVideo from '../../../assets/Home/tal.mp4'

const HomeBanner = () => {
  return (
    <div>
        
        <div className="banner--container">
            <div className="home--video--container">
              <video autoPlay loop muted src={homeVideo}></video>
            </div>
            <h1 className='banner--title text-white'>The Triangle's<br /> only E-Bike <br />Touring Company.</h1>
            <a type="button" className="large--button banner--position" href='https://fareharbor.com/embeds/book/triangleadventures/items/calendar/?full-items=yes&flow=1269994&from-ssl=yes&ga4t=AW-16453875434%2Cundefined__undefined%3B&g4=yes&cp=no&csp=no&back=https%3A%2F%2Fwww.triangle-adventures.com%2F&u=9b6d5aac-5806-4561-af48-c70f8e3bcf8c&language=en-us' target='_blank'> Book a Tour!</a>
        </div>
    </div>
  )
}

export default HomeBanner