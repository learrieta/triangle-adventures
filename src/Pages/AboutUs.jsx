import React from 'react'
import { Helmet } from 'react-helmet'
import AboutHero from '../Components/About/AboutHero/AboutHero'
import AboutDetails from '../Components/About/Details/AboutDetails'

const AboutUs = () => {
  return (
    <div>
      <Helmet>
        <title>About Us - Clayton NC</title>
        <meta name='description' content='About us page for Clayton NC' />
        <link rel='canonical' href='/aboutus' />
      </Helmet>
      <AboutHero />
      <AboutDetails />
    </div>
  )
}

export default AboutUs