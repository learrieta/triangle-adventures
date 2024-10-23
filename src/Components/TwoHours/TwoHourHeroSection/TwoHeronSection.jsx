import React from 'react'
import './twoherosection.css'
import twoHour from '../../../assets/twohour.jpg'

const TwoHeronSection = () => {
  return (
    <div className="tour--container">
        <img src={twoHour} className='banner--tour' loading='eager' title='clayton sunset' alt='clayotn-sunset'></img>
            
        <h1 className='banner--tour--title text-white'>Scenic Tour</h1>
    </div>
  )
}

export default TwoHeronSection