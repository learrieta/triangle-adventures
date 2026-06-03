import React from 'react'
import about from '../../../assets/Aboutus/about.jpg'
import './abouthero.css'

const AboutHero = () => {
  return (
    <div className='tour--container'>
        <img src={about} className='banner--tour' loading='eager' title='Clayton sunset' alt='Clayton sunset on a Triangle Adventures tour route'></img>
             
        <h1 className='banner--tour--title text-white'>About us</h1>
    </div>
  )
}

export default AboutHero