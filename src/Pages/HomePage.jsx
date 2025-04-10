import { Helmet } from 'react-helmet'

import Ebike from '../Components/HomePage/E-bike/Ebikes'
import HeroSection from '../Components/HomePage/HeroSection/HeroSection'
import Pictures from '../Components/HomePage/Pictures/Pictures'
import Rent from '../Components/HomePage/Rent/Rent'
import Testimonials from '../Components/HomePage/Testimonials/Testimonials'
import Tours from '../Components/HomePage/Tours/Tours'
import HomeBanner from '../Components/HomePage/HomeBanner/HomeBanner'
import Partners from '../Components/HomePage/Partners/Partners'



const HomePage = () => {
  const ogData = {
    title: 'Outdoor fun with ebike guided tours across North Carolina!',
    description: 'The most fun outdoor activity around Raleigh and Clayton. Bring friends and family or team builders. Book now on our website.',
    url:'https://www.triangle-adventures.com',
    image: '../assets/websitelogo.png',
    siteName: 'Triangle Adventures',
    type: 'website'

  }
  return (

    <div>
        <Helmet>
          <title>Home - Triangle Adventures</title>
          <meta name='description' content='Fun outdoor activities to do in Clayton and Raleigh North Carolina' />
          <link rel='canonical' href='/' />
          <meta property='og:title' content={ogData.title} />
          <meta property='og:description' content={ogData.description} />
          <meta property='og:url' content={ogData.url} />
          <meta property='og:image' content={ogData.image} />
          <meta property='og:sitename' content={ogData.siteName} />
         
          <meta property='og:type' content={ogData.type} />
        </Helmet>
        
        <HomeBanner />
        <HeroSection />
        <Ebike />
        <Tours />
        <Testimonials />
        <Pictures />
        <Partners />
        
    </div>
  )
}

export default HomePage