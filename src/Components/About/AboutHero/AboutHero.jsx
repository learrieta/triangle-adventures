import React from 'react'
import about from '../../../assets/Aboutus/home_footer.jpg'
import './abouthero.css'

const AboutHero = () => {
  return (
    <div className='tour--container'>
        <img src={about} className='banner--tour' loading='eager' title='clayton sunset' alt='clayotn-sunset'></img>
             
        <h1 className='banner--tour--title text-white'>Who we are !</h1>
    </div>
  )
}

export default AboutHero